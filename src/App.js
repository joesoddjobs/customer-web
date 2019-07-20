import React from 'react'
import Amplify from 'aws-amplify'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Authenticator from './authenticator'
// eslint-disable-next-line camelcase
import aws_exports from './aws-exports'
import { Dashboard, Home } from './containers'

Amplify.configure(aws_exports)

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Authenticator>
            <Route path="/dashboard" component={Dashboard} />
          </Authenticator>
        </Switch>
      </div>
    </Router>
  )
}

export default App
