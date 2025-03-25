import { Outlet } from 'react-router';

export interface AdminLayoutProps {}

const AdminLayout: React.FC<AdminLayoutProps> = (props) => {
  return (
    <div className='admin-container'>
      <header className='admin-header'>
        <nav>
          <h1>Admin Header</h1>
        </nav>
      </header>
      <aside className='admin-sidebar'>
        <ul>
          <li>
            <a href='/dashboard'>Dashboard</a>
          </li>
          <li>
            <a href='/dashboard/products'>Products</a>
          </li>
        </ul>
      </aside>
      <main className='admin-main-container'>
        <div className='admin-main-content container py-3'><Outlet /></div>
        <footer className='admin-footer'>
        <p>Admin Footer</p>
      </footer>
      </main>
    </div>
  );
};

export default AdminLayout;
