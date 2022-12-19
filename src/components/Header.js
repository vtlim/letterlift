import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>LetterLift</h1>
        <p>Professional Editing Services</p>
    </header>
)

export default Header
