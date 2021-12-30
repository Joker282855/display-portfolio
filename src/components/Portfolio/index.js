import React from 'react';
import updatedProject from '../../assets/project 1/updated project.jpg';
import projectTwo from '../../assets/project 2/2021-09-05.png';
import projectThree from '../../assets/porject 3/2021-10-03.png';
import original from '../../assets/original/2021-10-06.png';
import blog from '../../assets/blog/2021-10-06 (1).png';

function Portfolio() {
    return (
        <section id="work" className="work">
            <h2>Portfolio Gallery Of My Work</h2>
            <div className="gallery">
                <a href="https://mikeysoar.github.io/project-1/">
                    <img title="Project 1" src={updatedProject} alt="Screenshot of First Project" className="modified" />
                </a>
                <a href="https://automatic-potato.herokuapp.com/">
                    <img title="Project 2" src={projectTwo} alt="Screenshot of Second Project" className="picture" />
                </a>
                <a href="http://evening-citadel-70565.herokuapp.com/">
                    <img title="Project 3" src={projectThree} alt="Screenshot of Third Project" className="picture" />
                </a>
                <a href="https://joker282855.github.io/Portfolio/">
                    <img title="Original Portfolio" src={original} alt="Original Portfolio" className="picture" />
                </a>
                <a href="https://immense-lake-76806.herokuapp.com/">
                    <img title="Developer Blog" src={blog} alt="Tech Blog" className="picture" />
                </a>
            </div>
            <div className="links">
                <h2>Github Repository Links</h2>
                <li>
                    <a href="https://github.com/mikeysoar/project-1">Project 1 Repository</a>
                </li>
                <br></br>
                <li>
                    <a href="https://github.com/JHardisty333/automatic-potato">Project 2 Repository</a>
                </li>
                <br></br>
                <li>
                    <a href="https://github.com/Luke-Munoz/recipeBook">Project 3 Repostiory</a>
                </li>
                <br></br>
                <li>
                    <a href="https://github.com/Joker282855/Portfolio">Original Portfolio Repository</a>
                </li>
                <br></br>
                <li>
                    <a href="https://github.com/Joker282855/blogger-tech">Tech Blog Repository</a>
                </li>
            </div>
        </section>
    );
}

export default Portfolio;