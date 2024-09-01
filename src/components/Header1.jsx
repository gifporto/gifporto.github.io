import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    useEffect(() => {
        // Navbar fixed
        const handleScroll = () => {
            const header = document.querySelector('header');
            const fixedNav = header.offsetTop;
            
            if (window.pageYOffset > fixedNav) {
                header.classList.add('navbar-fixed');
            } else {
                header.classList.remove('navbar-fixed');
            }

            // Scroll to top
            const toTop = document.querySelector('#to-top');
            if (window.pageYOffset > fixedNav) {
                toTop.classList.remove('hidden');
                toTop.classList.add('flex');
            } else {
                toTop.classList.remove('flex');
                toTop.classList.add('hidden');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Hamburger menu
    const [isHamburgerActive, setHamburgerActive] = useState(false);
    const hamburgerRef = useRef(null);
    const navMenuRef = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            if (hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
                // Toggle hamburger and navMenu visibility
                setHamburgerActive(!isHamburgerActive);
            } else if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
                // Close navMenu when clicking outside
                setHamburgerActive(false);
            }
        };

        const handleNavMenuClick = (event) => {
            // Prevent closing when clicking inside navMenu
            event.stopPropagation();
        };

        document.addEventListener('click', handleClick);
        const navMenuCurrent = navMenuRef.current;
        navMenuCurrent.addEventListener('click', handleNavMenuClick);

        return () => {
            document.removeEventListener('click', handleClick);
            navMenuCurrent.removeEventListener('click', handleNavMenuClick);
        };
    }, [isHamburgerActive]);

    // Dark mode
    const storedTheme = localStorage.getItem('theme');
    const [isDarkMode, setIsDarkMode] = useState(storedTheme || 'light');

    useEffect(() => {
        if (isDarkMode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem('theme', isDarkMode);
    }, [isDarkMode]);

    const handleDarkToggle = () => {
        setIsDarkMode(isDarkMode === "dark" ? "light" : "dark");
    };

    return (
        <header className="bg-transparent top-0 left-0 w-full flex items-center z-50 fixed">
            <div className="container">
                <div className="flex relative justify-normal lg:justify-between">
                    <div className="flex px-4 items-center">
                        <input type="checkbox" className="hidden" id="dark-toggle" onClick={handleDarkToggle}/>
                        <label htmlFor="dark-toggle">
                            <div className="flex h-10 w-[52px] cursor-pointer items-center rounded-full bg-slate-500 p-1">
                                <div className="toggle-circle h-8 w-8 rounded-full bg-white dark:bg-dark transition duration-300 ease-in-out">
                                    <div className="flex w-5 h-full items-center mx-auto fill-primary dark:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="sun">
                                            <circle cx="16" cy="16" r="9"></circle>
                                            <path d="M17.5 4.139V2a1.5 1.5 0 0 0-3 0v2.139a1.5 1.5 0 0 0 3 0zM8.674 8.673a1.5 1.5 0 0 0 0-2.121L7.16 5.04A1.5 1.5 0 1 0 5.04 7.161l1.512 1.512a1.498 1.498 0 0 0 2.122 0zM2 17.5h2.138a1.5 1.5 0 0 0 0-3H2a1.5 1.5 0 0 0 0 3zm3.04 9.46a1.496 1.496 0 0 0 2.121 0l1.512-1.512a1.5 1.5 0 1 0-2.12-2.12l-1.513 1.51a1.5 1.5 0 0 0 0 2.122zm9.46.901V30a1.5 1.5 0 0 0 3 0v-2.139a1.5 1.5 0 0 0-3 0zm10.339-.901a1.496 1.496 0 0 0 2.121 0 1.5 1.5 0 0 0 0-2.121l-1.512-1.512a1.5 1.5 0 1 0-2.12 2.121l1.51 1.512zM30 14.5h-2.139a1.5 1.5 0 0 0 0 3H30a1.5 1.5 0 0 0 0-3zm-3.04-9.46a1.5 1.5 0 0 0-2.121 0l-1.512 1.512a1.5 1.5 0 1 0 2.121 2.12l1.512-1.51a1.5 1.5 0 0 0 0-2.122z"></path>
                                        </svg>
                                    </div> 
                                    <div className="w-5 h-full items-center mx-auto hidden dark:flex dark:fill-primary2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="moon">
                                            <path d="M14.02002,1.15997c-0.36005-0.51996-0.98999-0.76996-1.60004-0.62C5.40002,2.26996,0.5,8.53998,0.5,15.78998C0.5,24.45001,7.54999,31.5,16.21002,31.5c7.25,0,13.51996-4.90002,15.25-11.92004c0.14996-0.60999-0.10004-1.23999-0.62-1.59998C30.33002,17.63,29.64001,17.64001,29.13,18c-1.84998,1.31-4.02002,2.01001-6.28003,2.01001c-5.98999,0-10.85999-4.87-10.85999-10.86005C11.98999,6.89001,12.69,4.71997,14,2.87C14.35999,2.35999,14.37,1.66998,14.02002,1.15997z"></path>
                                        </svg>
                                    </div> 
                                </div>
                            </div>
                        </label>
                        <div className="mx-4">
                            <a href="/" className="font-bold text-lg text-primary dark:text-primary2 block py-6 mx-0">GIFOUR</a>
                        </div>
                    </div>
                    
                    <div className="flex items-center px-4">
                        <button id="hamburger" ref={hamburgerRef} name="hamburger" type="button" className={`hamburger ${isHamburgerActive ? 'hamburger-active' : ''} block absolute right-4 lg:hidden`}>
                            <span className="hamburger-line origin-top-left"></span>
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line origin-bottom-left"></span>
                        </button>

                        <nav id="nav-menu" ref={navMenuRef} className={`menu ${isHamburgerActive ? '' : 'hidden'} absolute py-5 bg-white shadow-lg rounded-lg max-w-[180px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-primary2/50 lg:dark:bg-transparent`}>
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" className="navmenu">Profile</a>
                                </li>
                                <li className="group">
                                    <a href="#about" className="navmenu">Tentang Saya</a>
                                </li>
                                <li className="group">
                                    <a href="#portofolio" className="navmenu">Portofolio</a>
                                </li>
                                <li className="group">
                                    <a href="#client" className="navmenu">Clients</a>
                                </li>
                                <li className="group">
                                    <a href="#sertif" className="navmenu">Sertifikat</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
