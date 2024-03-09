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
    headingColor: isThemeOn ? '#fecdd3' : 'purple.100',
    focusTextColor: isThemeOn ? '#166534' : 'purple.600',
    buttonColor: isThemeOn ? 'green' : 'purple',

    sidelineColor: isThemeOn ? '#166534' : '#44337A',
    sidebarColor: isThemeOn ? '#f87171' : 'rgba( 107, 70, 193, 0.1 )',
    frameColor: isThemeOn ? '#fecdd3' : 'purple.900',
    iconColor: isThemeOn ? '#166534' : 'purple.100',
    
    navbarColor: isThemeOn ? '#fecaca' : 'purple.200',
    navbarUnderlineColor: isThemeOn ? '#f87171' : 'purple.500',
    phoneMenuButtonColor: isThemeOn ? '#f87171' : 'purple.500',
    phoneMenuDividerColor: isThemeOn ? '#fecaca' : 'purple.400',
    
    formInputColor: isThemeOn ? '#fef2f2' : 'gold.50',
    formInputBorder: isThemeOn ? '#fca5a5' : 'gold.200',
    formInputHoverBorder: isThemeOn ? '#f87171' : 'gold.200',
    formInputFocusBorder: isThemeOn ? '#ef4444' : 'gold.200',

    footerBgImage: isThemeOn ? 'https://github.com/then00bprogrammer/MyPortfolio/assets/96624909/3d345c7d-1019-4fcf-a97f-1b34f4e32bd6' : 'https://img.freepik.com/free-vector/contact-us-icons-sketch_98292-4689.jpg',
    techLottie: isThemeOn ? 'technology-christmas' : 'technology-dark',
    homeLottie: isThemeOn ? 'coder-christmas' : 'coder',
    
    scrollbarTrackColor: isThemeOn ? '#bbf7d0' : 'black',
    scrollbarThumbColor: isThemeOn ? '#166534' : 'purple.200',
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
