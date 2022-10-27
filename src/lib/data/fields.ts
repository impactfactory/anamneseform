import { app } from '$lib/data/app';
import { set1 } from '$lib/data/set1';
import { set2 } from '$lib/data/set2';
import { set3 } from '$lib/data/set3';
import { set4 } from '$lib/data/set4';
import { set5 } from '$lib/data/set5';
import { set6 } from '$lib/data/set6';
import { set7 } from '$lib/data/set7';
import { set8 } from '$lib/data/set8';
import { set9 } from '$lib/data/set9';


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
			questions: set3,
			template: 'Details zur '
		},
		{
			id: 4,
			name: 'Schwindel',
			questions: set4,
			template: 'Details zum '
		},
		{
			id: 5,
			name: 'Herzstolpern',
			questions: set5,
			template: 'Details zum '
		},
		{
			id: 6,
			name: 'Herzrhythmusstörungen',
			questions: set6,
			template: 'Details zu den '
		},
		{
			id: 7,
			name: 'Bewusstseinsverlust',
			questions: set7,
			template: 'Details zum '
		},
		{
			id: 8,
			name: 'Leistungsschwächen',
			questions: set8,
			template: 'Details zu den '
		},
		{
			id: 9,
			name: 'geschwollene Beine oder Füsse (Ödem)',
			questions: set9,
			template: 'Details zu '
		}
	],
	app
};
