import React, { Component } from 'react';
import { DayInfo } from '../../models/DayInfo';
import { Card } from './styles';
import { Title, Text, Div } from '../../styles/common';
import { Link } from 'react-router-dom';

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
        return <Link to={{pathname: '/dayDetails', state: {dayInfo: this.props.dayInfo}}}>
                    <Card>
                        <Title>
                            {this.props.dayInfo.dayInTheWeek}
                        </Title>
                        <Text color={"#003EFF"}>{this.props.dayInfo.temperature.min} °C</Text>
                        <Text color={"#FF0000"}>{this.props.dayInfo.temperature.max} °C</Text>
                        <Div><img src={this.iconUrl} alt="new" /> </Div>
                        <Text color={"#000000"}>{this.props.dayInfo.rainChance}%</Text>
                        <Text color={"#000000"}>{this.props.dayInfo.weather.main}</Text>
                    </Card>
                </Link>
    }
}

