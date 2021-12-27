import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import About from '../About-Me';
import ContactForm from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Header() {
    return (
    <Router>
        <header>
            <h1>Joshua Jackson</h1>
            <nav>
                <ul>
                    <li className="mx-2">
                        <NavLink to='/display-portfolio' className="style-nav" activeClassName="style-nav-active">
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className="con-nav" activeClassName="con-nave-active">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/portfolio' className="port-nav" activeClassName="port-nav-active">
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/resume' className="res-nav" activeClassName="res-nav-active">
                            Resume
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <Switch>
            <Route path='/display-portfolio'>
                <About></About>
            </Route>

            <Route path='/contact'>
                <ContactForm></ContactForm>
            </Route>

            <Route path='/portfolio'>
                <Portfolio></Portfolio>
            </Route>

            <Route path='/resume'>
                <Resume></Resume>
            </Route>
        </Switch>
    </Router>
    );
}

export default Header;