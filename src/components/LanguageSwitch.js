import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';

import {IconComponent} from "./IconComponent";
import {SpringLayoutTransitionDiv} from "./animations/SpringLayoutTransitionDiv";

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
        <div className="switch-container bg-white dark:bg-black border border-opaquePurple ">
            <div className="flex center-center px-2">
                <IconComponent
                    icon="translate"
                    size="small"
                    color={darkMode ? "grey" : "beige"}
                />
            </div>
            <div className="switch border-0" data-isOn={language === "fr"} onClick={changeLanguage}>
                <SpringLayoutTransitionDiv>
                    <div className="handle bg-beige dark:bg-grey hover:opacity-80">
                        <p className="p-text text-xs">
                            {language.toUpperCase()}
                        </p>
                    </div>
                </SpringLayoutTransitionDiv>
            </div>
        </div>
    );
};


