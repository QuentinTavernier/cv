import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';

import {IconComponent} from "./IconComponent";

import {useTheme} from "../context/ThemeProvider";

export const LanguageSwitch = () => {
    const {i18n} = useTranslation();
    const {darkMode} = useTheme()

    const currentLanguage = i18n.language;
    const [language, setLanguage] = useState(currentLanguage);

    const changeLanguage = () => {
        const newLanguage = language === "fr" ? "en" : "fr"
        setLanguage(newLanguage);
        void i18n.changeLanguage(newLanguage);
        localStorage.setItem('lng', newLanguage);
    };

    return (
        <div className="switch-container">
            <div className="flex center-center pl-2 pr-1">
                <IconComponent
                    icon="translate"
                    size="small"
                    color={darkMode ? "grey" : "beige"}
                />
            </div>
            <div
                className="switch"
                onClick={changeLanguage}
            >
                <div
                    className="handle"
                    style={{
                        transform: language === "fr" ? "translateX(17px)" : "translateX(0)"
                    }}
                >
                    <p className="p-text text-xs !text-purple">
                        {language.toUpperCase()}
                    </p>
                </div>
            </div>
        </div>
    );
};
