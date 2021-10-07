import React from 'react';
import updatedProject from "../../assets/project 1/updated project.jpg"
import projectTwo from "../../assets/project 2/2021-09-05.png"
import projectThree from "../../assets/porject 3/2021-10-03.png"
import wonder from "../../assets/Style/2021-10-06 (1).png"
import run from "../../assets/Run/2021-10-06 (6).png"
import original from "../../assets/original/2021-10-06.png"

function Portfolio() {
    return (
        <section id="portfolio" className="my-5">
            <br></br>
            <h2>Portfolio Gallery</h2>
            <br></br>
            <div class="gallery">
                <a href="https://joker282855.github.io/Password/">
                    <img title="Password" alt="Password generator" src={run} sytle={{ width: "5%" }} />
                    <a href="https://github.com/Joker282855/Password">Github Repository</a>
                </a>
                <br></br>
                <a href="https://mikeysoar.github.io/project-1/">
                    <img title="Project-1" alt="Music Website that can search for music" src={updatedProject} style={{ width: "30%" }} />
                    <a href="https://github.com/mikeysoar/project-1">Github Repository</a>
                </a>
                <br></br>
                <a href="https://automatic-potato.herokuapp.com/">
                    <img title="Second Project" alt="Newsblog for Teachers" src={projectTwo} style={{ width: "30%" }} />
                    <a href="https://github.com/JHardisty333/automatic-potato">Github Repository</a>
                </a>
                <br></br>
                <a href="http://evening-citadel-70565.herokuapp.com/">
                    <img title="project 3" alt="Our Final Product" src={projectThree} style={{ width: "30%" }} />
                    <a href="https://github.com/Luke-Munoz/recipeBook">Github Repository</a>
                </a>
                <br></br>
                <a href="https://immense-lake-76806.herokuapp.com/">
                    <img title="Tech Blogger" alt="A Blog to Post New Ideas" src={wonder} style={{ width: "30%" }} />
                    <a href="https://github.com/Joker282855/blogger-tech">Github Repository</a>
                </a>
                <br></br>
                <a href="https://joker282855.github.io/Portfolio/">
                    <img title="Original Portfolio" alt="Portfolio With HTML" src={original} style={{ width: "30%"}} />
                    <a href="https://github.com/Joker282855/Portfolio">Github Repository</a>
                </a>
            </div>
        </section>
    );
}

export default Portfolio;