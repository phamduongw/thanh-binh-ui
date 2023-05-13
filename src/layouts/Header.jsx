import { useEffect, useRef, useState, useContext } from 'react';
import { BiSearch, BiHeart, BiCartAlt } from 'react-icons/bi';
import { HiMenu } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const pages = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Articles',
    path: '/articles',
  },
  {
    name: 'About us',
    path: '/about-us',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  const { screenSize } = useContext(AppContext);
  const location = useLocation();
  const menuIconRef = useRef(null);
  const [isCollapse, setIsCollapse] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const updateIsScroll = () => {
    if (window.scrollY > 0) {
      setIsCollapse(true);
    } else {
      setIsCollapse(false);
    }
  };

  useEffect(() => {
    if (screenSize === 2) {
      setIsCollapse(true);
    } else {
      if (window.scrollY == 0) {
        setIsCollapse(false);
      }
      setToggleMenu(false);
      window.addEventListener('scroll', updateIsScroll);
      return () => {
        window.removeEventListener('scroll', updateIsScroll);
      };
    }
  }, [screenSize]);

  const handleToggleMenu = () => {
    if (screenSize === 2) {
      setToggleMenu(!toggleMenu);
    }
  };

  const highlightEffect = (path) => {
    if (isCollapse) {
      return `${
        location.pathname === path ? 'text-blue-1' : ''
      } md:navbar-item-udl-collapse`;
    }
  };

  return (
    <div className={`header ${isCollapse ? 'header-collapse' : ''}`}>
      <div className='w-full px-[4vw] flex items-center justify-between max-md:bg-white-1'>
        <div
          ref={menuIconRef}
          className='md:hidden h-full flex items-center px-2 relative'
          onClick={handleToggleMenu}
        >
          <HiMenu size={25} />
        </div>
        <a
          href='#home'
          className='md:basis-1/5 flex items-center gap-2 tracking-widest relative z-10'
        >
          <img
            src={`images/tb-${isCollapse ? 'blue' : 'white'}.png`}
            alt='error'
            className='2xl:w-[30px] lg:w-[28px] md:w-[26px] w-[25px]'
          />
          <p className='max-md:hidden'>thanh binh</p>
        </a>
        <ul
          className={`navbar max-md:top-menu ${
            toggleMenu ? 'max-md:top-menu-collapse' : ''
          }`}
          onClick={handleToggleMenu}
        >
          {pages.map((page) => {
            return (
              <li key={page.name} className='navbar-item group'>
                <Link
                  to={page.path}
                  className={`w-full max-md:py-2 md:navbar-item-udl  
                      ${highlightEffect(page.path)}`}
                >
                  {page.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className='md:basis-1/5 hidden md:flex justify-end gap-6 md:text-base lg:text-lg 2xl:text-xl'>
          <BiSearch />
          <BiHeart />
          <BiCartAlt />
        </div>
        <div className='md:hidden h-full flex items-center px-2 relative'>
          <BiSearch size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
