import _ from 'lodash';
import color from 'color';

const baseColors = {
    cyan: color().cmyk(255, 0, 0, 0),
    magenta: color().cmyk(0, 255, 0, 0),
    yellow: color().cmyk(0, 0, 255, 0),
    black: color().cmyk(0, 0, 0, 255),
    red: color().rgb(255, 0, 0),
    green: color().rgb(0, 255, 0),
    blue: color().rgb(0, 0, 255),
    orange: color().hsv(25, 100, 100),
    redOrange: color().hsv(12.5, 100, 100),
    purple: color().hsv(280, 100, 100),
    gray: color().rgb(127, 127, 127),
    white: color().rgb(255, 255, 255),
    darkslateblue: color('darkslateblue'),
};

const fadedColors = _.reduce(baseColors, (dc, c, k) => {
    dc[`faded${_.capitalize(k)}`] = c.clone().desaturate(0.5).lighten(0.2);
    return dc;
}, {});

const darkColors = _.reduce(baseColors, (dc, c, k) => {
    dc[`dark${_.capitalize(k)}`] = c.clone().darken(0.5);
    return dc;
}, {});

const lightColors = _.reduce(baseColors, (dc, c, k) => {
    dc[`light${_.capitalize(k)}`] = c.clone().lighten(0.85);
    return dc;
}, {});

const darkFadedColors = _.reduce(baseColors, (dc, c, k) => {
    dc[`darkFaded${_.capitalize(k)}`] = c.clone().darken(0.5).desaturate(0.5);
    return dc;
}, {});

const lightFadedColors = _.reduce(baseColors, (dc, c, k) => {
    dc[`lightFaded${_.capitalize(k)}`] = c.clone().lighten(0.85).desaturate(0.33);
    return dc;
}, {});

const rawColors = _.extend(
    {},
    fadedColors,
    baseColors,
    darkColors,
    lightColors,
    darkFadedColors,
    lightFadedColors,
);

const rgbColors = _.reduce(
    rawColors,
    (rgbColors, color, key) => {
        rgbColors[key] = color.rgbString();
        return rgbColors;
    }
, {});

const nextColor = (initialColor, phases) => {
    let color = initialColor.clone();

    return (iterations) => {
        let newColor = color.clone();

        for (let i = 0; i < iterations; i++) {
            newColor.rotate(360 / phases);
        }

        return newColor;
    };
}

export default {
    raw: rawColors,
    rgb: rgbColors,
    nextColor: nextColor,
}
