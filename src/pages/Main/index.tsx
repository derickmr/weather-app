import React, { Component } from 'react';
import Day from '../Day'

import Link from 'react-router-dom';

import async from 'axios';
import api from '../../services/api';

type DailyData = {
    daily: Array<Object>;
}

export default class Main extends Component<{}, DailyData> {

    async getWeatherInfo(){
        const response = await api.get(`onecall?lat=-29.1602432&lon=-51.2065536&exclude=&appid=2c2969f366182280dea46210a412e3db`);

        const data = {
            daily: response.data.daily
        };

        this.setState({
            daily: data.daily
        });


        console.log(this.state.daily[0]);

    }

    componentWillMount() {
        this.getWeatherInfo();
    }



    render() {
        return(
             <>
                <Day dayInfo = {this.state.daily[0]} />
                <Day dayInfo = {this.state.daily[1]} />
                <Day dayInfo = {this.state.daily[2]} />
                <Day dayInfo = {this.state.daily[3]} />
                <Day dayInfo = {this.state.daily[4]} />
             </>
        );
    }
}
