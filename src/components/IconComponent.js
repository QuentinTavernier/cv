import PropTypes from "prop-types";

import Icon from "@mui/material/Icon";

export const IconComponent = (props) => {
    const {icon, size = "medium", color = "white"} = props

    return (
        <Icon
            fontSize={size}
            className={`text-${color}`}
        >
            {icon}
        </Icon>
    )
}

IconComponent.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string
}
