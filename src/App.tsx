import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle<{ isDark: boolean }>`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${({ isDark }) => (isDark ? '#121212' : '#f5f5f5')};
  }

  * {
    box-sizing: border-box;
    transition: background-color 0.3s, color 0.3s;
  }
`;

const MainContent = styled.div<{ isDark: boolean; isCollapsed: boolean }>`
  flex: 1;
  padding: 30px;
  background-color: ${({ isDark }) => (isDark ? '#121212' : '#f5f5f5')};
  min-height: 100vh;
  margin-left: ${({ isCollapsed }) => (isCollapsed ? '80px' : '280px')};
  transition: margin-left 0.3s ease-in-out;
`;

const Layout = styled.div`
  display: flex;
`;

function AppContent() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <ThemeProvider theme={{ isDark }}>
      <GlobalStyle isDark={isDark} />
      <Layout>
        <Sidebar
          isDark={isDark}
          toggleTheme={toggleTheme}
          activePath={location.pathname}
          isCollapsed={isCollapsed}
          toggleCollapse={toggleCollapse}
        />
        <MainContent isDark={isDark} isCollapsed={isCollapsed}>
          <Routes>
            <Route path="/" element={<Dashboard isDark={isDark} />} />
            <Route path="/dashboard" element={<Dashboard isDark={isDark} />} />
            <Route path="/profile" element={<Profile isDark={isDark} />} />
            {/* Add more routes as needed */}
          </Routes>
        </MainContent>
      </Layout>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
