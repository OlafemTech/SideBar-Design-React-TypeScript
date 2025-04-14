import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SidebarContainer = styled(motion.div)<{ isDark: boolean }>`
  width: 280px;
  height: 100vh;
  background-color: ${({ isDark }) => (isDark ? '#1a1a1a' : '#ffffff')};
  padding: 20px;
  transition: all 0.3s ease;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

export const CollapseButton = styled(motion.button)<{ isDark: boolean }>`
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ isDark }) => (isDark ? '#2d2d2d' : '#ffffff')};
  border: 1px solid ${({ isDark }) => (isDark ? '#333333' : '#e0e0e0')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isDark }) => (isDark ? '#ffffff' : '#333333')};
  z-index: 10;
  
  &:hover {
    background: #7c4dff;
    color: white;
    border-color: #7c4dff;
  }
`;

export const Logo = styled(motion.div)`
  font-size: 24px;
  font-weight: bold;
  color: #7c4dff;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
`;

export const ProfileSection = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => (theme.isDark ? '#2d2d2d' : '#f0f0f0')};
  white-space: nowrap;
`;

export const ProfileImage = styled(motion.img)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInfo = styled(motion.div)<{ isDark: boolean }>`
  h3 {
    margin: 0;
    color: ${({ isDark }) => (isDark ? '#ffffff' : '#333333')};
    font-size: 16px;
  }
  p {
    margin: 5px 0 0;
    color: ${({ isDark }) => (isDark ? '#b3b3b3' : '#666666')};
    font-size: 14px;
  }
`;

export const MenuList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled(motion.li)<{ isDark: boolean; active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 15px;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 8px;
  color: ${({ isDark, active }) =>
    active ? '#7c4dff' : isDark ? '#ffffff' : '#333333'};
  background-color: ${({ active, isDark }) =>
    active ? (isDark ? 'rgba(124, 77, 255, 0.1)' : 'rgba(124, 77, 255, 0.1)') : 'transparent'};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${({ isDark }) =>
      isDark ? 'rgba(124, 77, 255, 0.1)' : 'rgba(124, 77, 255, 0.1)'};
  }

  svg {
    font-size: 20px;
    min-width: 20px;
  }
`;

export const ThemeToggle = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#333333')};
  white-space: nowrap;
`;
