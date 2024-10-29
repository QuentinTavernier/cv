import {useTranslation} from "react-i18next";

import {IconComponent} from "./IconComponent";
import {Title} from "./Title";
import {ListComponent} from "./ListComponent";
import {ScrollVisibilityDiv} from "./animations/ScrollVisibilityDiv";

import {useTheme} from "../context/ThemeProvider";

export const RenderExperiencesEducationsCard = (item) => {
    const {t} = useTranslation();
    const {darkMode} = useTheme();

    const iconColor = darkMode ? "white" : "blue";

    return (
        <ScrollVisibilityDiv className="card">
            <div className="d-flex-row items-center gap-2">
                <IconComponent
                    icon="event"
                    color={iconColor}
                />
                <Title
                    level={4}
                    text={item.date}
                    fontWeight="bold"
                />
            </div>
            <div className="d-flex-row items-center gap-2 mb-4">
                <IconComponent
                    icon="place"
                    color={iconColor}
                />
                <p className="p-text">
                    {item.place}
                </p>
            </div>
                <Title
                    level={4}
                    text={t(item.title)}
                />
                <ListComponent
                    items={item.tasks}
                />
        </ScrollVisibilityDiv>
    );
};
