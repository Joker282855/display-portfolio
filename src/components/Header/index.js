import React from 'react';

function Header() {
    return (
        <header className="my-5">
            <h1>Joshua</h1>
            <nav>
                <ul>
                    <li className="mx-5">
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact-information">Contact</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header 