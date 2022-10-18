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
			name: 'Atemnot',
			questions: set3
		},
		{
			id: 4,
			name: 'Schwindel',
			questions: set3
		},
		{
			id: 5,
			name: 'Herzstolpern',
			questions: set3
		},
		{
			id: 6,
			name: 'Herzrhythmusstörungen',
			questions: set3
		},
		{
			id: 7,
			name: 'Bewusstseinsverlust',
			questions: set3
		},
		{
			id: 8,
			name: 'Leistungsschwächen',
			questions: set3
		},
		{
			id: 9,
			name: 'geschwollene Beine oder Füsse (Ödem)',
			questions: set3
		}
	],
	app
};
