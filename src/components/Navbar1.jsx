import { useState } from 'react';
import { FaHome, FaBookOpen, FaInfoCircle, FaEnvelope, FaImages } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Navbar1 = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const navItems = [
    { id: 1, icon: <FaHome />, label: 'Home', target: 'hero' },
    { id: 2, icon: <FaInfoCircle />, label: 'About', target: 'about' },
    { id: 3, icon: <FaBookOpen />, label: 'Past Editions', target: 'past' },
    { id: 4, icon: <FaEnvelope />, label: 'Contact Us', target: 'contact' },
    { id: 5, icon: <FaImages />, label: 'Gallery', target: '/gallery' },
  ];

  const handleNavigation = (item) => {
    if (item.target === '/gallery') {
      navigate(item.target);
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center justify-between gap-8 p-4 bg-gray-900 shadow-[0_0_25px_#3393C7FF] rounded-3xl w-[90%] max-w-3xl z-50" style={{ minHeight: '12vh' }}>
      {navItems.map((item) => (
        <div
          key={item.id}
          onClick={() => handleNavigation(item)}
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
          className="relative flex flex-col items-center justify-center cursor-pointer transition-transform duration-300"
        >
          <span
            className={`text-3xl ${
              hovered === item.id ? 'text-green-400 translate-y-[-8px] scale-75' : 'text-gray-300 scale-100'
            }`}
          >
            {item.icon}
          </span>
          {hovered === item.id && (
            <span className="absolute bottom-[-1rem] text-sm text-green-400 px-1 truncate max-w-[90px] text-center">
              {item.label}
            </span>
          )}
        </div>
      ))}

<a href="https://unstop.com/o/JyBkoDH?lb=bSLJ0FFA&utm_medium=Share&utm_source=WhatsApp">
  <button
    className="ml-auto hidden lg:block px-5 py-2 text-white bg-gradient-to-r from-blue-500 to-green-400 rounded-xl hover:from-green-400 hover:to-blue-500 transition-transform"
  >
    Register
  </button>
</a>

    </nav>
  );
};

export default Navbar1;
