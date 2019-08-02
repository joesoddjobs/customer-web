import React from 'react'
import Amplify from 'aws-amplify'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Authenticator from './authenticator'
// eslint-disable-next-line camelcase
import aws_exports from './aws-exports'
import { Footer, NavBar } from './components'
import { Dashboard, Home, Info } from './containers'
import theme from './theme'
import './App.less'

Amplify.configure(aws_exports)

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/info" component={Info} />
            <Authenticator>
              <Route path="/dashboard" component={Dashboard} />
            </Authenticator>
          </Switch>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
