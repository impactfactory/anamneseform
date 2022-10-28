import Number from '$lib/inputs/Number.svelte';
import RadioGroup from '$lib/inputs/RadioGroup.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';

export const set3 = [
	{
		conditions: [
			{
				key: 'ja, in Ruhe und bei Anstrengung',
				label: 'Treten die Atemprobleme anfallsartig auf?',
				name: '1a',
				options: ['ja', 'nein', 'ich weiss nicht'],
				conditions: [{
					key: 'ja',
					label: 'Wieviel Minuten halten die Atemprobleme an?',
					type: Number,
					value: ''
				}],
				template: 'Anfallsartig: ',
				type: RadioGroup,
				value: ''
			},
			{
				conditions: [{
					key: 'anderes',
					label: 'Bitte Beschreiben Sie die Tätigkeit',
					type: FreeText,
					value: ''
				}],
				key: 'ja, nur bei Anstrengung',
				label: 'Bei welchen typischen Tätigkeiten treten die Atemproblem auf?',
				name: '1b',
				options: [
					'beim Gehen auf einer graden Strecke', 
					'beim Bergaufgehen', 
					'beim Treppensteigen',
					'anderes'
				],
				template: 'Typische Tätigkeiten: ',
				type: SelectGroup,
				value: ''
			},
			{
				key: 'ja, nur bei Anstrengung',
				label: 'Wenn sie die die Anstrengung stoppen, wie schnell verschwinden die Atemprobleme?',
				name: '1c',
				options: [
						'innerhalb einer Minute',
						'innerhalb von ein paar Minuten',
						'halten lange an'
				],
				template: 'Verschwindet nach Stop: ',
				type: SelectGroup,
				value: ''
			},
			{
				key: 'ja, nur bei Anstrengung',
				label: 'Wenn sie die die Anstrengung stoppen, wie schnell verschwinden die Atemprobleme?',
				name: '1d',
				options: [
						'innerhalb einer Minute',
						'innerhalb von ein paar Minuten',
						'halten lange an'
				],
				template: 'Verschwindet nach Stop: ',
				type: SelectGroup,
				value: ''
			}
		],
		label: 'Haben sie Probleme mit dem Atmen (Atemnot) bei Anstrengung oder in Ruhe?',
		name: '1',
		options: [
			'nein', 
			'ja, nur bei Anstrengung', 
			'ja, in Ruhe und bei Anstrengung'
		],
		template: 'Auftreten: ',
		type: SelectGroup,
		value: ''
	}
];
