import React, { Component } from 'react';
import Day from '../Day'

import api from '../../services/api';
import { DayInfo } from '../../models/DayInfo';

type Week = {
    days: Array<DayInfo>;
}

function listItems (dailyData: Array<DayInfo>){
    return dailyData.map((dayInfo:DayInfo) =>
        <Day key = {dayInfo.id} dayInfo = {dayInfo}/>
    );
}

export default class Main extends Component<{}, Week> {

    constructor(props: any){
        super(props);

        this.state = {days: []};

    }

    async getWeatherInfo(){
        const response = await api.get(`onecall?lat=-29.1602432&lon=-51.2065536&exclude=&appid=2c2969f366182280dea46210a412e3db`);

        const data = {
            daily: response.data.daily
        };

        console.log("test");
        console.log(data.daily);

        this.setState({
            days: this.getDaysInfo(data.daily)
        })

    }

    getDaysInfo(data: any): Array<DayInfo>{

        return (data.map(function (element: any){
            const info = new DayInfo();

            info.id = element.weather[0].id;

            info.feelsLike = {
                day: element.feels_like.day,
                evening: element.feels_like.eve,
                morning: element.feels_like.morn,
                night: element.feels_like.night
            }

            info.weather = {
                icon: element.weather.icon,
                main: element.weather.main
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

    componentWillMount() {
        this.getWeatherInfo();
    }

    render() {
        return(
            <div>
                {listItems(this.state.days)}
            </div>
        );
    }
}
