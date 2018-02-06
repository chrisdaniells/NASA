import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import AssetContainer from './Components/AssetContainer'
import SearchContainer from './Components/SearchContainer'

import '../scss/app.scss'

const history = createBrowserHistory()

render(
  <Router>
    <Switch>
      <Route path="/search/:query?/:assettype?" component={SearchContainer} />
      <Route path="/asset/:type/:nasaid" component={AssetContainer} />
      <Route exact path="/" component={SearchContainer} />
    </Switch>
  </Router>,
  document.getElementById('root'),
)
