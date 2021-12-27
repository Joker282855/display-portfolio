import React from 'react';
import updatedProject from '../../assets/project 1/updated project.jpg';
import projectTwo from '../../assets/project 2/2021-09-05.png';
import projectThree from '../../assets/porject 3/2021-10-03.png';
import original from '../../assets/original/2021-10-06.png';
import blog from '../../assets/blog/2021-10-06(1).png';

function Portfolio() {
    return (
        <section id="work" className="work">
            <h2>Portfolio Gallery Of My Work</h2>
            <div className="gallery">
                <a href="https://mikeysoar.github.io/project-1/">
                    <img src={updatedProject} alt="Screenshot of First Project" />
                </a>
                <a href="https://automatic-potato.herokuapp.com/">
                    <img src={projectTwo} alt="Screenshot of Second Project" />
                </a>
                <a href="http://evening-citadel-70565.herokuapp.com/">
                    <img src={projectThree} alt="Screenshot of Third Project" />
                </a>
                <a href="https://joker282855.github.io/Portfolio/">
                    <img src={original} alt="Original Portfolio" />
                </a>
                <a href="https://immense-lake-76806.herokuapp.com/">
                    <img src={blog} alt="Tech Blog" />
                </a>
            </div>
        </section>
    );
}

export default Portfolio;