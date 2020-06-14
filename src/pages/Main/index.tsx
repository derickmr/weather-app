import React, { Component } from 'react';
import Day from '../Day'

import api from '../../services/api';
import { DayInfo } from '../../models/DayInfo';

import geolocation from '@react-native-community/geolocation';

type Week = {
    days: Array<DayInfo>;
}

function listItems (dailyData: Array<DayInfo>){
    return dailyData.map((dayInfo:DayInfo) =>
        <Day key = {dayInfo.id} dayInfo = {dayInfo}/>
    );
}

var latitude: string;
var longitude: string;

export default class Main extends Component<{}, Week> {

    weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    weekCount = new Date().getDay();

    constructor(props: any){
        super(props);

        this.state = {days: []};

        this.getWeatherInfo = this.getWeatherInfo.bind(this);
    }

    getGeoLocation(callBack: Function){
        geolocation.getCurrentPosition(function(position: any){
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            callBack();
        });
    }

    async getWeatherInfo(){

        const weekStorage = localStorage.getItem('days');

        if (weekStorage){
            this.setState({
                days: JSON.parse(weekStorage)
            })
        }

        else {
            const response = await api.get(`onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=&appid=2c2969f366182280dea46210a412e3db`);

            // const data = {
            //     daily: response.data.daily
            // };

            this.setState({
                days: this.getDaysInfo(response.data.daily)
            })

            const { days } = this.state;

            localStorage.setItem('days', JSON.stringify(days));
        }

    }

    getDaysInfo(data: any): Array<DayInfo>{
        return (data.map((element: any) => {
            const info = new DayInfo();

            info.id = element.weather[0].id;
            info.dayInTheWeek = this.weekDays[this.weekCount++ % this.weekDays.length];
            info.rainChance = element.rain !== undefined ? element.rain : 0;

            info.feelsLike = {
                day: element.feels_like.day,
                evening: element.feels_like.eve,
                morning: element.feels_like.morn,
                night: element.feels_like.night
            }

            info.weather = {
                icon: element.weather[0].icon,
                main: element.weather[0].main
            }

            info.temperature = {
                day: element.temp.day,
                evening: element.temp.eve,
                night: element.temp.night,
                morning: element.temp.morn,
                min: element.temp.min,
                max: element.temp.max
            }

            return info;

        }));
    }

    componentDidMount() {
        this.getGeoLocation(this.getWeatherInfo);
    }

    render() {
        return(
            <>
                {listItems(this.state.days)}
            </>
        );
    }
}
