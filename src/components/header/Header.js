import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => (
    <header className='h-wrap'>
        <div className='h-content'>
            <h2 className='h-title'>Employee Management portal</h2>
            <div>
                <Link to='/'>Register</Link>
                <Link to='/dashboard'>All Employee</Link>
            </div>
        </div>
    </header>
)   

export default Header;