import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AssetContainer from './Components/AssetContainer';
import SearchContainer from './Components/SearchContainer';


render (
    <Router>
        <div>
            <Route path="/" component={SearchContainer} />
            <Route path="/search(/:query)" component={SearchContainer} />
            <Route path="/asset/:id" component={AssetContainer} />
        </div>
    </Router>,
    document.getElementById('root')
)