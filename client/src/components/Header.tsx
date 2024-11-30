import { FC } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBtc, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../hooks/useAuth.ts';
import { removeTokenFromLocalStorage } from '../helpers/localstorage.helper.ts';
import { toast } from 'react-toastify';
import { logout } from '../store/user/userSlice.ts';
import { useAppDispatch } from '../store/hooks.ts';

const Header: FC = () => {
  const isAuth = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    removeTokenFromLocalStorage('token')
    toast.success('You logged out.')
    navigate('/')
    window.location.reload()
  }

  return (
    <header className="flex items-center bg-slate-800 p-4 shadow-sm backdrop-blur-sm">
      <Link className='flex items-center' to="/">
        <FaBtc size={20} />
        <p className="mx-1 uppercase">Fintrack</p>
      </Link>

      {/* Menu */}
      {
        isAuth && (
          <nav className='ml-auto mr-10'>
            <ul className="flex items-center gap-5">
              <li>
                <NavLink
                  to={'/'}
                  className={({ isActive }) => isActive ? 'text-white' : 'text-white/50'}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/transactions'}
                  className={({ isActive }) => isActive ? 'text-white' : 'text-white/50'}
                >
                  Transactions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/categories'}
                  className={({ isActive }) => isActive ? 'text-white' : 'text-white/50'}
                >
                  Categories
                </NavLink>
              </li>
            </ul>
          </nav>
        )
      }

      {/* Actions */}
      {
        isAuth ? (
          <button
            onClick={logoutHandler}
            className='btn btn-red'
          >
            <span>Log Out</span>
            <FaSignOutAlt />
          </button>
        ) : (
          <Link
            to={'auth'}
            className='ml-auto py-2 text-white/50 hover:text-white'
          >
            Log In / Sing In
          </Link>
        )
      }
    </header>
  );
};

export default Header;