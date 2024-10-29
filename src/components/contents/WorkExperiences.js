import {useTranslation} from "react-i18next";

import {ScrollTimelineDiv} from "../animations/ScrollTimelineDiv";
import {RenderExperiencesEducationsCard} from "../RenderExperiencesEducationsCard";
import {VelocityText} from "../animations/VelocityText";

import {experiences_content} from "../../constants/experiences_content";

export const WorkExperiences = () => {
    const {t} = useTranslation();

    return (
        <div>
            <VelocityText
                topText={t('work_experience_1')}
                bottomText={t('work_experience_2')}
            />
            <ScrollTimelineDiv
                items={experiences_content}
                renderItem={(index) => RenderExperiencesEducationsCard(experiences_content[index])}
            />
        </div>
    )
}
