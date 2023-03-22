import React from "react";

export const Navbar: React.FC = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
            <div className='container-fluid'>
                <span className='navbar-brand'>React LIBRARY</span>
                <button type='button'
                    className='navbar-toggler'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarDropdown'
                    aria-controls='navbarDropdown'
                    aria-expanded='false'
                    aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Search Books</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <a type='button' className='btn btn-outline-light' href='#'>Sign in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}