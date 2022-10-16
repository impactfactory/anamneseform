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
				{ id: 1, component: 'SelectGroup', label: 'Was frage ich?', value: '' },
				{ id: 2, component: 'SelectGroup', label: 'zweite Frage', value: '' }
			]
		},
		{ id: 2, name: 'Brustschmerzen', value: '', questions: [{ component: 'SelectGroup' }] },
		{ id: 3, name: 'Atemnot', value: '', questions: [{ component: 'SelectGroup' }] },
		{
			id: 5,
			name: 'Herzstolpern',
			value: '',
			questions: [{ label: 'kap2frag1', value: '', component: 'SelectGroup' }]
		},
		{
			id: 6,
			name: 'Herzrhythmusstörungen',
			value: '',
			questions: [{ label: 'kap3,frag1', value: '', component: 'SelectGroup' }]
		}
	]
};
