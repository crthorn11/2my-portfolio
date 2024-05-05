import React from 'react';

function NavbarReact() {
    return (
        <nav className="nav">
            <a href="/" className="site-banner">
                Cody Thorntons Portfolio
            </a>
            <ul>
                <li className="active">
                    <a href="/Portfolio">About me</a>
                </li>
                <li>
                    <a href="/about">Portfolio</a>
                </li>
                <li>
                    <a href="/about">Contact</a>
                </li>
                <li>
                    <a href="/about">Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavbarReact;