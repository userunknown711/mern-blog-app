import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className='sticky top-0 z-40 border-b border-slate-200/60 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-slate-900/50 shadow-soft py-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-base sm:text-2xl font-extrabold tracking-tight dark:text-white hover:opacity-90 transition-opacity'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 rounded-lg text-white shadow ring-1 ring-white/10 mr-1'>
          Alam's
        </span>
        <span className='text-slate-800 dark:text-slate-100'>Blog</span>
      </Link>
      <form onSubmit={handleSubmit} className='hidden lg:block flex-1 max-w-xl mx-auto'>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='w-full focus:ring-2 focus:ring-brand-500/50 rounded-lg shadow-sm'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className='w-10 h-10 lg:hidden shadow-sm' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2 items-center'>
        <Button
          className='w-10 h-10 hidden sm:inline shadow-sm'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline className='shadow-sm hover:shadow-md transition-shadow rounded-lg'>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'} className='px-3 py-2 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-600'>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'} className='px-3 py-2 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-600'>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'} className='px-3 py-2 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-600'>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
