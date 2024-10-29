import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

export const ImagesGallery = (props) => {
    const { images } = props;

    const [isPortraitImages, setIsPortraitImages] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = require(`../assets/images/${images[0]}.webp`);

        img.onload = () => {
            const imageDimensions = { width: img.width, height: img.height };
            setIsPortraitImages(imageDimensions.height > imageDimensions.width);
        };
    }, [images]);

    return (
        <div className="w-full">
            <div className="relative">
                <div className={`grid gap-4 ${isPortraitImages ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1"}`}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={require(`../assets/images/${image}.webp`)}
                            alt={`Image-min-${index + 1}`}
                            className={`w-full h-auto object-cover rounded-xl`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

ImagesGallery.propTypes = {
    images: PropTypes.array.isRequired,
}
