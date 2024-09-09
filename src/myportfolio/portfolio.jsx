import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../pages/button.css';
import IMG from '../image/sathesh.jpg';
import IMG1 from '../image/sathish1.jpg';
import IMG4 from '../image/sathish4.jpg';
import IMG5 from '../image/sathish5.jpg';
import IMG6 from '../image/kerala3.jpg';
import IMG7 from '../image/kerala4.jpg';
import IMG8 from '../image/kerala5.jpg';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import '../myportfolio/portfolio.css';

function Home() {
  const [isOpen, setIsOpen] = useState(false); // Default value should be a boolean

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) element.scrollIntoView({ behavior: 'smooth' });
//   };

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('');

  // Create refs for each section
  const homeRef = useRef('');
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const handleReadMoreClick = () => {
    navigate('/about');
  };

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
    switch(page) {
      case 'home':
        window.scrollTo({
          top: homeRef.current.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 'about':
        window.scrollTo({
          top: aboutRef.current.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 'services':
        window.scrollTo({
          top: servicesRef.current.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 'contact':
        window.scrollTo({
          top: contactRef.current.offsetTop,
          behavior: 'smooth',
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className='bg'>
      <div className='navbar'>
        <div className='logo'>Logo</div>
        <div className='hamburger' onClick={handleToggle}>
          &#9776; {/* Hamburger icon */}
        </div>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className='close' onClick={handleToggle}>
            &times; {/* Close icon */}
          </div>
          <ul>
          <li >Home</li>
          <li onClick={() => handleNavigationClick('about')}>About</li>
          <li onClick={() => handleNavigationClick('services')}>Services</li>
          <li onClick={() => handleNavigationClick('contact')}>Contact</li>
          </ul>
        </div>
        <ul className='desktop-nav'>
        <li >Home</li>
          <li onClick={() => handleNavigationClick('about')}>About</li>
          <li onClick={() => handleNavigationClick('services')}>Services</li>
          <li onClick={() => handleNavigationClick('contact')}>Contact</li>
        </ul>
      </div>
        
      <div className="container">
        <div className='cloud'>
          <div className='success'>
            <p className='success-p-tag'>
              AMBITION IS THE FIRST STEP TOWARDS
            </p>
            <h1 className='loader'>SUCCESS</h1>
          
            <p className='success-p1-tag'>Now Available for Online Coaching</p>
            <button className='button'>Book Now</button>
          </div>
        </div>
      </div>
      <div className='footer-container'>
        <div className="footer-left">
          <h3>ABOUT ME</h3>
          <p className='foot-left-p1'>
            I’m a professional photographer specializing in capturing the perfect moments. From stunning landscapes to intimate portraits, I bring a creative eye and technical expertise to every shoot.
          </p>
          <button className='button2' onClick={handleReadMoreClick}>Read More</button>
        </div>
        <div className="gfooter-image">
          <img className="image1" src={IMG} alt='Photographer'/>
        </div>
      </div>
      <div className='welcome-container' ref={homeRef}>
        <div className='marquee-container'>
          <div className='marquee-content'>
            <img className="image-s" src={IMG1} alt='Photography'/>
            <img className="image-s" src={IMG4} alt='Photography'/>
            <img className="image-s" src={IMG5} alt='Photography'/>
            <img className="image-s1" src={IMG6} alt='Photography'/>
            <img className="image-s1" src={IMG7} alt='Photography'/>
            <img className="image-s1" src={IMG8} alt='Photography'/>

          </div>
        </div>
      </div>

     
      <div className='about-content' ref={aboutRef}>
        {currentPage === 'about' && (
          <div className='about-me'>
            <h2>About Me</h2>
            
            <img className="image-me" src={'./about.jpg'} alt='Photographer'/>

            <div className='about-me-heading'>
            <div className='about-text1'>
            <h1 className='about-me-heading1'>Passion of Moment</h1>
            <p>
            Hi, I'm Adinarayana, a passionate photographer with a deep love for capturing the beauty and intricacies of life through my lens. Whether it's the candid expressions of a street scene, the serene landscapes of nature, or the intricate details of a macro shot, I find joy in bringing out the unique stories and emotions within every frame.
            </p>
            </div>

            <div className='about-text2'>
              <h1 className='about-me-heading2'>My Journey</h1>
              <p>My journey into photography began [X years ago/at a young age] when I first picked up a camera and saw the world through a new perspective. What started as a hobby quickly evolved into a full-fledged career. Over the years, I’ve honed my skills through [formal education/mentorship/self-study], and my work has been featured in [publications/galleries/online platforms].</p>
            </div>
            </div>
           
           


          </div>
        )}
      </div>
      {/*--------------services section starts here------------*/}

      <div className='services-content' ref={servicesRef}>
        {currentPage === 'services' && (
          <div className='services-content'>
            <h2>Photography Services</h2>

            <div className='services-matter'>

              <div className='matter-div1'>
                <img className='s-images1' src={'./anupuma.jpg'} alt='Anupuma' />
                <h3>Portrait Photography:</h3>
                <p>Professional and personalized portrait sessions for individuals, families, and groups.
                </p>
              </div>

              <div className='matter-div2'>
                <img  className='s-images2'  src={'./landscape.jpg'} alt=''/>
                <h3>Landscape Photography:</h3>
                <p>: Capturing the beauty of nature and cityscapes with high-quality images.</p>
              </div>

              <div className='matter-div3'>
                <img className='s-images3'  src={'./black.jpg'}  alt=''/>
                <h3>Event Photography:</h3>
                <p>Documenting special events, including weddings, parties, and corporate functions.</p>
              </div>

              <div className='matter-div4'>
                <img className='s-images4'  src={'./cemara.jpg'}  alt=''/>
                <h1 className='about-me-heading1'>Commercial Photography:</h1>
                <p> Creating visual content for businesses and brands to enhance their marketing and advertising efforts</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='contact-content' ref={contactRef}>
        {currentPage === 'contact' && (
          <div className='contact-div'>
            <h2>Contact Me</h2>
            <div>
            <p className='cont'> Contact Me</p>
                <p className='cont'>Tel: 123-456-7890</p>
                <p className='cont'>Email: info@mysite.com</p>
              
              
                <p className='cont'>Studio</p>
                <p className='cont'>500 Terry Francine St.</p>
                <p className='cont'>San Francisco, CA 94158</p>
            </div>
          
          </div>
        )}
      </div>
      <div className='footer'>
        <div>
          <button className='notify-btn'>Notify Me!</button>
        </div>
        <div className='icons'>
          <FaFacebook className='icon-style'/>
          <a href="https://wa.me/+918247720676?text=Hello">
            <FaSquareWhatsapp className='icon-style'/>
          </a>
          <a href="https://www.instagram.com/adhithyasunnam?igsh=cGwwNnMzMW52YTFu">
            <FaInstagramSquare className='icon-style'/>
          </a>
          <FaLinkedin className='icon-style'/>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
