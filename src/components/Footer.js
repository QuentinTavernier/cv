import React from "react";

import {Contact} from "./Contact";
import {Logo} from "./Logo";

export const Footer = () => {
    return (
        <footer className="w-full bg-white dark:bg-black">
            <div className="container py-12 md:py-16">
                <div className="d-flex-row start-center gap-2">
                    <Logo/>
                    <div>
                        <p className="p-text font-montserrat">
                            Quentin
                        </p>
                        <p className="p-text font-bold font-montserrat">
                            TAVERNIER
                        </p>
                    </div>
                </div>
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
