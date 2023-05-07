import { useEffect, useRef, useState } from 'react';
import { BiSearch, BiHeart, BiCartAlt } from 'react-icons/bi';
import { HiMenu } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const items = [
  {
    page: 'Home',
    path: '/',
  },
  {
    page: 'Services',
    path: '/services',
  },
  {
    page: 'Blog',
    path: '/blog',
  },
  {
    page: 'About us',
    path: '/about-us',
  },
  {
    page: 'Contact',
    path: '/contact',
  },
];

const isMdScreen = window.innerWidth < 768;

const Header = () => {
  const location = useLocation();
  const menuIconRef = useRef(null);
  const [isScroll, setIsScroll] = useState(isMdScreen);
  const [toggleMenu, setToggleMenu] = useState(false);

  const scrollDown = () => {
    if (window.scrollY > 0 || isMdScreen) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  const highlight = (page) => {
    if (isScroll) {
      return `md:navbar-item-udl-collapse ${
        location.pathname === page ? 'text-blue-1' : ''
      }`;
    }
  };

  const clickOutside = (event) => {
    if (isMdScreen && !menuIconRef.current.contains(event.target)) {
      setToggleMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollDown);
    window.addEventListener('click', clickOutside);
    return () => {
      window.removeEventListener('scroll', scrollDown);
      window.removeEventListener('click', clickOutside);
    };
  }, []);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div
      className={`header ${isScroll || isMdScreen ? 'header-collapse' : ''}`}
    >
      <div className='w-full px-[4vw] flex items-center justify-between max-md:bg-white-1'>
        <a
          href='#home'
          className='md:basis-1/5 flex items-center gap-2 tracking-widest relative z-10'
        >
          <img
            src={`images/tb-${isScroll || isMdScreen ? 'blue' : 'white'}.png`}
            alt='error'
            className='2xl:w-[30px] lg:w-[28px] md:w-[26px] w-[30px]'
          />
          <p>thanh binh</p>
        </a>
        <ul
          className={`navbar max-md:top-menu ${
            toggleMenu ? 'max-md:top-menu-collapse' : ''
          }`}
        >
          {items.map((item) => {
            return (
              <li key={item.page} className='navbar-item group'>
                <Link
                  to={item.path}
                  className={`w-full max-md:py-2 md:navbar-item-udl 
                      ${highlight(item.path)}
                  } `}
                >
                  {item.page}
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
        <div
          ref={menuIconRef}
          className='md:hidden h-full flex items-center px-3 relative -right-3'
          onClick={handleToggleMenu}
        >
          <HiMenu size={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
