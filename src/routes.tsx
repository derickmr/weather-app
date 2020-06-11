import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Week from './pages/Main';
import DayDetails from './pages/DayDetails';

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
