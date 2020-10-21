import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Główna</Link></li>
                <li><Link onClick={props.onToggleMenu} to="https://shop.strefadetailingu.com/">Sklep</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/cennik">Cennik</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/nasze-realizacje">Nasze realizacje</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/o-nas">o Nas</Link></li>
                <li><Link onClick={props.onToggleMenu} to="#contact">Kontakt</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
