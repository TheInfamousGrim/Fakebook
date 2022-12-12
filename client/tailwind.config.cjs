/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                grey: ' #7C7C7C',
                dGrey: '#3A3B3C',
                fill: '#B0B3B8',
                whitish: '#F0F2F5',
                darkWhite: '#AAAAAA',
                placeholderColor: '#999999',
                background: '#242526',
                blackText: '#262930',
                pink: '#FF00BB',
                darkerPink: '#C7143F',
                dark: '#18191A',
                hoverGrey: '#3A3B3C',
                green: '#2AB842',
            },
            backgroundImage: {
                'login-pattern': "url('./assets/svg/Sign-Up-bg-image.svg')",
            },
        },
    },
    plugins: [],
};
