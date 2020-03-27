import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Główna</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/cennik">Cennik</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/nasze-realizacje">Nasze realizacje</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">o Nas</Link></li>
                <li><Link onClick={props.onToggleMenu} to="#contact">Kontakt</Link></li>
                <li><a href="https://www.facebook.com/pg/salonkosmetykisamochodowej/about/" target="blank" rel="noopener noreferrer nofollow">Facebook</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
