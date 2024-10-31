import React, {useState} from 'react';
import PropTypes from "prop-types";

import {useTranslation} from "react-i18next";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

import {Logo} from "./Logo";
import {LanguageSwitch} from "./LanguageSwitch";
import {ThemeSwitch} from "./ThemeSwitch";

import {useTheme} from "../context/ThemeProvider";

export const Menu = (props) => {
    const {value, handleChange} = props;
    const {darkMode} = useTheme();

    const {t} = useTranslation();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const styles = {
        tabs: {
            "& .MuiTab-root": {
                color: darkMode ? "white" : "var(--color-blue)",
                fontFamily: "'MontSerrat', sans-serif",
                fontSize: '16px',
                textTransform: 'none',
                '&.Mui-selected': {
                    color: "var(--color-purple)",
                },
            },
            "& .MuiTabs-indicator": {
                backgroundColor: "var(--color-purple)",
            },
        },
        drawerPaper: {
            '& .MuiDrawer-paper': {
                backgroundColor: 'black',
                color: 'white',
                width: '250px',
            }
        },
        menuButton: {
            padding: 0,
            color: "var(--color-purple) !important",
        },
        closeButton: {
            padding: 0,
            color: darkMode ? "white" : "var(--color-blue)",
        },
        drawerBox: {
            width: '100%',
            pt: 1,
            px: 4,
            height: "100%",
            bgcolor: darkMode ? "black" : "var(--color-beige)",
        },
        drawerHeader: {
            padding: '10px 0',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        listItemButton: {
            padding: 0,
        }
    };

    const menuItems = [
        {label: t('home'), value: 0},
        {label: t('achievements'), value: 1},
        {label: t('work_experience'), value: 2},
        {label: t('educations'), value: 3},
    ];

    const handleMenuItemClick = (newValue) => {
        handleChange(null, newValue);
        setIsDrawerOpen(false);
    };

    return (
        <Box
            className="fixed flex justify-center top-0 left-0 w-full z-50 bg-white dark:bg-black"
            sx={styles.drawerPaper}
        >
            {/* Desktop Menu */}
            <Box className="container hidden md:flex w-full between-center py-2">
                <Logo/>
                <div className="flex end-center grow gap-4">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="navigation tabs"
                        sx={styles.tabs}
                    >
                        {menuItems.map((item) => (
                            <Tab key={item.value} label={item.label}/>
                        ))}
                    </Tabs>
                    <LanguageSwitch/>
                    <ThemeSwitch/>
                </div>
            </Box>

            {/* Mobile Menu */}
            <Box className="md:hidden w-full flex between-center px-4 py-3">
                <Logo/>
                <div className="d-flex-row center-center gap-4">
                    <LanguageSwitch/>
                    <ThemeSwitch/>
                    <IconButton
                        onClick={() => setIsDrawerOpen(true)}
                        sx={styles.menuButton}
                        aria-label="open menu"
                    >
                        <MenuIcon/>
                    </IconButton>
                </div>
            </Box>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <Box sx={styles.drawerBox}>
                    <Box sx={styles.drawerHeader}>
                        <IconButton
                            onClick={() => setIsDrawerOpen(false)}
                            sx={styles.closeButton}
                        >
                            <CloseIcon/>
                        </IconButton>
                    </Box>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem key={item.value} disablePadding>
                                <ListItemButton
                                    onClick={() => handleMenuItemClick(item.value)}
                                    sx={styles.listItemButton}
                                >
                                    <p className={`p-text hover:opacity-80 font-montserrat py-2 ${item.value === value ? "!text-purple" : "dark:text-white text-blue"}`}>
                                        {item.label}
                                    </p>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

Menu.propTypes = {
    value: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired
}
