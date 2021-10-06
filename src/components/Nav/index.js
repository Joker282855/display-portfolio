import React from "react";

function Nav() {
    return (
        <header>
            <h1>Joshua</h1>
            <nav>
                <ul>
                    <li className="mx-2">
                        <a href="#about-me">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;