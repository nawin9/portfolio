const size = {
    mobileS: '325px',
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

const color = {
    primary: '#2bbc8a',
    secondary: '#c9cacc',
    tertiary: '#2e8b57',
};

export default {
    color,
    device: {
        mobileS: `(max-width: ${size.mobileS})`,
        mobile: `(max-width: ${size.mobile})`,
        tablet: `(min-width: ${size.tablet})`,
        laptop: `(min-width: ${size.laptop})`,
        laptopL: `(min-width: ${size.laptopL})`,
        desktop: `(min-width: ${size.desktop})`,
    },
};
