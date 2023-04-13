import React from 'react'
import { NavLink,Link } from 'react-router-dom'

export const NavBar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'uderline',
        }
    }


    return (<nav>
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/about">About</NavLink>
        {/* <Link to="/">Home</Link>
        <Link  to="/about">About</Link> */}
    </nav>

    )
}

export default NavBar
