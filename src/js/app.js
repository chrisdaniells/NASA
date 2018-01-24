import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import AssetContainer from './Components/AssetContainer';
import SearchContainer from './Components/SearchContainer';


render (
    <Router history={history}>
        <IndexRoute component={SearchContainer} />
        <Route path="/search(/:query)" component={SearchContainer} />
        <Route path="/asset/:id" component={AssetContainer} />
    </Router>,
    document.getElementById('root')
)