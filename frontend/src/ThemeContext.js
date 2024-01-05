// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isThemeOn, setIsThemeOn] = useState(true);

  const toggleTheme = () => {
    setIsThemeOn(prevState => !prevState);
  };

  const theme = {
    isThemeOn,
    toggleTheme,
    buttonColor: isThemeOn ? 'green' : 'gold',
    headingColor: isThemeOn ? '#fecdd3' : 'gold.100',
    focusTextColor: isThemeOn ? '#166534' : 'gold.600',
    sidelineColor: isThemeOn ? '#166534' : 'gold.600',
    frameColor: isThemeOn ? '#fecdd3' : 'gold.600',
    sidebarColor: isThemeOn ? '#f87171' : 'gold.500',
    iconColor: isThemeOn ? '#166534' : 'gold.600',
    footerBgImage: isThemeOn ? 'https://github.com/then00bprogrammer/MyPortfolio/assets/96624909/3d345c7d-1019-4fcf-a97f-1b34f4e32bd6' : 'https://img.freepik.com/free-vector/contact-us-icons-sketch_98292-4689.jpg',
    formInputBorder: isThemeOn ? '#fca5a5' : 'gold.200',
    formInputHoverBorder: isThemeOn ? '#f87171' : 'gold.200',
    formInputFocusBorder: isThemeOn ? '#ef4444' : 'gold.200',
    formInputColor: isThemeOn ? '#fef2f2' : 'gold.50',
    navbarColor: isThemeOn ? '#fecaca' : 'gold.500',
    phoneMenuButtonColor: isThemeOn ? '#f87171' : 'gold.500',
    phoneMenuDividerColor: isThemeOn ? '#fecaca' : 'gold.400',
    navbarUnderlineColor: isThemeOn ? '#f87171' : 'gold.500',
    scrollbarTrackColor: isThemeOn ? '#bbf7d0' : 'gold.200',
    scrollbarThumbColor: isThemeOn ? '#166534' : 'gold.600',
    techLottie: isThemeOn ? 'technology-c' : 'technology-dark',
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
