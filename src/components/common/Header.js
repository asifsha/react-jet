import React from 'react';
import { Navbar,Nav,NavItem,NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
//import { Link } from 'react-router';

const Header = () => (   


    <Navbar color="light" light expand="md">
            <NavLink  tag={Link} href='/' to='/'>Home</NavLink >
            <NavLink  tag={Link} href='/about-us' to='/about-us'>About</NavLink >
            <NavLink  tag={Link} href='/items' to='/items'>Items</NavLink >            
        </Navbar>
   
)
export default Header;
