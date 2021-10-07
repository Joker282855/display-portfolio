import React from 'react';
import selfPortrait from "../../assets/me/self-portrait2.jpg"

function About() {
    return (
        <section id="about-me" className="my-5">
            <br></br>
            <img src={selfPortrait} className="my-2" style={{ width: "20%" }} alt="Myself in a blue suit" />
            <br></br>
            <h1 id="about">About Me</h1>
            <p>I was born and raised in Provo, Utah. I have four older brothers and one older sister
                which makes me the youngest member in my family. All of my siblings are married and 
                live in different states. I have twenty three nieceis and newphes in total with one 
                more on the way. 
            </p>
            <br></br>
            <p> Hobbies include coding, reading books, snow skiing, and spending time with my family. I have six months of coding experience
                and have been on a transformative journey in leanring how to code. I have been on the deans list every single semester at 
                Utah Valley University and have earned an associates in the science of Mathematics. Currently I am about to begin the process
                of getting a job as a developer once this week is over. I want to give a special thanks to all of the teachers at U of U who 
                have supported me on this journey.
            </p>
        </section>
    );
}

export default About;