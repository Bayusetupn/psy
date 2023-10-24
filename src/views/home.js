import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import './home.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Home = (props) => {

  const [open,setOpen] = useState(false)
  
  return (
    <div className="home">
      <Helmet>
        <title>Beranda</title>
        <meta property="og:title" content="Trustworthy Academic Grasshopper" />
      </Helmet>
      <div className="home-container01 navbar">
        <header data-role="Header" className="home-header">
          <img
            id="logos"
            alt="logo"
            src="/external/logoss.svg"
            className="home-image"
          />
          <div className="home-nav"></div>
          <div className="home-btn-group">
            <button id="log" className="home-login button">
              <Link to="/login" >Login</Link>
            </button>
            <Link to="/regis" ><button id="reg" className="home-register button">
              Daftar
            </button></Link>
            
          </div>
          <div data-role="BurgerMenu" onClick={()=>setOpen(!open)} className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav1">
              <div className="home-container02">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image1"
                />
                <div data-role="CloseMobileMenu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="mobile" style={{display: open? 'block':'none'}} >
        <div className="home-buttonss">
          <button id="log" className="home-login button">
          <Link to="/login" >Login</Link>
          </button>
          <Link to="/regis">
          <button id="reg" className="home-register button">
          Daftar
          </button>
          </Link>
        </div>
      </div>
      <div className="home-container03">
        <div id="hook" className="home-container04">
          <h1 className="home-texts">Konsultasi Masalah Anda</h1>
          <span className="home-text01">
            <span>
            Kesehatan mental adalah aset berharga. sambut kebahagiaan, hadapi tantangan dan wujudkan 
            ketenangan batin bersama kami!
            </span>
          </span>
          <Link to="/regis" ><button id="btn" type="button" className="home-buttons button">
            Daftar Sekarang
          </button></Link>
          
        </div>
        <img
        id='imgs'
          alt="image"
          src="/external/pic.jpg"
          loading="lazy"
          className="home-image2"
        />
      </div>
      <div className="home-container05">
        <div className="home-container06">
          <span className="home-text04">Quotes of The Day </span>
          <span className="home-text05">
            &quot;Standar yang Anda lalui, adalah standar yang Anda terima &quot;
          </span>
        </div>
      </div>
      <div className="home-container07">
        <div className="title-layanan">
          <span className="home-text06">Layanan kami</span>
        </div>
        <div className="home-container09">
          <div className="home-container10">
            <div className="home-container11">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M853.333 810.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-42.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-128c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h85.333v128zM170.667 810.667v-170.667h85.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v128c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-42.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM85.333 810.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h42.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-128c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-85.333v-42.667c0-94.251 38.144-179.541 99.968-241.365s147.115-99.968 241.365-99.968 179.541 38.144 241.365 99.968 99.968 147.115 99.968 241.365v42.667h-85.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v128c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h42.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-298.667c0-117.803-47.787-224.555-124.971-301.696s-183.893-124.971-301.696-124.971-224.555 47.787-301.696 124.971-124.971 183.893-124.971 301.696v256z"></path>
              </svg>
            </div>
            <h1 className="home-text07">
              <span>Podcast</span>
              <br></br>
              <span>Bersama </span>
              <br></br>
            </h1>
            <span className="home-text12">Dengarkan podcast menuju Perjalana Kesehatan Mental yang Lebih Baik.</span>
          </div>
          <div className="home-container12">
            <div className="home-container13">
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M768 342v-86h-512v86h512zM598 598v-86h-342v86h342zM256 384v86h512v-86h-512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
              </svg>
            </div>
            <h1 className="home-text13">
              <span>
                Konsultasi
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>via </span>
              <span>Chat</span>
              <br></br>
            </h1>
            <span className="home-text19">ruang dialog interaksi dan berbagi cerita</span>
          </div>
          <div className="home-container14">
            <div className="home-container15">
              <svg viewBox="0 0 1024 1024" className="home-icon14">
                <path d="M726 448l170-170v468l-170-170v150q0 18-13 30t-31 12h-512q-18 0-30-12t-12-30v-428q0-18 12-30t30-12h512q18 0 31 12t13 30v150z"></path>
              </svg>
            </div>
            <h1 className="home-text20">
              <span>Konsultasi</span>
              <br></br>
              <span>via Video Call</span>
              <br></br>
            </h1>
            <span className="home-text25">interaksi tatap muka tuk berbagi cerita</span>
          </div>
          <img
            alt="image"
            src="/external/group%202.svg"
            className="home-image3"
          />
          <img
            alt="image"
            src="/external/group%202.svg"
            className="home-image4"
          />
        </div>
      </div>
      <div className="home-container16">
        <div className="home-container17">
          <h1 className="home-text27">
            <br className="home-text28"></br>
            <span>&quot;Tersenyumlah untuk bahagia bukan untuk terlihat bahagia&quot;</span>
            <br></br>
          </h1>
          <h1 className="home-text31">
            <br className="home-text32"></br>
            <br></br>
          </h1>
        </div>
      </div>
      <div className="home-container18">
        <img
          id="logo"
          alt="logo"
          src="/external/logos2.svg"
          className="home-image5"
        />
        <div className="home-container19">
          <div className="home-container20">
            <svg viewBox="0 0 1024 1024" className="home-icon16">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <span className="home-text34">Psy.Share@gmail.com</span>
          </div>
          <div className="home-container21">
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon18">
              <path d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"></path>
            </svg>
            <span className="home-text35">081122334455</span>
          </div>
          <div className="home-container22">
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon20">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <span className="home-text36">@Psy.Share</span>
          </div>
        </div>
        <img
          alt="image"
          src="/external/group%203.svg"
          className="home-image6"
        />
        <div className="home-container23">
          <span className="home-text37">@2023 Crafted with love </span>
        </div>
      </div>
    </div>
  )
}

export default Home
