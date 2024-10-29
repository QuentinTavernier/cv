import {useTheme} from "../context/ThemeProvider";

import '../tailwind.css'

export const ThemeSwitch = () => {
    const {toggleDarkMode} = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            className="flex center-center relative overflow-hidden rounded-full"
            style={{
                animation: 'float 8s ease-in-out infinite'
            }}
        >
            <div
                className="h-6 w-6 rounded-full
                bg-yellow dark:bg-white border-2
                dark:border border-golden
                dark:border-black"
            />
            <div
                className={`absolute h-6 w-6 bg-black rounded-full
                    left-[100%] dark:left-[30%]
                    bottom-[100%] dark:bottom-[30%]
                    ease-in duration-500`}
            />
            <div
                className="absolute dark:h-1.5 dark:w-1.5 bg-moon rounded-full bottom-[35%]
                 right-[100%] dark:right-[65%]
                 ease-in duration-500"
            />
            <div
                className="absolute dark:h-1 dark:w-1 bg-moon rounded-full bottom-[15%]
                 right-[100%] dark:right-[60%]
                 ease-in duration-500"
            />
        </button>
    )
}
