import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    },
    {
        name: 'Products',
        to: '/products',
        exact: false
    },
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active abc' : ''
            return (
                <li className={active}>
                    <Link to={to} className="nav-link">{label}</Link>
                </li>
            )
        }} />
    )
}

class Menu extends Component {

    showMenus = (menus) => {
        var result = null
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                )
            })
        }



        return result
    }


    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <ul className="navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }
}

export default Menu;