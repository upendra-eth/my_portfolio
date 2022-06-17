// Import Assets
import profile from '../assets/p0.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Upendra Singh</h1>
                <p>Blockchain Developer</p>
                {/* <button className='button'>Get In Touch */}
                <a href="https://www.linkedin.com/in/upendra-singh-494284176/" className='button' style={{textDecoration: 'none', color: 'white'}} target="_blank">Get In Touch</a>
                {/* </button> */}
            </div>
        </section>
    );
}

export default Header;