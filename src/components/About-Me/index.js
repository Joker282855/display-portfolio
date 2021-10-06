import React from 'react';
import selfPortrait from "../../assets/me/self-portrait2.jpg"

function About() {
    return (
        <section id="about-me" className="my-5">
            <img src={selfPortrait} className="my-2" style={{ width: "20%" }} alt="Myself in a blue suit" />
            <h1 id="about">About Me</h1>
            <p>I was born and raised in Provo, Utah. I have four older brothers and one older sister
                which makes me the youngest member in my family. All of my siblings are married and 
                live in different states. I have twenty three nieceis and newphes in total with one 
                more on the way. 
            </p>
            <br></br>
            <p> Hobbies include coding, reading books, snow skiing, and spending time with my family. I will have six months of coding experience
                by September. I have been on the deans list every single semester at Utah Valley University
                and will be graduating in Spring 2022 with a Bacherlors in Mathematics.
            </p>
        </section>
    );
}

export default About;