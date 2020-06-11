import React, { Component } from 'react';

import { Title } from './styles';

type DayState = {
    name: String;
}

type DayInfo = {
    dayInfo: Object;
}

export default class Day extends Component<DayInfo, DayState> {

constructor(props: DayInfo){
    super(props);
    console.log(props.dayInfo)
}

    tick() {
        this.setState({
          name: "jefersan"
        });
    }

    componentWillMount() {
        this.tick();
    }

    render() {
        return <Title> {this.state.name} </Title>
    }
}
