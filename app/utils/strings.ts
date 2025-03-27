
// * Defined an Index type (has one or more properties that we don't know the name of ahead of time) for en and fr

type Language = 'en' | 'fr'

type Label = `l_${string}`


interface Translations {
	en: {
		[key: Label]: string;
	}
	fr: {
		[key: Label]: string;
	}
}

const TRANSLATIONS: Translations = {
	en: {
		l_app_name: "Poop-a-form",
		l_colon: ": ",
	},
	fr: {
		l_app_name: "Poop-a-form",
		l_colon: " : ",
	}
}

export const useLabel = (language: Language) => (label_name: Label, with_colon = false): string => {
	if (label_name as string === "") {
		return ""
	}
	if (!label_name) {
		return "undefined"
	}


	if (typeof TRANSLATIONS[ language ][ label_name ] === "undefined") {
		if (label_name.startsWith('l_')) {
			console.info('Undefined label', label_name)
		}
		return label_name
	}
	return TRANSLATIONS[ language ][ label_name ] + (with_colon ? TRANSLATIONS[ language ].l_colon : "")
}