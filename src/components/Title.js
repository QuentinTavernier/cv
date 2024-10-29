import React from 'react';
import PropTypes from 'prop-types';

export const Title = (props) => {
    const {level, text, fontWeight = "normal", uppercase = false} = props;

    const Tag = `h${level}`;

    const fontSize = {
        1: 'text-3xl md:text-4xl',
        2: 'text-2xl md:text-3xl',
        3: 'text-xl md:text-2xl',
        4: 'text-xl md:text-2xl',
    };

    const fontWeightClasses = {
        thin: 'font-thin',
        extralight: 'font-extralight',
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
        black: 'font-black'
    };

    return (
        <Tag
            className={`
                ${fontWeightClasses[fontWeight] || 'font-normal'}
                ${uppercase ? 'uppercase' : ''}
                ${fontSize[level]}
            `}
        >
            {text}
        </Tag>
    );
};

Title.propTypes = {
    level: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    fontWeight: PropTypes.oneOf([
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black'
    ]),
    uppercase: PropTypes.bool,
};

