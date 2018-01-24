import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import AssetContainer from './Components/AssetContainer';
import SearchContainer from './Components/SearchContainer';


render (
    <Router>
        <Switch>
            <Route path="/search/:query?" component={SearchContainer} />
            <Route path="/asset/:nasaid" component={AssetContainer} />
            <Route exact path="/" component={SearchContainer} />
        </Switch>
    </Router>,
    document.getElementById('root')
)