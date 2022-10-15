export const data = {
	chapters: [
		{
			id: 1,
			name: 'Herzklopfen',
			title: 'Ihre Details zu Herzklopfen',
			output: {
				title: 'Bekannte Symptome'
			},
			questions: [
				{
					id: 1,
					label: 'Welche Frage haben wird?',
					type: 'radioGroup',
					hasCustom: 'true',
					options: ['plötzlich', 'langsam zunehmend', 'mal an, mal nicht'],
					placeholder: 'Bitte beschreiben Sie Ihre individuelle Antwort',
					checked: 'checked',
					output: {
						pre: 'Das Herzklopfen nimmt ',
						post: 'zu'
					}
				},
				{ id: 2, label: 'Welche zweite Fragen haben wir?' }
			]
		},
		{ id: 2, name: 'Herzrasen' },
		{ id: 3, name: 'Schwindel' }
	],
	pages: 'xx',
	directlinks: '',
	whatever: '',
	favicon: '/assets/favicon.svg',
	thanksto: 'Sascha Aeppli'
};
