import React from 'react';
import'./intro.css';
/*import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';*/


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span  className="introName">Payal Gawande</span><br />Computer Engineer Student</span>
             <p className="introPara">I am skilled web designer with experiance in creating visually appeling and<br/> user freiendly websites.</p>
             <a href=" https://drive.google.com/file/d/1_APzYCIUxraXRoJS5FZx7gsHvAu_XC_u/view?usp=sharing" target="_blank" rel="noopener  noreferrer">
                <button className="btn"><img src="./assets/hireme.jpg" alt="Hire" className="btnImg"  />Resume</button>
              </a>
        </div>
        <img src="./assets/18.jpeg" alt="Profile" className="bg" />
             
            
    </section>
  )
}

export default Intro;
