import { app } from '$lib/data/app';
import { set1 } from '$lib/data/set1';
import { set2 } from '$lib/data/set2';
import { set3 } from '$lib/data/set3';

export const fields = {
	selectedChapters: [] as any[],
	chapters: [
		{
			id: 1,
			name: 'Herzrasen',
			questions: set1
		},
		{
			id: 2,
			name: 'Brustschmerzen',
			questions: set2
		},
		{
			id: 3,
			name: 'Schwindel',
			questions: set3
		}
	],
	app
};
