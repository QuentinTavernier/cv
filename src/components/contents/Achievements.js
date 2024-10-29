import {useState} from "react";

import {useTranslation} from "react-i18next";

import {VelocityText} from "../animations/VelocityText";
import {AchievementsCard} from "../AchievementsCard";
import {SpringLayoutTransitionDiv} from "../animations/SpringLayoutTransitionDiv";

import {achievements_content} from "../../constants/achievements_content";

export const Achievements = () => {
    const {t} = useTranslation();
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpandClick = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <VelocityText
                topText={t('achievements')}
                bottomText={t('achievements')}
            />
            <SpringLayoutTransitionDiv>
                <div className={`d-flex-col mt-10 gap-10 ${expandedIndex !== null ? '' : 'md:d-flex-row'}`}>
                    {achievements_content.map((achievement, index) => (
                        <AchievementsCard
                            key={"AchievementsCard" + index}
                            achievement={achievement}
                            expanded={expandedIndex === index}
                            onExpandClick={() => handleExpandClick(index)}
                        />
                    ))}
                </div>
            </SpringLayoutTransitionDiv>
        </>
    );
};

