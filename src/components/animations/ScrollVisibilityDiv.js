import {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";

export const ScrollVisibilityDiv = (props) => {
    const {children, className} = props

    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        const currentElement = elementRef.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={`${className} ${isVisible ? 'fade-in-up' : 'invisible'}`}
        >
            {children}
        </div>
    );
};

ScrollVisibilityDiv.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array.isRequired,
        PropTypes.object.isRequired,
    ]).isRequired,
}
