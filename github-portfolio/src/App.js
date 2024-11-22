import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

const Home = () => {
    return (
        <div className="app">
            <header className='header'>
                <h1>Rohan's GitHub Portfolio</h1>
            </header>
            <main className='main'>
                <section className='hero'>
                    <div className='hero-text'>
                        <h2>Welcome</h2>
                        <p>
                            I am a high school student interested in programming for the VEX and FIRST Robotics Competition, graphics, embedded systems, web development, low-level programming, game development, and more.
                        </p>
                        <div className='cta-buttons'>
                            <Link to='/projects' className='button'>View Projects</Link>
                            <Link to='/contact' className='button'>Contact Me</Link>
                        </div>
                    </div>
                    <div className='hero-img'>
                        <img
                            src='https://via.placeholder.com/300'
                            alt='Coding'
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}

const ProjectCard = ({ title, description, language, stars, forks, url }) => {
    const languageBadge = (language) => {
        const languageColors = {
            JavaScript: '#f1e05a',
            Python:     '#306998',
            C:          '#555555',
            Cpp:        '#f34b7d',
            Java:       '#b07219',
            HTML:       '#e34c26',
            CSS:        '#563d7c',
            Assembly:   '#6E4C13',
            Lua:        '#000080',
            Ruby:       '#701516',
            Go:         '#00ADD8',
            TypeScript: '#2b7489',
            Rust:       '#000000',
            Swift:      '#ffac45',
            PHP:        '#4F5D95',
            Kotlin:     '#F18E33',
            Dart:       '#00B4AB',
        };

        return language ? (
            <span style={{ backgroundColor: languageColors[language] || '#6a737d', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '3px', marginLeft: '0.5rem' }}>
                {language}
            </span>
        ) : null;
    }

    return (
        <a href={url} target='_blank' rel='noopener noreferrer'>
            <div className='project-card'>
                <h3>
                    {title}
                </h3>
                <p>{description}</p>
                <div className='project-stats'>
                    {languageBadge(language)}
                    <span>{stars} ⭐</span>
                    <span>{forks} 🍴</span>
                </div>
            </div>
        </a>
    );
}

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const navigate                = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            const response    = await fetch('https://api.github.com/users/Rohan-Bharatia/repos');
            const data        = await response.json();
            setProjects(data);
        };
        fetchProjects();
    }, []);

    return (
        <div className="projects-container">
            <header className='header'>
            </header>
            <h2>My Projects</h2>
            <button className='back-button' onClick={() => navigate('/')}>
                <b>{"<"}</b> Back to Home
            </button>
            <div className='projects-list'>
                {projects.length === 0 ? (
                    <p>Loading projects...</p>
                ) : (
                    projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.name}
                            description={project.description || 'No description available'}
                            language={project.language === 'Cpp' ? 'C++' : project.language}
                            stars={project.stargazers_count}
                            forks={project.forks_count}
                            url={project.html_url}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
  
const Contact = () => {
    const navigate = useNavigate();

    return (
        <div className="page">
            <header className='header'>
            </header>
            <h2>Contact Me</h2>
            <p>Coming soon...</p>
            <button className="back-button" onClick={() => navigate("/")}>
                Back to Home
            </button>
        </div>
    );
}

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;