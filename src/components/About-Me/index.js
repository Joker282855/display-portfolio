import React from 'react';
import selfPortrait from "../../assets/me/self-portrait2.jpg"

function About() {
    return (
        <section id="about-me" className="me">
            <img src={selfPortrait} alt="Myself in a blue suit" />
            <div className="info">
               <h2>About Me</h2>
               <p>
                   I was born and raised in Provo, Utah. I have four older brothers and one older sister.
                   All of my siblings are married and live in different states. I have twenty four niecies 
                   and nepehws in total.
               </p>
               <br></br>
               <p>
                   I am a Full Stack Developer who emphasizes in Back End Development. I am certified through
                   the University of Utah after completing a six month coding bootcamp. Skilled in using
                   Sequelize, Node.js, Express.js, Mongoose, and CRUD operations to create databases for
                   different types of applications. My passion to use my skills to create user responsive
                   and intuitive designs makes me a valuable addition to any company.
               </p>
            </div>
        </section>
    );
}

export default About;