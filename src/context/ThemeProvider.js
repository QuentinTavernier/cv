import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext({
    darkMode: false,
    toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : true;
};

export const ThemeProvider = (props) => {
    const { children } = props;

    const [darkMode, setDarkMode] = useState(getInitialTheme);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const value = {
        darkMode,
        toggleDarkMode,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
