import {useRef} from "react";
import PropTypes from "prop-types";

import {motion, useScroll, useTransform} from "framer-motion";

import {IconComponent} from "../IconComponent";

import {useTheme} from "../../context/ThemeProvider";

function useParallax(value, distance) {
    return useTransform(value, [0, 0.5, 1], [-distance, 0, distance]);
}

function ParallaxSection(props) {
    const {index, icon, renderItem} = props

    const ref = useRef(null);
    const {darkMode} = useTheme()
    const {scrollYProgress} = useScroll({target: ref});
    const y = useParallax(scrollYProgress, 50);

    return (
        <section className="flex center-center snap-center">
            <div className="max-h-[75%] relative d-flex-row w-full overflow-visible z-50 py-5" ref={ref}>
                <div className="flex center-center mr-8">
                    <motion.h2 style={{y}}>
                        <div
                            className="flex center-center border border-purple dark:border-white bg-white dark:bg-purple -ml-4 md:-ml-6 p-2 md:p-4 rounded-full "
                        >
                            <IconComponent icon={icon} color={darkMode ? "white" : "purple"}/>
                        </div>
                    </motion.h2>
                </div>
                {renderItem(index)}
            </div>
        </section>

    );
}

export const ScrollTimelineDiv = (props) => {
    const {items = [], renderItem} = props

    return (
        <div className="relative z-40">
            <div className="absolute top-0 h-full border-4 border-white dark:border-opaquePurple"/>
            <div className="py-5 border-b border-white dark:border-opaquePurple">
                {items.map((item, index) => (
                        <ParallaxSection
                            key={"ParallaxSection" + index}
                            index={index}
                            icon={item.icon}
                            renderItem={renderItem}
                        />
                    )
                )}
            </div>
        </div>
    );
};


ScrollTimelineDiv.propTypes = {
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.elementType.isRequired
}

ParallaxSection.propTypes = {
    index: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    renderItem: PropTypes.elementType.isRequired
}

