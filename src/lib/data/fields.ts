import { app } from '$lib/data/app';
import { set1 } from '$lib/data/set1';
import { set2 } from '$lib/data/set2';


export const fields = {
	selectedChapters: [] as any[],
	chapters: [
		{
			id: 1,
			name: 'Herzrasen',
			questions: set1,
			template: 'Details zum '
		},
		{
			id: 2,
			name: 'Brustschmerzen',
			questions: set2,
			template: 'Details zu den '
		},
		{
			id: 3,
			name: 'Atemnot',
			questions: null,
			template: 'Details zur '
		},
		{
			id: 4,
			name: 'Schwindel',
			questions: null,
			template: 'Details zum '
		},
		{
			id: 5,
			name: 'Herzstolpern',
			questions: null,
			template: 'Details zum '
		},
		{
			id: 6,
			name: 'Herzrhythmusstörungen',
			questions: null,
			template: 'Details zu den '
		},
		{
			id: 7,
			name: 'Bewusstseinsverlust',
			questions: null,
			template: 'Details zum '
		},
		{
			id: 8,
			name: 'Leistungsschwächen',
			questions: null,
			template: 'Details zu den '
		},
		{
			id: 9,
			name: 'geschwollene Beine oder Füsse (Ödem)',
			questions: null,
			template: 'Details zu '
		}
	],
	app
};
