import React, { Component } from 'react';
import { DayInfo } from '../../models/DayInfo'
import { RouteComponentProps } from 'react-router-dom';

type DayState = {
    dayInfo: DayInfo;
}

export default class DayDetails extends Component<RouteComponentProps, DayState> {
    constructor(props: any){
        super(props);

        const locationState: any = this.props.location.state;

        this.state = ({
            dayInfo: locationState.dayInfo as DayInfo
        })
    }

    render() {
        return <h1>{this.state.dayInfo?.dayInTheWeek}</h1>
    }
}
