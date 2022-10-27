import FreeText from '$lib/inputs/FreeText.svelte';
import RadioGroup from '$lib/inputs/RadioGroup.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';

export const set5 = [
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie wie häufig Herzstolpern auftritt:',
				questions: '',
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie häufig haben Sie Herzstolpern?',
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
		template: 'Häufigkeit: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: '',
				placeholder: '',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie beginnt das Herzstolpern',
		name: '2',
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
				placeholder: 'Bitte beschreiben Sie wie lange:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie lange hält das Herzstolpern jeweils an?',
		name: '3',
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
				placeholder: 'Bitte beschreiben Sie wie es aufhört:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie hört das Herzstolpernd jeweils auf?',
		name: '4',
		options: [
			'plötzlich', 
			'langsam abnehmend', 
			'weiss nicht genau',
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
				placeholder: 'Bitte beschreiben Sie seit wann:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Seit wann erfahren Sie das Herzstolpern?',
		name: '5',
		options: [
			'schon Jahre', 
			'erst seit Kurzem', 
			'ich hatte es früher, dann lange nicht',
			'anderes'
		],
		template: 'Seit: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte geben Sie an wann:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wann trat das Herzstolpern zuletzt auf?',
		name: '6',
		options: [
			'heute',
			'gestern',
			'letzte Woche',
			'letzten Monat',
			'letztes Jahr',
			'vor Jahren',
			'anderes'
		],
		template: 'Zuletzt: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte beschreiben Sie, wie Sie es auslösen können:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Können Sie das Herzstolpern durch etwas auslösen?',
		name: '7',
		options: [
			'ja',
			'nein',
			'ich weiss nicht'
		],
		template: 'Auslöser: ',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte beschreiben Sie, wie Sie es beenden können:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Können Sie das Herzstolpern durch etwas beenden?',
		name: '8',
		options: [
			'ja',
			'nein',
			'ich weiss nicht'
		],
		template: 'Terminierung durch: ',
		type: RadioGroup,
		value: ''
	}
];
