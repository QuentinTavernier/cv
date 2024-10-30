import React from "react";

import {Contact} from "./Contact";

export const Footer = () => {
    return (
        <footer className="w-full bg-white dark:bg-black">
            <div className="container py-12 md:py-16">
                <p className="p-text font-montserrat">
                    Quentin
                </p>
                <p className="p-text font-bold font-montserrat">
                    TAVERNIER
                </p>
                <div className="flex mt-4 flex-col md:flex-row start-start md:between-end">
                    <Contact/>
                    <p className="p-text font-open mt-8 md:mt-0 text-end w-full">
                        Made with 💜 - 2024 ©
                    </p>
                </div>
            </div>
        </footer>
    )
}