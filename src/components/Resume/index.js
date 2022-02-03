import React from 'react';

function Resume() {
    return (
        <section className="resume">
            <div>
                <h2>Reusme Link</h2>
                <br></br>
                <a href="https://docs.google.com/document/d/1FDlKcgLR8NDt8x01yYhj_GmXnxWnFj9QAAbUD9ybGwo/edit">Link To Resume</a>
            </div>
            <div className="hire">
                <h2>Proficency List:</h2>
                <br></br>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <br></br>
                    <li>
                        MySQL
                    </li>
                    <br></br>
                    <li>
                        CSS
                    </li>
                    <br></br>
                    <li>
                        Sequelize
                    </li>
                    <br></br>
                    <li>
                        Javascript
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;