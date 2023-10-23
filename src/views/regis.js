import React from 'react'

import { Helmet } from 'react-helmet'

import './regis.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Registrasi</title>
        <meta property="og:title" content="Straight Strong Alpaca" />
      </Helmet>
      <div className="home-container1">
        <div className="regis">
          <h1 className="regis-title">Registrasi</h1>
          <span className="regis-desc">
            Masukkan Username Password dan No Whatsapp Anda.
          </span>
          <input
            type="text"
            placeholder="Username"
            className="regis-username input"
          />
          <input
            type="text"
            placeholder="No. Whatsapp"
            className="regis-wa input"
          />
          <input
            type="text"
            placeholder="Pasword"
            className="regis-password input"
          />
          <input
            type="text"
            placeholder="Konfirmasi Password"
            className="regis-konfir input"
          />
          <button type="button" className="home-button button">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
