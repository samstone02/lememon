import lsItemNames from "@constants/localStorageItemNames";
import themes from "@constants/themes";

console.log("imported");

export function getTheme() {
	let theme = localStorage.getItem(lsItemNames.THEME);
	if (theme) {
		return theme;
	}

	if (matchMedia("(prefers-color-scheme: light)").matches) {
		return themes.LIGHT;
	} else if (matchMedia("(prefers-color-scheme: dark)").matches) {
		return themes.DARK;
	} else {
		return themes.LIGHT;
	}
}
