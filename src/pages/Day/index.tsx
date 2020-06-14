import React, { Component } from 'react';

import { DayInfo } from '../../models/DayInfo'

import { Title, Card, TempText, Div } from './styles';

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
                    <Title>
                        {this.props.dayInfo.dayInTheWeek}
                    </Title>
                    <TempText color={"#003EFF"}>{this.props.dayInfo.temperature.min} °C</TempText>
                    <TempText color={"#FF0000"}>{this.props.dayInfo.temperature.max} °C</TempText>
                    <Div><img src={this.iconUrl} alt="new" /> </Div>
                    <TempText color={"#000000"}>{this.props.dayInfo.rainChance}%</TempText>
                </Card>
    }
}

