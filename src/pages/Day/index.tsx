import React, { Component } from 'react';

import { DayInfo } from '../../models/DayInfo'

import { Title } from './styles';

type DayProps = {
    dayInfo: DayInfo;
}

export default class Day extends Component<DayProps, {}> {

    constructor(props: DayProps){
        super(props);
    }

    render() {
        return <Title> {this.props.dayInfo.id} </Title>
    }
}

