import Nft from '../assets/v1.jpg';
import Recipe from '../assets/v2.jpg';
import Drum from '../assets/v3.jpg';

const Youtube = () => {
    return (
        <section className="projects">
            <h2>YouTube Videos</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3></h3>
                    <img src={Nft} alt="Uniswap Swap Page" />
                    <p> 
                    </p>

                    <a href="https://youtu.be/P93t9V9Poec" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Watch Video</a>
                    <a href="https://github.com/UV4Crypto/musicDapp" target="_blank"  style={{textDecoration: 'none', color: 'white'}}></a></div>

                <div className="projects__card">
                    <h3></h3>
                    <img src={Recipe} alt="Compound Landing Page" />
                    <p>
                    </p>

                    <a href="https://www.youtube.com/watch?v=kpVJadenv8g" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Watch Video</a>
                    <a href="https://github.com/UV4Crypto/myonlinemeal.github.io" target="_blank"  style={{textDecoration: 'none', color: 'white'}}></a>
                </div>

                <div className="projects__card">
                    <h3></h3>
                    <img src={Drum} alt="Aave Landing Page" />
                    <p>
                    </p>

                    <a href="https://www.youtube.com/watch?v=LkL-TMVmF3Y" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Watch VIdeo</a>
                    <a href="https://github.com/UV4Crypto" target="_blank"  style={{textDecoration: 'none', color: 'white'}}></a>
                </div>
            </div>
        </section>
    );
}

export default Youtube;