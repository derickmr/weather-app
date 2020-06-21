import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Week from './components/Main';
import DayDetails from './components/DayDetails';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Week}/>
                <Route path="/dayDetails" component={DayDetails}/>
            </Switch>
        </BrowserRouter>

    );
}
