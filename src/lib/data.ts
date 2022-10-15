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
					placeholder: '',
					checked: 'checked',
					output: {
						pre: 'Das Herzklopfen nimmt ',
						post: 'zu'
					},
					child: {
						conditions: ['langsam zunehmend', 'plötzlich'],
						label: 'Welche Folgefrage haben wird?',
						type: 'SelectGroup',
						hasCustom: 'true',
						options: ['gut', 'schlecht', 'übel'],
						placeholder: '',
						output: {
							pre: 'Das Herzklopfen nimmt ',
							post: 'zu'
						},
						child: {
							conditions: ['übel'],
							label: 'Was kann man als Drittes fragen?',
							type: 'TextArea',
							hasCustom: 'true',
							options: ['ja', 'nein', 'fraglich'],
							placeholder: 'Bitte beschreiben Sie Ihre individuelle Antwort',
							output: {
								pre: 'Das Herzklopfen nimmt ',
								post: 'zu'
							}
						}
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
