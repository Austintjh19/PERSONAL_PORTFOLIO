import React, { useState } from "react";
import '../css/Navbar.css';
import '../css/MediaQueries.css';



export const Navbar = () => {

    // Show Navbar Background 
    const [showDesktop_Navbar_bg, setDesktop_Navbar_bg] = useState(false);

    const changeDesktop_Navbar_bg = () => {
        if (window.scrollY >= 90) {
            setDesktop_Navbar_bg(true);
        } else {
            setDesktop_Navbar_bg(false);
        }
    };

    window.addEventListener('scroll', changeDesktop_Navbar_bg);

    // Exiting Phone Menu. 
    const navLinks = document.querySelectorAll('#phone_main_navigation .phone_menu_link');

    navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('phone_navigation_toggle').checked = false;
    });
    });

    
    return ( 
        <section>

            {/* Phone Navbar- Hamburger phone_menu
            ======================================================================================================================== */}

            <div id="phone_nav">

                <input type="checkbox" id="phone_navigation_toggle" class="btn btn_close" />
                <label for="phone_navigation_toggle">
                    <span></span>
                </label>

                <nav id="phone_main_navigation" class="phone_nav_main">
                    <ul class="phone_menu">
                        <li class="phone_menu_item">
                            <a class="phone_menu_link" href="/">Home</a>
                        </li>
                        <li class="phone_menu_item">
                            <a class="phone_menu_link" href="#About">About</a>
                        </li>
                        <li class="phone_menu_item">
                            <a class="phone_menu_link" href="#Education">Education</a>
                        </li>
                        <li class="phone_menu_item">
                            <a class="phone_menu_link" href="#Experience">Experiences</a>
                        </li>
                        <li class="phone_menu_item">
                            <a class="phone_menu_link" href="#Projects">Projects</a>
                        </li>
                        <li class="phone_menu_item">
                            <a class="phone_menu_link" href="#Contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            
            {/* Desktop Navbar- Hamburger Mene
            ======================================================================================================================== */}

            <nav id="desktop_nav" className={showDesktop_Navbar_bg ? 'desktop_nav_bg' : 'desktop_nav_bg_transparent'}>
                <div>
                
                    
                    <ul className="nav_links">
                        <li>
                            {/* <div className={`${isCurrentPage('') ? 'current-page nav_link' : 'nav_link'}`}> */}
                            <div className='nav_link'>
                                <a href="/">Home</a>
                            </div>
                        </li>
                        <li>
                            {/* <div className={`${isCurrentPage('About') ? 'current-page nav_link' : 'nav_link'}`}> */}
                            <div className='nav_link'>
                                <a href="#About">About</a>
                            </div>
                        </li>
                        <li>
                            {/* <div className={`${isCurrentPage('Education') ? 'current-page nav_link' : 'nav_link'}`}> */}
                            <div className='nav_link'>
                                <a href="#Education">Education</a>
                            </div>
                        </li>
                        <li>
                            {/* <div className={`${isCurrentPage('Experience') ? 'current-page nav_link' : 'nav_link'}`}> */}
                            <div className='nav_link'>
                                <a href="#Experience">Experiences</a>
                            </div>
                        </li>
                        <li>
                            {/* <div className={`${isCurrentPage('Projects') ? 'current-page nav_link' : 'nav_link'}`}> */}
                            <div className='nav_link'>
                                <a href="#Projects">Projects</a>
                            </div>
                        </li>
                        <li>
                            {/* <div className={`${isCurrentPage('Contact') ? 'current-page nav_link' : 'nav_link'}`}> */}
                            <div className='nav_link'>
                                <a href="#Contact">Contact</a>
                            </div>
                        </li>
                    </ul>
                </div>
        </nav>
    </section>
    )
}