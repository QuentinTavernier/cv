import {useRef, useEffect, useState} from "react";
import PropTypes from "prop-types";

import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import {wrap} from "@motionone/utils";

function ParallaxText(props) {
    const {children, baseVelocity} = props

    const [repeats, setRepeats] = useState(4);
    const [motionRange, setMotionRange] = useState([-20, -45]);

    const scrollerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const calculateRepeats = () => {
            if (!scrollerRef.current || !textRef.current) return;

            const viewportWidth = window.innerWidth;
            const textWidth = textRef.current.offsetWidth;

            const minimumRepeats = Math.max(4, Math.ceil(viewportWidth / textWidth));
            setRepeats(minimumRepeats);

            const percentPerRepeat = 100 / minimumRepeats;
            setMotionRange([-percentPerRepeat, -(percentPerRepeat * 2)]);
        };

        calculateRepeats();
        window.addEventListener('resize', calculateRepeats);
        return () => window.removeEventListener('resize', calculateRepeats);
    }, [children]);

    const baseX = useMotionValue(0);
    const {scrollY} = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(motionRange[0], motionRange[1], v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax z-30" ref={scrollerRef}>
            <motion.div className="scroller text-2xl md:text-4xl" style={{x}}>
                <span ref={textRef}>
                    {children}
                </span>
                {[...Array(repeats - 1)].map((_, i) => (
                    <span key={i}>{children}</span>
                ))}
            </motion.div>
        </div>
    );
}

export const VelocityText = (props) => {
    const {topText, bottomText} = props

    return (
        <div className="relative">
            <div className="w-full border py-1 md:py-4 border-white dark:border-opaquePurple">
                <h3 className="w-full text-white dark:text-opaquePurple">
                    <ParallaxText baseVelocity={-1}>{topText}</ParallaxText>
                    <ParallaxText baseVelocity={1}>{bottomText}</ParallaxText>
                </h3>
            </div>
        </div>

    );
}

ParallaxText.propTypes = {
    children: PropTypes.elementType.isRequired,
    baseVelocity: PropTypes.number
}

VelocityText.propTypes = {
    topText: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired
}
