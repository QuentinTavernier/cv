import * as React from 'react';
import PropTypes from "prop-types";

import {useTranslation} from "react-i18next";

import {IconComponent} from "./IconComponent";
import {Title} from "./Title";
import {SpringLayoutTransitionDiv} from "./animations/SpringLayoutTransitionDiv";
import {ScrollVisibilityDiv} from "./animations/ScrollVisibilityDiv";
import {ImagesGallery} from "./ImagesGallery";
import {ListComponent} from "./ListComponent";

import {useTheme} from "../context/ThemeProvider";
import {ButtonComponent} from "./ButtonComponent";

export const AchievementsCard = (props) => {
    const {achievement, expanded, onExpandClick} = props
    const {title, link, mainImages, images, resume, skills} = achievement

    const {t} = useTranslation();
    const {darkMode} = useTheme()

    const onClickOnLinkButton = ()  => {
      window.open(link)
    }

    return (
        <ScrollVisibilityDiv className="w-full">
            <SpringLayoutTransitionDiv
                className="h-full"
            >
                <div className="card h-full justify-between">
                    <div>
                        <div className="d-flex-row between-center">
                            <Title
                                level={4}
                                text={t(title)}
                                fontWeight="bold"
                            />
                            {link &&
                                <button
                                    onClick={onClickOnLinkButton}
                                >
                                    <IconComponent
                                        icon="link"
                                        color={darkMode ? "white" : "blue"}
                                    />
                                </button>
                            }
                        </div>
                        <div className="w-full flex start-center">
                            <img
                                src={require(`../assets/images/${mainImages[darkMode ? "dark" : "light"]}.webp`)}
                                className="relative h-20 w-auto mt-2 mb-4"
                                alt={t(title)}
                            />
                        </div>
                        <p className="p-text">
                            {t(resume)}
                        </p>
                    </div>
                    {expanded &&
                        <>
                            <div className="py-8 w-full">
                                <p className="p-text mb-2">
                                    {t('what_did_i_do')}
                                </p>
                                <ListComponent
                                    items={skills}
                                />
                            </div>
                            <div className="w-full">
                                <ImagesGallery
                                    images={images}
                                    isLandscapeImage
                                />
                            </div>
                        </>
                    }
                    <div
                        className={`d-flex-col md:d-flex-row w-full mt-8 md:mt-16 ${expanded && link ? " center-end gap-4 md:between-center" : "end-end" }`}
                    >
                        {expanded && link &&
                            <ButtonComponent
                                icon="link"
                                variant="contained"
                                onClick={onClickOnLinkButton}
                                text={t('discover')}
                            />
                        }
                        <button
                            onClick={onExpandClick}
                            className="d-flex-row gap-2 center-center"
                        >
                            <p className="p-text">
                                {expanded ? t('hide') : t('learn_more')}
                            </p>
                            <IconComponent
                                icon={expanded ? "expand_less" : "expand_more"}
                                color={darkMode ? "white" : "blue"}
                            />
                        </button>
                    </div>
                </div>
            </SpringLayoutTransitionDiv>
        </ScrollVisibilityDiv>
    );
}

AchievementsCard.propTypes = {
    achievement: PropTypes.object.isRequired,
    expanded: PropTypes.bool.isRequired,
    onExpandClick: PropTypes.func.isRequired,
}

