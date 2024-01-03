import './Nav.css';

const Nav = () => {
  return (
    <div className='nav-container'>
        <ul className="nav-list">
            <li className="nav-item">
                <span className="nav-item_link">الصادر</span>
            </li>
            <li className="nav-item">
            <span className="nav-item_link">الوارد</span>
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