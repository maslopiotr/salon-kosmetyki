import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Logo from '../assets/images/logo.png'
const Header = (props) => (
    <header id="header" className="alt">
        
            <a class="phoneTel" href="tel:+48883268952"><i class="icon fa-mobile-phone"></i><p className="phone">&nbsp;+48 883 268 952</p></a>
        
            <Link to="/" className="logo"><img className="logo" src={Logo} alt="logo Salon Kosmetyki Samochodowej" style={{maxWidth:`120px`}}></img></Link>

        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;" style={{position:`fixed`}}><p className="phone">Menu</p></a>
        </nav>

    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
