import { Link, Outlet } from 'react-router';
import logo from '../logo.svg';
import { useAuth } from '../context/auth.context';

export interface AdminLayoutProps {}

const AdminLayout: React.FC<AdminLayoutProps> = (props) => {
  const auth = useAuth();
  const currentUser = auth.user!;
  const currentPath: string = window.location?.pathname || '';
  const getIsActive = (path: string) => (currentPath === path ? 'active' : '');

  return (
    <div className='admin-container'>
      <header className='admin-header shadow-md'>
        <div className='admin-header-logo'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <div className='admin-header-toolbar'>
          <span className='user-name'>{`${currentUser.firstName} ${currentUser.lastName}`}</span>
          <div className='user-avatar'>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
        </div>
      </header>
      <aside className='admin-sidebar'>
        <ul>
          <li>
            <Link to='/admin/dashboard' className={getIsActive('/admin/dashboard')}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to='/admin/products' className={getIsActive('/admin/products')}>
              Products
            </Link>
          </li>
          <li>
            <Link to='/admin/categories' className={getIsActive('/admin/categories')}>
              Categories
            </Link>
          </li>
        </ul>
        <div className='logout-container'>
          <button onClick={() => auth.logout()} type='button'>
            Logout
          </button>
        </div>
      </aside>
      <main className='admin-main-container'>
        <div className='admin-main-content container py-3'>
          <Outlet />
        </div>
        <footer className='admin-footer'>
          <p>Admin Footer</p>
        </footer>
      </main>
    </div>
  );
};

export default AdminLayout;
