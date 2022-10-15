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
					label: 'Wie beginnt das Herzklopfen?',
					type: 'radioGroup',
					hasCustom: 'true',
					options: ['plötzlich', 'langsam zunehmend', 'mal an, mal nicht'],
					placeholder: '',
					checked: 'checked',
					output: {
						pre: 'Das Herzklopfen beginnt ',
						post: '.'
					},
					child: {
						conditions: ['plötzlich', 'mal an, mal nicht'],
						label: 'Wann nimmt es plötzlich zu?',
						type: 'SelectGroup',
						options: ['morgens', 'nachts', 'beim Sport'],
						placeholder: '',
						output: {
							pre: 'Es nimmt ',
							post: ' plötzlich zu.'
						},
						child: {
							conditions: ['beim Sport'],
							label: 'Welchen Sport machen Sie?',
							type: 'TextArea',
							options: [],
							placeholder: 'Bitte beschreiben Sie',
							output: {
								pre: 'Sportart: ',
								post: '.'
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
