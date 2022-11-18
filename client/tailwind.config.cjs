/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				lobster: ["Lobster", "cursive"],
			},
			colors: {
				mainColor: "#FF4400",
				secondaryColor: "#c5d0e6",
				bgColor: "#f7f7f7",
			},
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }

			"3xl": "1800px",
			// => @media (min-width: 1800px) { ... }
		},
	},

	plugins: [],
};
