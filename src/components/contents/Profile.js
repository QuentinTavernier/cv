import {useTranslation} from "react-i18next";

import {SkillComponent} from "../SkillComponent";
import {Title} from "../Title";
import {Contact} from "../Contact";

export const Profile = () => {
    const {t} = useTranslation();

    return (
        <div className="d-flex-col md:d-flex-row w-full h-screen center-center">
            <div className="flex flex-1 justify-start md:justify-center">
                <div
                    className="relative p-2 bg-opaquePurple border border-purple h-fit w-3/4"
                    style={{borderRadius: '25%'}}
                >
                    <img
                        src={require('../../assets/images/avatar-bg.webp')}
                        className="relative h-auto w-full"
                        style={{borderRadius: '25%'}}
                        alt="Avatar"
                    />
                    <img
                        src={require('../../assets/images/avatar.webp')}
                        className="absolute h-auto w-full right-0 bottom-0"
                        style={{borderRadius: '25%'}}
                        alt="Avatar"
                    />
                </div>
            </div>
            <div className="d-flex-col flex-1 gap-4 mt-4 md:mt-0">
                <div>
                    <Title
                        level={1}
                        text="Quentin"
                        fontWeight="thin"
                    />
                    <Title
                        level={1}
                        text="TAVERNIER"
                        fontWeight="bold"
                    />
                </div>
                <Title
                    level={2}
                    text={t('job')}
                />
                <p className="p-text">
                    {t('profile')}
                </p>
                <SkillComponent/>
                <div className="mt-4">
                    <Contact/>
                </div>
            </div>
        </div>
    )
}
