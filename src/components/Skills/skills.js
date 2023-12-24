import React from 'react';
import'./skills.css';
/*import CPPDesign from '../..assets/cpp.png';
import PythonDesign from '../..assets/python.jpeg';
import SQLDesign from  '../..assets/Sql.png';*/



const Skills = () => {
  return (
    <section id ='skills'>
        <span className="skillTitle">Introduction</span>
        <span className="skillDesc"> My Name is Payal Sanjay Gawande .I'm from Pune,Currently I am pursuing a 3rd year Engineering from Bhrati Vidyapeeth College of Engineering for Women,Pune . My Technical skills are  C,C++,HTML,CSS,SQL and Basic of React JS . My strenghts are self -motivation and hard work . I have built a website on Tourism.</span>
        <div className="skillBars">
             <div className="skillBar">
                <img src="./assets/cpp.png" alt="CPPDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>CPP Language</h2>
                    <p>This is a Demo text</p>
                </div>
             </div>

             <div className="skillBar">
                <img src="./assets/python.jpeg" alt="PythonDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Python Language</h2>
                    <p>This is demo text</p>
                </div>
             </div>

             <div className="skillBar">
                <img src="./assets/Sql.png" alt="SQLDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>SQL </h2>
                    <p>this is a demo text</p>
                </div>
             </div>

             <div className="skillBar">
                <img src="./assets/aws.png" alt="Aws" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Aws Certificate </h2>
                    <p>this is demo text</p>
                </div>
             </div>
        </div>
    </section>
  );
}

export default Skills;
