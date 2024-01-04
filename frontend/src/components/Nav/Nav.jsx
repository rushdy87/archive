import {Link} from "react-router-dom"

import './Nav.css';

const Nav = () => {
  return (
    <div className='nav-container'>
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/incoming" className="nav-item_link">الوارد</Link >
            </li>
            <li className="nav-item">
            <Link to="/outcoming" className="nav-item_link">الصادر</Link >
            </li>
        </ul>
        <div className='nav-title'>
            <h2>الاستلام والتجهيز</h2>
            <h3>الصادر والوارد</h3>
        </div>
    </div>
  )
}

export default Nav;