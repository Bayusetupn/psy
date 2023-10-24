import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import './login.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Home = (props) => {
  let history = useHistory()
  const [name,setName] = useState("")
  const [pass,setPass] = useState("")

  const data = {
    nama: name,
  }

  return (
    <div className="home-containers">
      <Helmet>
        <title>Login</title>
        <meta property="og:title" content="Alienated Minor Jackal" />
      </Helmet>
      <div className="login">
        <div className="login2">
          <h1 className="login-title">Login.</h1>
          <span className="desc">
            Masukkan Nama dan Password untuk login ke akun anda.
          </span>
          <input
            type="text"
            placeholder="Nama"
            className="home-username input"
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Pasword"
            className="home-password input"
            onChange={(e)=>setPass(e.target.value)}
          />
          <button onClick={()=>name? pass ? history.replace('/dash',data):window.alert("Password Tidak Boleh Kosong!"): window.alert("Nama Tidak Boleh Kosong!")} type="button" className="home-button-login button">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
