import { app } from '$lib/data/app';

export let content: any = {
	app,
	selectedChapters: [],
	chapters: [
		{ id: 1, name: 'Herzrasen', value: '' },
		{ id: 2, name: 'Brustschmerzen', value: '' },
		{ id: 3, name: 'Atemnot', value: '' },
		{
			id: 4,
			name: 'Schwindel',
			value: '',
			title: 'Ihre Details zu Herzklopfen',
			output: {
				title: 'Bekannte Symptome'
			},
			questions: [
				{
					id: 1,
					label: 'Wie beginnt das Herzklopfen?',
					component: 'SelectGroup',
					hasCustom: 'true',
					value: '',
					options: ['plötzlich', 'langsam zunehmend', 'mal an, mal nicht'],
					placeholder: '',
					checked: 'checked',
					output: {
						pre: 'Das Herzklopfen beginnt ',
						post: '.'
					},
					children: [
						{
							conditions: ['plötzlich', 'mal an, mal nicht'],
							label: 'Wann nimmt es plötzlich zu?',
							type: 'SelectGroup',
							options: ['morgens', 'nachts', 'beim Sport'],
							placeholder: '',
							output: {
								pre: 'Es nimmt ',
								post: ' plötzlich zu.'
							},
							children: [
								{
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
							]
						}
					]
				},
				{
					id: 2,
					label: 'Welche zweite Fragen haben wir?',
					component: 'SelectGroup',
					value: '',
					hasCustom: true,
					placeholder: 'schreib mal!'
				}
			]
		},
		{
			id: 5,
			name: 'Herzstolpern',
			value: '',
			questions: [{ label: 'kap2frag1', value: '', component: 'Textarea' }]
		},
		{
			id: 6,
			name: 'Herzrhythmusstörungen',
			value: '',
			questions: [{ label: 'kap3,frag1', value: '', component: 'RadioGroup' }]
		}
	]
};
