import { Redirect, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './dash.css'
import { useEffect } from 'react';

const Dash = () => {

    const history = useHistory()
    const location = useLocation()
    const {nama,no} = location.state

    return (
        <div className='container'>
            <div className='nav'>
                <div className='profile'>
                    <img
                        src='/external/profile.svg'
                        loading='lazy'
                        id='profiles'
                    />
                    <div className='profile-info'>
                        <p id='name'>{nama}</p>
                        <p id='phone'>{no? no:"085152211334"}</p>
                    </div>
                </div>
                <div className='out' onClick={()=>history.replace('/')} >
                    <p id='log'>Log Out</p>
                </div>
            </div>
            <div className='content'>
            <div className='layanan'>
                <div className='video-call' onClick={()=>window.open("https://api.whatsapp.com/send/?phone=6285745737305&text=%22Halo+saya+ingin+konsultasi+via+VIDEO+CALL%22&type=phone_number&app_absent=0")}>
                    <div className='vid'>
                        <div className="home-container11">
                            <svg viewBox="0 0 1024 1024" className="home-icon10">
                                <path d="M853.333 810.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-42.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-128c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h85.333v128zM170.667 810.667v-170.667h85.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v128c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-42.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM85.333 810.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h42.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-128c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-85.333v-42.667c0-94.251 38.144-179.541 99.968-241.365s147.115-99.968 241.365-99.968 179.541 38.144 241.365 99.968 99.968 147.115 99.968 241.365v42.667h-85.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v128c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h42.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-298.667c0-117.803-47.787-224.555-124.971-301.696s-183.893-124.971-301.696-124.971-224.555 47.787-301.696 124.971-124.971 183.893-124.971 301.696v256z"></path>
                            </svg>
                        </div>
                        <p>Mulai Konsultasi Via Video Call</p>
                    </div>
                </div>
                <div className='chat' onClick={()=>window.open("https://api.whatsapp.com/send/?phone=6285745737305&text=%22Halo+saya+ingin+konsultasi+via+CHAT%22&type=phone_number&app_absent=0")}>
                    <div className='cht'>
                    <div className="home-container13">
              <svg viewBox="0 0 1024 1024" className="chats">
                <path d="M768 342v-86h-512v86h512zM598 598v-86h-342v86h342zM256 384v86h512v-86h-512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
              </svg>
            </div>
                        <p>Mulai Konsultasi Via Chat</p>
                    </div>
                </div>
                <div className='podcast' onClick={()=>history.push('/podcast')}>
                    <div className='pod'>
                    <div className="home-container15">
              <svg viewBox="0 0 1024 1024" className="pods">
                <path d="M726 448l170-170v468l-170-170v150q0 18-13 30t-31 12h-512q-18 0-30-12t-12-30v-428q0-18 12-30t30-12h512q18 0 31 12t13 30v150z"></path>
              </svg>
            </div>
                        <p>Lihat Koleksi Podcast</p>
                    </div>
                </div>
            </div>
            <img
                className='dash-img'
                src='/external/dash.jpg'
            />
            </div>
        </div>
    )
}

export default Dash;