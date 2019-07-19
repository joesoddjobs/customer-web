import React from 'react'
import { withAuthenticator } from 'aws-amplify-react'
import { withRouter } from 'react-router-dom'
import {
  SignIn,
  ConfirmSignIn,
  ConfirmSignUp,
  ForgotPassword,
  RequireNewPassword,
  SignUp,
  VerifyContact
} from './containers/auth'

const Authenticator = ({ children }) => {
  return <>{children}</>
}

export default withRouter(
  withAuthenticator(Authenticator, false, [
    <SignIn />,
    <ConfirmSignIn />,
    <VerifyContact />,
    <SignUp />,
    <ConfirmSignUp />,
    <ForgotPassword />,
    <RequireNewPassword />
  ])
)
