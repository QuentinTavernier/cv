import PropTypes from "prop-types";

import {Button} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import {IconComponent} from "./IconComponent";

export const ButtonComponent = (props) => {
    const {onClick, icon = "code", text, variant = "outlined", isLinkedInIcon, isGitHubIcon} = props;

    const buttonStyle = {
        '&.MuiButton-root': {
            fontFamily: "'Questrial', sans-serif",
        },
        '&.MuiButton-contained': {
            backgroundColor: "var(--color-purple)",
            color: "white",
            boxShadow: 'none',
        },
        '&.MuiButton-outlined': {
            borderColor: "var(--color-purple)",
            color: "var(--color-purple)",
        },
    }

    return (
        <Button variant={variant} sx={buttonStyle} onClick={onClick}>
            {isLinkedInIcon ? <LinkedInIcon/> : isGitHubIcon ? <GitHubIcon/> :
                <IconComponent
                    icon={icon}
                    color={variant === "outlined" ? "purple" : "white"}
                    size="small"/>
            }
            {text &&
                <div className="ml-2">
                    <p className={`p-text ml-2 ${variant === "outlined" ? "!text-purple" : "text-white"}`}>
                        {text}
                    </p>
                </div>
            }
        </Button>
    );
};

ButtonComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.string,
    text: PropTypes.string,
    variant: PropTypes.string,
    isLinkedInIcon: PropTypes.bool,
    isGitHubIcon: PropTypes.bool
}
