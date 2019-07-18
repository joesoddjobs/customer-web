import React from 'react'
import Amplify from 'aws-amplify'
import {
  ConfirmSignIn,
  ConfirmSignUp,
  ForgotPassword,
  RequireNewPassword,
  SignUp,
  VerifyContact,
  withAuthenticator
} from 'aws-amplify-react'
// eslint-disable-next-line camelcase
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)

const MySignIn = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        backgroundColor: 'red'
      }}
    />
  )
}

function App() {
  return <div className="App">APP</div>
}

export default withAuthenticator(App, false, [
  <MySignIn />,
  <ConfirmSignIn />,
  <VerifyContact />,
  <SignUp />,
  <ConfirmSignUp />,
  <ForgotPassword />,
  <RequireNewPassword />
])
