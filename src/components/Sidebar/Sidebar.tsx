import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dashboard,
  ShoppingBag,
  Category,
  ShoppingCart,
  People,
  LocalOffer,
  Business,
  LocationOn,
  Settings,
  Logout,
  DarkMode,
  LightMode,
  Person,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import {
  SidebarContainer,
  Logo,
  ProfileSection,
  ProfileImage,
  ProfileInfo,
  MenuList,
  MenuItem,
  ThemeToggle,
  CollapseButton,
} from './styles';
import { SidebarProps, SidebarItem } from '../../types/types';
import { AnimatePresence, motion } from 'framer-motion';
import { PROFILE_IMAGE, USER_INFO } from '../../config/constants';

const sidebarItems: SidebarItem[] = [
  { title: 'Dashboard', path: '/dashboard', icon: <Dashboard /> },
  { title: 'Profile', path: '/profile', icon: <Person /> },
  { title: 'Products', path: '/products', icon: <ShoppingBag /> },
  { title: 'Categories', path: '/categories', icon: <Category /> },
  { title: 'Orders', path: '/orders', icon: <ShoppingCart /> },
  { title: 'Customers', path: '/customers', icon: <People /> },
  { title: 'Sales Offers', path: '/sales-offers', icon: <LocalOffer /> },
  { title: 'Dealership', path: '/dealership', icon: <Business /> },
  { title: 'Locations', path: '/locations', icon: <LocationOn /> },
  { title: 'Settings', path: '/settings', icon: <Settings /> },
];

const Sidebar: React.FC<SidebarProps> = ({
  isDark,
  toggleTheme,
  activePath = '/dashboard',
  isCollapsed,
  toggleCollapse,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const sidebarVariants = {
    expanded: { width: 280 },
    collapsed: { width: 80 },
  };

  const textVariants = {
    expanded: { opacity: 1, display: 'block' },
    collapsed: { opacity: 0, display: 'none', transition: { duration: 0.2 } },
  };

  return (
    <SidebarContainer
      isDark={isDark}
      initial="expanded"
      animate={isCollapsed ? 'collapsed' : 'expanded'}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <CollapseButton isDark={isDark} onClick={toggleCollapse}>
        {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
      </CollapseButton>

      <Logo>
        <ShoppingBag />
        <motion.span variants={textVariants}>SHOPPING</motion.span>
      </Logo>

      <ProfileSection onClick={() => handleNavigate('/profile')} style={{ cursor: 'pointer' }}>
        <ProfileImage 
          src={PROFILE_IMAGE} 
          alt={USER_INFO.name}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        <ProfileInfo isDark={isDark} variants={textVariants}>
          <h3>{USER_INFO.name}</h3>
          <p>{USER_INFO.role}</p>
        </ProfileInfo>
      </ProfileSection>

      <MenuList>
        <AnimatePresence>
          {sidebarItems.map((item) => (
            <MenuItem
              key={item.path}
              isDark={isDark}
              active={activePath === item.path}
              onClick={() => handleNavigate(item.path)}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {item.icon}
              <motion.span variants={textVariants}>{item.title}</motion.span>
            </MenuItem>
          ))}
        </AnimatePresence>
      </MenuList>

      <MenuItem isDark={isDark} style={{ marginTop: '20px' }}>
        <Logout />
        <motion.span variants={textVariants}>Logout</motion.span>
      </MenuItem>

      <ThemeToggle onClick={toggleTheme}>
        {isDark ? <LightMode /> : <DarkMode />}
        <motion.span variants={textVariants}>
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </motion.span>
      </ThemeToggle>
    </SidebarContainer>
  );
};

export default Sidebar;
