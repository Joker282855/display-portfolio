import React from 'react';

function Resume() {
    return (
        <section className="resume">
            <div>
                <h2>Reusme Link</h2>
                <a href="https://docs.google.com/document/d/1FDlKcgLR8NDt8x01yYhj_GmXnxWnFj9QAAbUD9ybGwo/edit">Link To Resume</a>
            </div>
            <div>
                <h2>Proficency List:</h2>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <li>
                        MSQL
                    </li>
                    <li>
                        Mongoose
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Sequelize
                    </li>
                    <li>
                        Javascript
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;