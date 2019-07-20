import React from 'react'
import { Auth } from 'aws-amplify'

const click = e => {
  e.preventDefault()
  Auth.signOut()
}

const Dashboard = () => {
  console.log(Auth)
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        backgroundColor: 'blue'
      }}
    >
      <button onClick={e => click(e)} type="button">
        SignOut
      </button>
    </div>
  )
}

export default Dashboard
