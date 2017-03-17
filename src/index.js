import React from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/home'
import Playlist from './containers/playlist'
import { Router, Route, browserHistory } from 'react-router'
import 'tachyons'

import './index.css'

if (module.hot) {
  require('webpack/hot/dev-server')
}

require('./style.styl')

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="playlist/:playlistID" component={Playlist}/>
    </Router>
  ),
  document.getElementById('root')
)
