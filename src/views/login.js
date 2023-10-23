import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Login</title>
        <meta property="og:title" content="Alienated Minor Jackal" />
      </Helmet>
      <div className="login">
        <div className="login2">
          <h1 className="home-text">Login.</h1>
          <span className="desc">
            Masukkan Username dan Password untuk login ke akun anda.
          </span>
          <input
            type="text"
            placeholder="Username"
            className="home-username input"
          />
          <input
            type="text"
            placeholder="Pasword"
            className="home-password input"
          />
          <button type="button" className="home-button-login button">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
