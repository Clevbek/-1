import './banner.css'
import mainBanner from '../../img/banner.png'
import social from '../../img/social.png'

const Banner = () => {
    return (
        <section className='banner-container'>
            <div className='main-banner'>
            <img src={mainBanner} alt="" />
            </div>
            <div className='social'>
                <h1>
                    Take your podcast to the next <span>level</span>
                </h1>

                <div className='listen'>
                <p>Listen on</p>
                <img src={social} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Banner;
