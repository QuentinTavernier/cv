import PropTypes from "prop-types";

import {motion} from "framer-motion";

export const SpringLayoutTransitionDiv = (props) => {
    const {children, className = ""} = props

    const spring = {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 1000
    };

    return (
        <motion.div
            layout
            transition={spring}
            className={className}
        >
            {children}
        </motion.div>
    )
}

SpringLayoutTransitionDiv.propTypes = {
    children: PropTypes.object.isRequired,
    className: PropTypes.string,
}
