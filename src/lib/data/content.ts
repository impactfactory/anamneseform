import { app } from '$lib/data/app';

export let content: any = {
	app,
	selectedChapters: '',
	chapters: [
		{
			id: 1,
			name: 'Schwindel',
			value: '',
			questions: [
				{ id: 1, component: 'MultiSelect', label: 'Was frage ich?', value: '' },
				{ id: 2, component: 'MultiSelect', label: 'zweite Frage', value: '' }
			]
		},
		{ id: 2, name: 'Brustschmerzen', value: '', questions: [{ component: 'MultiSelect' }] },
		{ id: 3, name: 'Atemnot', value: '', questions: [{ component: 'MultiSelect' }] },
		{
			id: 5,
			name: 'Herzstolpern',
			value: '',
			questions: [{ label: 'kap2frag1', value: '', component: 'MultiSelect' }]
		},
		{
			id: 6,
			name: 'Herzrhythmusstörungen',
			value: '',
			questions: [{ label: 'kap3,frag1', value: '', component: 'MultiSelect' }]
		}
	]
};
