export let themeSettings = null;
export let text = null;
export let language = null;
export let api = null;

const setVariables = options => {
	if (options.themeSettings) {
		options.themeSettings.home_slider = [
			{
				path: '/page-1',
				image: 'slide_1.jpg',
				description: 'COMFORT. SPORT. STYLE.',
				title: 'THE FRESH FOAM CRUZ'
			},
			{ path: '/page-2', image: 'slide_3.jpg' },
			{ image: 'slide_2.jpg', path: '/page-3' }
		];
		themeSettings = options.themeSettings;
	}

	if (options.text) {
		text = options.text;
	}

	if (options.language) {
		language = options.language;
	}

	if (options.api) {
		api = options.api;
	}
};

export const initOnClient = options => {
	setVariables(options);
};

export const initOnServer = options => {
	setVariables(options);
};
