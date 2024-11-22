import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`app ${darkMode ? 'dark' : 'light'}`}>
            <header className='header'>
                <h1>Rohan's GitHub Portfolio</h1>
                <button className='mode-toggle' onClick={toggleDarkMode}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </header>
            <main className='main'>
                <section className='hero'>
                    <div className='hero-text'>
                        <h2>Welcome</h2>
                        <p>
                            I am a high school student interested in programming for the VEX and FIRST Robotics Competition, graphics, embedded systems, web development, low-level programming, game development, and more.
                        </p>
                        <div className='cta-buttons'>
                            <a href='#projects' className='button'>View Projects</a>
                            <a href='#contact' className='button'>Contact Me</a>
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

export default App;