import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationLinksProps {
  className?: string;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({
  className,
  isMobile = false,
  onLinkClick = () => {},
}) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = () => {
    onLinkClick();
  };

  const renderMobileLinks = () => (
    <>
      {links.map((link) => (
        <React.Fragment key={link.name}>
          <NavLink
            to={link.path}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `p-1 pl-0 font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-800 hover:text-primary'}`
            }
          >
            {link.name}
          </NavLink>
        </React.Fragment>
      ))}
    </>
  );

  const renderDesktopLinks = () => (
    <>
      {links.map((link) => (
        <React.Fragment key={link.name}>
          <NavLink
            to={link.path}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-800 hover:text-primary'}`
            }
          >
            {link.name}
          </NavLink>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <nav className={className}>
      {isMobile ? renderMobileLinks() : renderDesktopLinks()}
    </nav>
  );
};

export default NavigationLinks;
