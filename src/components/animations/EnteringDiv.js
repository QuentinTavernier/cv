import PropTypes from "prop-types";

import {motion} from "framer-motion";

export const EnteringDiv = (props) => {
    const {children} = props

    return (
        <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{
                duration: 2,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            {children}
        </motion.div>
    )
}

EnteringDiv.propTypes = {
    children: PropTypes.object.isRequired
}
