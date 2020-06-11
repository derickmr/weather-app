import React, { Component } from 'react';
import Day from '../Day'

import api from '../../services/api';

type DailyData = {
    daily: Array<any>;
}

function listItems (dailyData: Array<any>){
    return dailyData.map((dailyInfo:any) =>
        <Day key = {dailyInfo.dt} dayInfo = {dailyInfo}/>
    );
}

export default class Main extends Component<{}, DailyData> {

    constructor(props: any){
        super(props);

        this.state = {daily: []};

    }

    async getWeatherInfo(){
        const response = await api.get(`onecall?lat=-29.1602432&lon=-51.2065536&exclude=&appid=2c2969f366182280dea46210a412e3db`);

        const data = {
            daily: response.data.daily
        };

        this.setState({
            daily: data.daily
        });

        console.log(this.state.daily);

    }

    componentWillMount() {
        this.getWeatherInfo();
    }

    render() {
        return(
            <div>
                {listItems(this.state.daily)}
            </div>
        );
    }
}
