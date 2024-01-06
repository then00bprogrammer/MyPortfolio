// ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isThemeOn, setIsThemeOn] = useState(false);

  useEffect(() => {
    const colorMode = localStorage.getItem('chakra-ui-color-mode');
    const isChristmas = localStorage.getItem('isChristmas');

    if (colorMode === 'dark' && isChristmas === 'true') {
      setIsThemeOn(true);
    } else {
      setIsThemeOn(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsThemeOn((prevState) => {
      localStorage.setItem('isChristmas', !prevState ? 'true' : 'false');
      return !prevState; 
    });
  };

  const theme = {
    isThemeOn,
    toggleTheme,
    headingColor: isThemeOn ? '#fecdd3' : 'gold.100',
    focusTextColor: isThemeOn ? '#166534' : 'gold.600',
    buttonColor: isThemeOn ? 'green' : 'gold',

    sidelineColor: isThemeOn ? '#166534' : 'gold.600',
    sidebarColor: isThemeOn ? '#f87171' : 'gold.500',
    frameColor: isThemeOn ? '#fecdd3' : 'gold.600',
    iconColor: isThemeOn ? '#166534' : 'gold.600',
    
    navbarColor: isThemeOn ? '#fecaca' : 'gold.500',
    navbarUnderlineColor: isThemeOn ? '#f87171' : 'gold.500',
    phoneMenuButtonColor: isThemeOn ? '#f87171' : 'gold.500',
    phoneMenuDividerColor: isThemeOn ? '#fecaca' : 'gold.400',
    
    formInputColor: isThemeOn ? '#fef2f2' : 'gold.50',
    formInputBorder: isThemeOn ? '#fca5a5' : 'gold.200',
    formInputHoverBorder: isThemeOn ? '#f87171' : 'gold.200',
    formInputFocusBorder: isThemeOn ? '#ef4444' : 'gold.200',

    footerBgImage: isThemeOn ? 'https://github.com/then00bprogrammer/MyPortfolio/assets/96624909/3d345c7d-1019-4fcf-a97f-1b34f4e32bd6' : 'https://img.freepik.com/free-vector/contact-us-icons-sketch_98292-4689.jpg',
    techLottie: isThemeOn ? 'technology-christmas' : 'technology-dark',
    homeLottie: isThemeOn ? 'coder-christmas' : 'coder',
    
    scrollbarTrackColor: isThemeOn ? '#bbf7d0' : 'gold.200',
    scrollbarThumbColor: isThemeOn ? '#166534' : 'gold.600',
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
