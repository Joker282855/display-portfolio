import React from 'react';
import selfPortrait from "../../assets/me/self-portrait2.jpg"

function About() {
    return (
        <section id="about-me" className="me">
            <img src={selfPortrait} alt="Myself in a blue suit" />
            <div className="info">
               <h2>About Me</h2>
               <p>
                   I earned my Assocaites degree in Mathematics from Utah Valler Universiy while I was 
                   student teaching in 2021. Student teaching did not work out which made me switch 
                   career paths towards the coding filed. I attended a Full Stack Web Development 
                   Bootcamp at Utah University where I earned my professional certificate in Full Stack 
                   Web Development. After graduating the Bootcamp I went back to Utah Valley University
                   and earned my Bachelors Degree in University studies.

               </p>
               <br></br>
               <p>
                   My career goal is to get hired as a junior Back End Web Developer. 
                   To accomplish this I am currently working at Amazon with the aim to
                   enroll in there Career Choice program which allows its employees to 
                   continue their education. I will utilize that to continue my education
                   in coding and seek out a coding job with Amazon.
               </p>
            </div>
        </section>
    );
}

export default About;