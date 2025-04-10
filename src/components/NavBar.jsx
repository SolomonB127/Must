import { BiMenu } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import './styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState('Kor');

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    
    const toggleLangDropdown = () => setIsLangOpen(prev => !prev);
    
    const handleLangSelect = (lang) => {
        setSelectedLang(lang);
        setIsLangOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isLangOpen && !e.target.closest('.lang-dropdown')) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isLangOpen]);

    return (
        <header className="navbar-header">
            <nav aria-label="Main Navigation">
                <div className="navbar-container">
                    {/* Logo */}
                    <a href="/" aria-label="Go to Homepage">
                        <img 
                            src="/logo.png" 
                            alt="App Logo" 
                            width={180} 
                            height={42} 
                            className="navbar-logo"
                        />
                    </a>

                    {/* Mobile Menu Icon */}
                    <button
                        className="navbar-mobile-menu-button"
                        aria-label="Open Mobile Menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        onClick={toggleMenu}
                    >
                        <BiMenu size={35}/>
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="navbar-desktop-nav">
                        <li>
                            <a href="/app" aria-label="Navigate to App">소소담담 APP</a>
                        </li>
                        <li>
                            <a href="/about" aria-label="Navigate to About">소개</a>
                        </li>
                        <li>
                            <a href="/activities" aria-label="Navigate to Activities">활동</a>
                        </li>
                        <li className="lang-dropdown">
                            <button 
                                className="navbar-lang-btn"
                                onClick={toggleLangDropdown}
                                aria-haspopup="true"
                                aria-expanded={isLangOpen}
                            >
                                {selectedLang}
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4 6H11L7.5 10.5L4 6Z" fill="white"/>
                                </svg>
                            </button>
                            {isLangOpen && (
                                <div className="lang-dropdown-menu">
                                    <a
                                        href="/sign-in?lang=ko"
                                        onClick={() => handleLangSelect('Kor')}
                                        className={selectedLang === 'Kor' ? 'active-lang' : ''}
                                    >
                                        한국어
                                    </a>
                                    <a
                                        href="/sign-in?lang=en"
                                        onClick={() => handleLangSelect('Eng')}
                                        className={selectedLang === 'Eng' ? 'active-lang' : ''}
                                    >
                                        English
                                    </a>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`navbar-mobile-menu ${isMenuOpen ? 'navbar-mobile-menu-open' : ''}`}
                    aria-hidden={!isMenuOpen}
                >
                    <nav aria-label="Mobile Navigation" className="navbar-mobile-nav">
                        <button
                            onClick={toggleMenu}
                            className="navbar-close-button"
                            aria-label="Close Mobile Menu"
                        >
                            &times;
                        </button>

                        <ul className="navbar-mobile-nav-list">
                            <li>
                                <a href="/app" onClick={toggleMenu}>소소담담 APP</a>
                            </li>
                            <li>
                                <a href="/about" onClick={toggleMenu}>소개</a>
                            </li>
                            <li>
                                <a href="/activities" onClick={toggleMenu}>활동</a>
                            </li>
                            <li className="mobile-lang-selector">
                                <a href="/sign-in?lang=ko">한국어 로그인</a>
                                <a href="/sign-in?lang=en">English Login</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;