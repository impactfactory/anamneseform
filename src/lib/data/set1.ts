import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import RadioGroup from '$lib/inputs/RadioGroup.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';
import TextField from '$lib/inputs/TextField.svelte';

export const set1 = [
	{
		name: '1',
		label: 'Wie häufig haben Sie Herzrasen?',
		value: '',
		freeText: '',
		hasFreetext: true,
		type: CheckboxGroup,
		options: [
			'mehrmals täglich',
			'einmal täglich',
			'alle paar Monate',
			'sehr unterschiedlich',
			'mal häufig, dann lange Zeit nichts',
			'sehr selten'
		],
		placeholder: 'Beschreiben Sie wie häufig...'
	},
	{
		freeText: '',
		hasFreetext: true,
		label: 'Haben sie begleitende Symptome in dieser Zeit?',
		name: '2',
		type: SelectGroup,
		options: ['Schwindel', 'Brustenge', 'Brustschmerzen', 'Luftprobleme'],
		placeholder: 'Welche?',
		value: null,
		freetext: ''
	},
	{
		condition: 'ja',
		freeText: '',
		hasFreetext: null,
		label: 'Können Sie das Herzrasen durch etwas beenden?',
		name: '3',
		type: RadioGroup,
		options: ['ja', 'nein'],
		placeholder: 'Bitte beschreiben Sie, wie Sie es beenden können...',
		value: ''
	},
	{ name: '4', type: TextField, label: 'Ihr Name?', value: null }
];
