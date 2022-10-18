import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';
import Number from '$lib/inputs/Number.svelte';
import RadioGroup from '$lib/inputs/RadioGroup.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';
import TextField from '$lib/inputs/TextField.svelte';

export const set1 = [
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Beschreiben Sie wie häufig...',
				questions: '',
				type: FreeText,
				value: ''
			}
		],
		conditionAnswer: '',
		freeText: '',
		label: 'Wie häufig haben Sie Herzrasen?',
		name: '1',
		options: [
			'mehrmals täglich',
			'einmal täglich',
			'alle paar Monate',
			'sehr unterschiedlich',
			'mal häufig, dann lange Zeit nichts',
			'sehr selten',
			'anderes'
		],
		type: CheckboxGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Welche?',
				questions: '',
				type: FreeText,
				value: ''
			}
		],
		label: 'Haben sie begleitende Symptome in dieser Zeit?',
		name: '2',
		options: ['Schwindel', 'Brustenge', 'Brustschmerzen', 'Luftprobleme', 'anderes'],
		type: SelectGroup,
		value: null
	},
	{
		conditions: [
			{
				key: 'ja',
				label: 'Gewicht (kg)',
				placeholder: 'Bitte beschreiben Sie, wie Sie es beenden können...',
				questions: '',
				type: Number,
				value: ''
			}
		],
		label: 'Können Sie das Herzrasen durch etwas beenden?',
		name: '3',
		options: ['ja', 'nein'],
		type: RadioGroup,
		value: ''
	},
	{ label: 'Ihr Name?', name: '4', type: TextField, value: null }
];
