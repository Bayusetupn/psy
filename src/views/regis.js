import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import './regis.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Home = (props) => {
  const history = useHistory()

  const [nama,setNama] = useState("")
  const [no,setNo] = useState("")
  const [pass,setPass] = useState("")

  const data = {
    nama : nama,
    no: no,
  }

  return (
    <div className="home-container">
      <Helmet>
        <title>Registrasi</title>
        <meta property="og:title" content="Straight Strong Alpaca" />
      </Helmet>
      <div className="home-container1">
        <div className="regis">
          <h1 className="regis-title">Daftar.</h1>
          <span className="regis-desc">
            Masukkan Nama, Password dan No Whatsapp Anda.
          </span>
          <input
            type="text"
            placeholder="Nama"
            className="regis-username input"
            onChange={(e)=>setNama(e.target.value)}
          />
          <input
            type="number"
            placeholder="No. Whatsapp"
            className="regis-wa input"
            onChange={e=>setNo(e.target.value)}
          />
          <input
            type="password"
            placeholder="Pasword"
            className="regis-password input"
            onChange={e=>setPass(e.target.value)}
          />
          <button onClick={()=>nama? no? pass? history.replace('/dash',data) : window.alert("Password Tidak Boleh Kosong!") : window.alert("No Whatsapp Tidak Boleh Kosong!") : window.alert("Nama Tidak Boleh Kosong!") }  type="button" className="home-button button">
            Daftar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
