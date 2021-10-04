import React from 'react';
import updatedProject from "../../assets/project 1/updated project.jpg"
import projectTwo from "../../assets/project 2/2021-09-05.png"
import projectThree from "../../assets/porject 3/2021-10-03.png"
import wonder from "../../assets/Style/CSS wonder.jpg"
import run from "../../assets/Run/Run Buddy.jpg"

function Portfolio() {
    return (
        <section id="portfolio" className="my-5">
            <h2>Portfolio Gallery</h2>
            <div class="gallery">
                <a href="https://joker282855.github.io/Module-1-Challenge/Challenge/index.html">
                    <img title="Project-1" alt="Music Website that can search for music" src={updatedProject} style={{ width: "30%" }} />
                </a>
                <a href="https://localhost:3001">
                    <img title="Second Project" alt="Newsblog for Teachers" src={projectTwo} style={{ width: "30%" }} />
                </a>
                <a href="http://localhost:3000/#login">
                    <img title="project 3" alt="Our Final Product" src={projectThree} style={{ width: "30%" }} />
                 </a>
                <a href="file:///C:/Users/jtjac/OneDrive/Documents/Html%20Coding%20Assignments/css%20practice/index.html">
                    <img title="CSS Styles" alt="Application of CSS" src={wonder} style={{ width: "30%" }} />
                </a>
                <a href="file:///C:/Users/jtjac/OneDrive/Documents/projects/run-buddy/index.html">
                    <img title="Run Buddy" alt="Web Application Built for Run Buddy" src={run} sytle={{ width: "30%" }} />
                </a>
            </div>
        </section>
    )
}

export default Portfolio;