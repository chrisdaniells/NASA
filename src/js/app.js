import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, IndexRoute } from 'react-router-dom';

import AssetContainer from './Components/AssetContainer';
import SearchContainer from './Components/SearchContainer';


render (
    <Router>
        <div>
            <Route exact path="/" component={SearchContainer} />
            <Route path="/search(/:query)" component={SearchContainer} />
            <Route path="/asset/:id" component={AssetContainer} />
        </div>
    </Router>,
    document.getElementById('root')
)