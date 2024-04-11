import { localStorageThemeKey } from "@constants/theme";

const root = document.querySelector(":root");

let currentThemeStr = localStorage.getItem(localStorageThemeKey);
let currentThemeObj;

if (!currentThemeStr) {
	setTheme("light");
} else {
	currentThemeObj = JSON.parse(currentThemeStr);
	setCssVars(currentThemeObj);
}

export function getTheme() {
	return currentThemeObj.name;
}

export function setTheme(themeName) {
	if (currentThemeObj.name == themeName) {
		return;
	}

	fetch(`/themes/${themeName}.json`)
		.then((response) => {
			response
				.json()
				.then((jsonTheme) => {
					console.log("THEME");
					console.log(jsonTheme);
					setCssVars(jsonTheme);
					currentThemeObj = jsonTheme;
					localStorage.setItem(localStorageThemeKey, JSON.stringify(jsonTheme));
				})
				.catch((error) => {
					console.log(error);
				});
		})
		.catch((error) => {
			console.log(error);
		});
}

function setCssVars(jsonTheme) {
	console.debug(jsonTheme);
	root.setAttribute("theme", jsonTheme.name);

	root.style.setProperty("--neutral-one", jsonTheme.colors.neutral.one);
	root.style.setProperty("--neutral-two", jsonTheme.colors.neutral.two);
	root.style.setProperty("--neutral-three", jsonTheme.colors.neutral.three);
	root.style.setProperty(
		"--neutral-inverse-one",
		jsonTheme.colors["neutral-inverse"].one
	);
	root.style.setProperty(
		"--neutral-inverse-two",
		jsonTheme.colors["neutral-inverse"].two
	);
	root.style.setProperty(
		"--neutral-inverse-three",
		jsonTheme.colors["neutral-inverse"].three
	);
	root.style.setProperty("--primary-one", jsonTheme.colors.primary.one);
	root.style.setProperty("--primary-two", jsonTheme.colors.primary.two);
	root.style.setProperty("--primary-three", jsonTheme.colors.primary.three);
}
