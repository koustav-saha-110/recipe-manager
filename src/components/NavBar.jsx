import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {

    // Links Data
    const navLinks = [
        { label: "Home", to: "/" },
        { label: "Create Recipe", to: "/create-recipe" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
    ];

    return (
        <React.Fragment>
            <nav className='w-full flex items-center justify-center gap-6'>
                {
                    navLinks.map((link, i) => (
                        <NavLink key={i} to={link.to} className={(e) => e.isActive ? "opacity-50" : ""}>{link.label}</NavLink>
                    ))
                }
            </nav>
        </React.Fragment>
    );
}

export default NavBar;
