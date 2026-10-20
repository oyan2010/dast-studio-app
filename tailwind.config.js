/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#ee2b4b",
                "background-light": "#fdfbf7", // Cream
                "background-dark": "#221013",
                "blush": "#f9ebea",
                "rose-gold": "#b76e79",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"]
            },
            borderRadius: { "DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px" },
        },
    },
    plugins: [],
}
