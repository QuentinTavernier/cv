import {useTranslation} from "react-i18next";

import {ScrollTimelineDiv} from "../animations/ScrollTimelineDiv";
import {VelocityText} from "../animations/VelocityText";
import {RenderExperiencesEducationsCard} from "../RenderExperiencesEducationsCard";

import {educations_content} from "../../constants/educations_content";

export const Educations = () => {
    const {t} = useTranslation();

    return (
        <>
            <VelocityText
                topText={t('educations')}
                bottomText={t('educations')}
            />
            <ScrollTimelineDiv
                items={educations_content}
                renderItem={(index) => RenderExperiencesEducationsCard(educations_content[index])}
            />
        </>
    )
}
