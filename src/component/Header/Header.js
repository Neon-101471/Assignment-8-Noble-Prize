import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            {/* nav bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand text-light" href="#Home">Writers Club</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#allClub">All Club</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#TopWriters">Top Writers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#TobNoble">Top Noble</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#About">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* header banner text */}
            <div className='container header'>
                <h1 align='center'>Make own Club with top noble writers</h1>
                <h4>To make most iconic club with most energetic writer with your budget</h4>
                <h2>Budget: 100Milion</h2>
            </div>
        </header>
    );
};

export default Header;