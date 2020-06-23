import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RouterPaths } from '../src/utils/RouterPaths';

import Week from './components/Main';
import DayDetails from './components/DayDetails';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path={RouterPaths.HOME_ROUTE} exact component={Week}/>
                <Route path={RouterPaths.DAY_DETAILS_ROUTE} component={DayDetails}/>
            </Switch>
        </BrowserRouter>

    );
}
