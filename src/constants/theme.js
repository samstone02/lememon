/**
 * Theme naming theory:
 * Theme colors are named after their place within the pallette or their intended meaning.
 * Higher subvalues of the neutral, neutralInverse, or primary color groups are more "normalized".
 * This means they "move towards the middle".
 */

export const localStorageKey = "theme";

export const themeNames = {
	LIGHT: "light",
	DARK: "dark",
};

export const themes = {
	LIGHT: {
		name: "light",
		color: {
			neutral: {
				one: "e-paper",
				two: "e-paper-darker",
				three: "red-700",
			},
			neutralInverse: {
				one: "e-ink",
				two: "red-500",
				three: "red-900",
			},
			primary: {
				one: "lagoon",
				two: "red-500",
				three: "salty-lagoon",
			},
			danger: {
				one: "red-100",
				two: "red-500",
				three: "red-900",
			},
		},
	},
	DARK: {
		name: "dark",
		color: {
			neutral: {
				one: "e-ink",
				two: "e-paper-darker",
				three: "red-700",
			},
			neutralInverse: {
				one: "e-ink",
				two: "red-500",
				three: "red-900",
			},
			primary: {
				one: "lagoon",
				two: "red-500",
				three: "salty-lagoon",
			},
			danger: {
				one: "red-100",
				two: "red-500",
				three: "red-900",
			},
		},
	},
};
