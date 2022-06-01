import React from 'react';
import Navbar from '../Navbar';

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <h1>Joshua's Professional Portfolio</h1>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}

export default Header;