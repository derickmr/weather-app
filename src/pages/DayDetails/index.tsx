import React, { Component } from 'react';
import { DayInfo } from '../../models/DayInfo'
import { RouteComponentProps, Link } from 'react-router-dom';
import { Title, Text, Div } from '../../styles/common';
import { CardDetails, TextDetails } from './styles'

type DayState = {
    dayInfo: DayInfo;
}

export default class DayDetails extends Component<RouteComponentProps, DayState> {

    iconUrl: string;

    constructor(props: any){
        super(props);

        const locationState: any = this.props.location.state;

        this.state = ({
            dayInfo: locationState.dayInfo as DayInfo
        })

        this.iconUrl = `http://openweathermap.org/img/wn/${this.state.dayInfo.weather.icon}@2x.png`
    }

    render() {
        return <Link to='/'>
                    <CardDetails>
                        <Title>
                            {this.state.dayInfo.dayInTheWeek}
                        </Title>
                        <Text color={"#003EFF"}>{this.state.dayInfo.temperature.min} °C</Text>
                        <Text color={"#FF0000"}>{this.state.dayInfo.temperature.max} °C</Text>
                        <Div><img src={this.iconUrl} alt="new" /> </Div>
                        <Text color={"#000000"}>{this.state.dayInfo.rainChance}%</Text>
                        <Text color={"#000000"}>{this.state.dayInfo.weather.main}</Text>

                        <TextDetails color={"#000000"}>Morning: {this.state.dayInfo.temperature.morning} °C</TextDetails>
                        <TextDetails color={"#000000"}>Day: {this.state.dayInfo.temperature.day} °C</TextDetails>
                        <TextDetails color={"#000000"}>Night: {this.state.dayInfo.temperature.night} °C</TextDetails>
                    </CardDetails>
              </Link>
    }
}
