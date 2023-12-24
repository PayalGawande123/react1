import React  from 'react'; 
import'./contact.css';
import Walmart from '../../assets/pp.png';
import Adobe from '../../assets/pq.png';
import Microsoft from '../../assets/88.png';
import Facebook from '../../assets/14.png';
import Whatsapp from '../../assets/11.png';
import Instagram from '../../assets/12.png';
import Twitter from '../../assets/13.png';
import FacebookIcon from '../../assets/14.png';





const Contact = () => {

  const socialMediaLinks = {
    facebook: 'https://www.facebook.com/yourusername',
    github: 'https://github.com/payalgawande123',
    youtube: 'https://www.youtube.com/c/yourchannel',
    instagram: 'https://www.instagram.com/payal_gawande13',
    linkedin: 'https://www.linkedin.com/in/https://www.linkedin.com/in/payal-gawande-94b571243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  };
 
  
  return (
    <section className="contactPage">
         <div id="clients">
              <h1 className="contactPageTitle">My Dream Company</h1>
              <p className="clientDesc">
                   I am very passionate about my work .I have dream to work with this companies.
               </p>
               <div className="clientImgs">
                    <img src={Walmart} alt="Client"className="clientImg"/>
                    <img src={Adobe} alt="Client"className="clientImg"/>
                    <img src={Microsoft} alt="Client"className="clientImg"/>
                    <img src={Facebook} alt="Client"className="clientImg"/>
                </div>
         </div>
         <div id="contact">
             <h1 className="contactPagetitle">Contact Me</h1>
             <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
             <form className='contactForm'  >
                <input type="text" className="name" placeholder='Your Name' name='your name'/>
                <input type="email" className="email" placeholder='Your Email' name='your email'/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type ='submit'value='Send' className="submitBtn">Submit</button>
                
                <div className="links">
                  <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="link">
                     <img src={Whatsapp} alt="Github" width="50px" hight="50px" />
                  </a>
                  <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" className="link">
                     <img src={Instagram} alt="Instagram" width="50px" hight="50px" />
                   </a>
                   <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="link">
                      <img src={Twitter} alt="Linkedin" width="50px" hight="50px" />
                    </a>
                  <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer" className="link">
                         <img src={FacebookIcon} alt="Facebook" width="50px" hight="50px" />
                  </a>
                </div>
             </form>
         </div>
        
    </section>
  )
}

export default Contact;
