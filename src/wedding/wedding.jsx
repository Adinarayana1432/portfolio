import React from 'react'
import './wedding.css'
import Wedding2 from '../image/kerala3.jpg'
import Wedding3 from '../image/kerala5.jpg';
import { FaWhatsapp } from "react-icons/fa6";




const wedding = () => {
  return (
    <div className='main'>
    


        <div className='bg-image'>
        <h1>our weedings</h1>
        </div>

    {/* The following section displays two images with text below */}

          <div className='section'>
              <div className='section-sub1'>
              <img  className="image1" src={Wedding2} alt='Wedding1' />
              </div>
           

            <div className='section-sub2'>
              <p className='text'>True love stands by each other's side on good days and stands closer on bad days...!</p>
              <img className='image2' src={Wedding3} alt='Wedding2' />
            </div>
          </div>


          {/* The following section displays a text with a button */}
          <div className='bg-image1'>
          </div>
          <div className='section2-div'>

            <div className='section2-sub'>
              <img className='red' src={'../red1.jpg'} alt='' />
              <img  className='red2' src={'../red2.jpg'} alt='' />
              <img className='red' src={'../red3.jpg'} alt='' />
            </div>

            <div className='section2-sub1'>
              <img className='blue' src={'../red4.jpg'} alt='' />
              <img  className='blue' src={'../red5.jpg'} alt='' />
              <img className='blue' src={'../red6.jpg'} alt='' />
            </div>


            <div className='section2-sub2'>
              <img className='green' src={'../red7.jpg'} alt='' />
              <img  className='green' src={'../red8.jpg'} alt='' />
              <img className='green' src={'../red9.jpg'} alt='' />
            </div>


            <div className='section2-sub3'>
              <img className='yellow' src={'../red10.jpg'} alt='' />
              <img  className='yellow' src={'../red11.jpg'} alt='' />
              <img className='yellow' src={'../red12.jpg'} alt='' />
            </div>
          </div>
          {/* The following section displays a footer */}

          <div className='footer-div'>
            <div className='footer-left'>
            <img className='end1' src={'../black.jpg'} alt='' />
      

            </div>
            <div className='footer-right'>
            <img className='end2' src={'../end2.jpg'} alt='' />
            </div>
          </div>
          <a href="https://wa.me/your-number" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp/>
      </a>

   </div>


  )
}

export default wedding
