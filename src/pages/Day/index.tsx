import React, { Component } from 'react';

import { DayInfo } from '../../models/DayInfo'

import { Title, Card } from './styles';

type DayProps = {
    dayInfo: DayInfo;
}

export default class Day extends Component<DayProps, {}> {

    iconUrl: string;

    constructor(props: DayProps){
        super(props);
        this.iconUrl = `http://openweathermap.org/img/wn/${this.props.dayInfo.weather.icon}@2x.png`
    }

    render() {
        return <Card>
                <Title>{this.props.dayInfo.temperature.day}</Title>
                <img src={this.iconUrl} alt="new" />
             </Card>
    }
}

