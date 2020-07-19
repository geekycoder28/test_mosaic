import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import { NewsPage } from 'containers'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/news' />} />
      <Route path='/news' component={NewsPage} />
    </Switch>
  </Router>
)

export default Routes
