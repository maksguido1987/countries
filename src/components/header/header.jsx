import React, { useState, useEffect } from 'react';
import {
  Layout,
  StyledHeader,
  HeaderWrapper,
  HeaderModeSwitcher,
  HeaderTitle,
} from '../index';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

export const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <StyledHeader>
      <Layout>
        <HeaderWrapper>
          <HeaderTitle>Where is the world?</HeaderTitle>
          <HeaderModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size='14px' />
            ) : (
              <IoMoon size='14px' />
            )}
            <span style={{ marginLeft: '0.75rem' }}>{theme} theme</span>
          </HeaderModeSwitcher>
        </HeaderWrapper>
      </Layout>
    </StyledHeader>
  );
};
