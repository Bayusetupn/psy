import './podcast.css'

const Podcast = () =>{
    return(
        <div className='podcastt'>
            <div className='title'>
                <p>The Flowers</p>
            </div>
            <div className='image'>
                <img src='/external/pics.jpg'/>
            </div>
            <div className='title2'>
                <h3>Red Rose</h3>
                <p>Park Chanyeol</p>
            </div>
            <div className='line'>
            </div>
            <div className='controller'>
                <div className='buttons'>
                    <img
                        id='skip'
                        src='/external/skip.svg'
                        loading='lazy'
                    />
                    <img
                        id='play'
                        src='/external/play.svg'
                        loading='lazy'
                    />
                    <img
                        id='skip2'
                        src='/external/skip.svg'
                        loading='lazy'
                    />
                </div>
            </div>
        </div>
    )
}

export default Podcast;