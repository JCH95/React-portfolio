import React from 'react';
// import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div>
            <h1>PRojects Go Here!</h1>
            <div>
                <h2>Scholarship App Site</h2>
                <nav>
                    <a href="https://jch95.github.io/Scholarship-App/" target="_blank" rel="noreferrer">
                        <img src="assets/images/scholarship.png" alt="Scholarship App website" class="img"></img>
                    </a>
                </nav>
            </div>

            <div>
                <h2>King Chess Ranking</h2>
                <nav>
                    <a href="https://github.com/JCH95/Chess-App-Project-2" target="_blank" rel="noreferrer">
                        <img src="assets/images/chess-app.png" alt="Chess Club App" class="img-2"></img>
                    </a>
                </nav>
            </div>

            <div>
                <h2>Life Sherpa</h2>
                <nav>
                    <a href="https://github.com/crocket77/JASEalive" target="_blank" rel="noreferrer">
                        <img src="assets/images/life-sherpa.png" alt="Life Sherpa App" class="img-2"></img>
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Projects;