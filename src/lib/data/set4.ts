import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';


export const set4 = [
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie den Schwindel:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie würden Sie den Schwindel beschreiben?',
		name: '1',
		options: [
			'als Drehschwindel', 'als xx',
			'anderes'
		],
		template: 'Beschreibung des Schwindels: ',
		type: CheckboxGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Wie oft?',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie häufig haben Sie diesen Schwindel?',
		name: '2',
		options: [
			'mehrmals täglich',
			'einmal täglich',
			'alle paar Monate',
			'sehr unterschiedlich',
			'mal häufig, dann lange Zeit nichts',
			'sehr selten',
			'anderes'
		],
		template: 'Häufigkeit: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie wie der Schwindel beginnt:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie beginnt der Schwindel jeweils?',
		name: '3',
		options: [
			'plötzlich', 'langsam zunehmend', 'weiss nicht genau',
			'anderes'
		],
		template: 'Beginn: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Wie lange?',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie lange hält der Schwindel an?',
		name: '4',
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
				placeholder: 'Bitte beschreiben Sie wie der Schwindel aufhört:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie hört der Schwindel auf?',
		name: '5',
		options: [
			'plötzlich', 'langsam abnehmend', 'weiss nicht genau',
			'anderes'
		],
		template: 'Ende: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie wie lange Sie den Schwindel schon kennen:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Seit wann kennen Sie diesen Schwindel?',
		name: '6',
		options: [
			'schon Jahre', 'erst seit Kurzem', 'ich hatte es früher, dann lange nicht',
			'anderes'
		],
		template: 'Bekannt: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie wann der Schwindel zum letzten Mal auftrat:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wann trat der Schwindel zuletzt auf?',
		name: '7',
		options: [
			'heute', 'gestern', 'letzte Woche', 'letzten Monat', 'letztes Jahr', 'vor Jahren',
			'anderes'
		],
		template: 'Letztes Auftreten: ',
		type: SelectGroup,
		value: ''
	}
];
