import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({ width: undefined, height: undefined });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => setMenuOpen((prev) => !prev);

  return (
    <div className='navbar-container'>
      <div className='navbar-content'>
        <Link to='/' className='logo'>
          الاستلام والتجهيز
        </Link>
        <nav className={`navbar ${menuOpen ? 'isMenu' : ''}`}>
          <ul>
            <li>
              <Link to='/'>الصادر</Link>
            </li>
            <li>
              <Link to='/'>الوارد</Link>
            </li>
            <li>
              <Link to='/'>بحث</Link>
            </li>
            <li>
              <Link to='/'>اضافة</Link>
            </li>
          </ul>
        </nav>
        <div className='content-toggle'>
          {menuOpen ? (
            <BiMenuAltLeft onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
