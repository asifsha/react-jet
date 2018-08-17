import React from 'react';
import { Navbar, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

const Header = () => (


    <Navbar color="light" light expand="md">
        <NavLink tag={Link} href='/' to='/'>Home</NavLink >
        <NavLink tag={Link} href='/about-us' to='/about-us'>About</NavLink >        
    </Navbar>

)
export default Header;
