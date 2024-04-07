import { themes, themeNames, localStorageKey } from "@constants/theme";

export function getTheme() {
	let theme = localStorage.getItem(localStorageKey);
	if (theme) {
		return theme;
	}

	// console.debug(themes);
	return themes.LIGHT;

	if (matchMedia("(prefers-color-scheme: light)").matches) {
		return themes.LIGHT;
	} else if (matchMedia("(prefers-color-scheme: dark)").matches) {
		return themes.DARK;
	} else {
		return themes.LIGHT;
	}
}

export function setTheme(themeName) {
	switch (themeName) {
		case themeNames.LIGHT:
			return themes.LIGHT;
		case themeNames.DARK:
			return themes.DARK;
		default:
			console.warn(
				"utils\\preferences\\theme::getTheme - An invalid theme name [" +
					themeName +
					"] was provided."
			);
	}
}
