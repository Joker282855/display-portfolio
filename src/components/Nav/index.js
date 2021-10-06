import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from '../About-Me';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Nav() {
    return (
    <Router>
        <header>
            <h1>Joshua</h1>
            <nav>
                <ul>
                    <li className="mx-2">
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Switch>
            <Route path='/about'>
                <About></About>
            </Route>

            <Route path='/contact'>
                <Contact></Contact>
            </Route>

            <Route path='/portfolio'>
                <Portfolio></Portfolio>
            </Route>

            <Route path="/resume">
                <Resume></Resume>
            </Route>
        </Switch>
    </Router>
    );
}

export default Nav;