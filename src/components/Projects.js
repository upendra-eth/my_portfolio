// Import Assets
import Nft from '../assets/musicdapp.png';
import Recipe from '../assets/meal.png';
import Drum from '../assets/drum.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Listen to Earn Dapp</h3>
                    <img src={Nft} alt="Uniswap Swap Page" />
                    <p> You get one M coin per song you play. 
                    </p>

                    <a href="https://musicdapp.netlify.app/" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Site</a>
                    <a href="https://github.com/UV4Crypto/musicDapp" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Code</a></div>

                <div className="projects__card">
                    <h3>Fresh Meal Delivery</h3>
                    <img src={Recipe} alt="Compound Landing Page" />
                    <p>Fresh to home . Meal ordering website
                    </p>

                    <a href="https://bestmeal.netlify.app/" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Site</a>
                    <a href="https://github.com/UV4Crypto/myonlinemeal.github.io" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Code</a>
                </div>

                <div className="projects__card">
                    <h3>Drum Kit</h3>
                    <img src={Drum} alt="Aave Landing Page" />
                    <p>Website to make Some Fun MUSIC
                    </p>

                    <a href="https://gautambnsl.github.io/Drum-kit/" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Site</a>
                    <a href="https://github.com/UV4Crypto" target="_blank" className="button" style={{textDecoration: 'none', color: 'white'}}>Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;