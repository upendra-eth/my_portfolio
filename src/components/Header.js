// Import Assets
import { Document, Page } from 'react-pdf';
// import { Document } from 'react-pdf/dist/entry.webpack';
// import { Page } from 'react-pdf'
import profile from '../assets/p0.png';
import Resume from "../assets/Resume.pdf"


const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Upendra Singh</h1>
                <p>Blockchain Developer</p>
                {/* <button className='button'>Get In Touch */}
               <div className='resume'> 
               <a href="https://www.linkedin.com/in/upendra04/" className='button' style={{textDecoration: 'none', color: 'white'}} target="_blank">Get In Touch</a>
               <a href="https://drive.google.com/file/d/1QgP8IC6uCRCHGkCTtvRcyOWjas-46_Fh/view?usp=sharing" className='button' style={{textDecoration: 'none', color: 'white'}} target="_blank">Resume</a>
               {/* <Document file={Resume}>
              <Page pageNumber={1} />
            </Document> */}
                                               
               </div>
                {/* </button> */}
            </div>
        </section>
    );
}

export default Header;