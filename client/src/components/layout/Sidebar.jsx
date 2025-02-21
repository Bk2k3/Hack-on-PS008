// src/components/layout/Sidebar.jsx
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/challenges', label: 'Challenges' },
    { to: '/courses', label: 'Courses' },
  ];

  return (
    <aside className="w-64 bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-r-lg border-r border-gray-500 h-[calc(100vh-4rem)] p-4">
      <nav className="mt-5 flex flex-col space-y-3">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-lg font-medium transition-all ${
                isActive
                  ? 'bg-yellow-500 text-gray-900 font-bold shadow-lg'
                  : 'text-white hover:bg-yellow-400 hover:text-gray-900'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;