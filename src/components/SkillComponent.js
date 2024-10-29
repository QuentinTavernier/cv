import {useState} from "react";

import {useTranslation} from "react-i18next";

import {SpringLayoutTransitionDiv} from "./animations/SpringLayoutTransitionDiv";

import {skills_content} from "../constants/skills_content";

export const SkillComponent = () => {
    const {t} = useTranslation();

    const [clickedSkills, setClickedSkills] = useState({});

    const handleClick = (index) => {
        setClickedSkills((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="d-flex-row flex-1 flex-wrap gap-2 max-w-full">
            {skills_content.map((skill, index) => (
                <SpringLayoutTransitionDiv
                    key={"SkillsComponent" + index}
                >
                    <button
                        className="tag py-2 rounded-full cursor-pointer"
                        onClick={() => handleClick(index)}
                    >
                        <img
                            src={require(`../assets/icons/${skill.icon}.svg`)}
                            alt={skill.icon}
                            className="relative h-5 w-5 md:h-6 md:w-6"
                            style={{filter: "brightness(0) saturate(100%) invert(1)"}}
                        />
                        {clickedSkills[index] &&
                            <p
                                className="p-text text-white ml-2"
                            >
                                {t(skill.title)}
                            </p>
                        }
                    </button>
                </SpringLayoutTransitionDiv>
            ))}
        </div>
    );
};
