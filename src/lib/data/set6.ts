import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';
import RadioGroup from '$lib/inputs/RadioGroup.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';

export const set6 = [
{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie wie häufig:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie häufig haben Sie Herzrhythmusstörungen?',
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
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie wie sie beginnen:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie beginnen die Herzrhythmusstörungen?',
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
				placeholder: 'Bitte beschreiben wie lange: ',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie lange die Herzrhythmusstörungen jeweils an?',
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
				placeholder: 'Bitte beschreiben Sie wie sie aufhören:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie hören die Herzrhythmusstörungen jeweils auf?',
		name: '4',
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
				placeholder: 'Bitte beschreiben Sie wie lange Sie diese schon kennen:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Seit wann erfahren Sie die Herzrhythmusstörungen?',
		name: '5',
		options: [
			'schon Jahre', 'erst seit Kurzem', 'ich hatte es früher, dann lange nicht',
			'anderes'
		],
		template: 'Bekannt seit: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'itte beschreiben Sie wann sie zum letzten Mal auftraten:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wann traten die Herzrhythmusstörungen zuletzt auf?',
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
				placeholder: 'Bitte beschreiben Sie, wie Sie diese auslösen können..',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Können Sie die Herzrhythmusstörungen durch etwas auslösen?',
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
				placeholder: 'Bitte beschreiben Sie, wie Sie diese beenden können:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Können Sie die Herzrhythmusstörungen durch etwas beenden?',
		name: '8',
		options: [
			'ja',
			'nein',
			'ich weiss nicht'
		],
		template: 'Terminierung: ',
		type: CheckboxGroup,
		value: ''
	}
];
