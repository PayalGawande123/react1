import React from 'react';
import'./works.css';
import Portfolio1 from'../../assets/21.png';

import Portfolio3 from'../../assets/23.png';



const Works = () => {
  return (
   <section id='works'>
       <h2 className="worksTitle">My Projects</h2>
       <span className="worksDesc">I take pride in paying attention to the sallest datails and making sure that my work is pixel perfect .I am excited to bring my skills and experience to help buisnesses achieve their goals and create a strong online presence</span>
       <div className="worksImgs">
        <img src={Portfolio1} alt="" className="worksImg" /> 
                <div className="content">
                  
                  <p>This is my first year project in which I had developed Tours and Travels website  which is based on Html,Css.In that website,we provide the information about pune city</p>
                  

                </div>
        
             <img src={Portfolio3} alt="" className="worksImg" /> 
               
             
        </div>
    
    
    </section>
  );
}

export default Works
