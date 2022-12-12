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
                background: '#242526',
                pink: '#FF00BB',
                dark: '#18191A',
            },
        },
    },
    plugins: [],
};
