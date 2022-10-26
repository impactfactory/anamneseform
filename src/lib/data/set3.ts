import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';
import RadioGroup from '$lib/inputs/RadioGroup.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';

export const set3 = [
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Beschreiben Sie wie häufig...',
				questions: null,
				type: FreeText,
				value: null
			}
		],
		label: 'Wie häufig haben Sie Atemnot?',
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
		template: 'Auftreten: ',
		type: CheckboxGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Das Herzrasen dauert jeweils ..',
				questions: null,
				type: FreeText,
				value: null
			}
		],
		label: 'Wie lange hält die Atemnot an?',
		name: '2',
		options: [
			'nur Sekunden',
			'ca. eine halbe Minute',
			'ca. 1-2 Minuten',
			'ca. eine halbe Stunde',
			'mehrere Stunden',
			'mal nur kurz für Minuten mal Stunden',
			'anderes'
		],
		template: 'Dauer: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Das Herzrasen beginnt jeweils ...',
				questions: null,
				type: FreeText,
				value: null
			}
		],
		label: 'Wie beginnt die Atemnot?',
		name: '3',
		options: [
			'plötzlich', 
			'langsam anklingend', 
			'weiss nicht genau',
			'anderes'
		],
		template: 'Beginn: ',
		type: SelectGroup,
		value: ''
	}
];
