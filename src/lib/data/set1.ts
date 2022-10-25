import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';
import RadioGroup from '$lib/inputs/RadioGroup.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';

export const set1 = [
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
		template: 'Auftreten des Herzrasens: ',
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
		label: 'Wie lange hält das Herzrasen an?',
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
		template: '',
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
		label: 'Wie beginnt das Herzrasen?',
		name: '3',
		options: [
			'plötzlich', 
			'langsam anklingend', 
			'weiss nicht genau',
			'anderes'
		],
		template: '',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Es hört ... auf.',
				questions: null,
				type: FreeText,
				value: null
			}
		],
		label: 'Wie hört das Herzrasen auf?',
		name: '4',
		options: [
			'plötzlich', 
			'langsam abklingend', 
			'weiss nicht genau',
			'anderes'
		],
		template: null,
		type: SelectGroup,
		value: null
	}/*,
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Welche?',
				questions: null,
				type: FreeText,
				value: null
			}
		],
		label: 'Haben sie begleitende Symptome in dieser Zeit?',
		name: '5',
		options: [
			'Schwindel', 
			'Brustenge', 
			'Brustschmerzen', 
			'Luftprobleme',
			'anderes'
		],
		template: '',
		type: CheckboxGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte beschreiben Sie, wie Sie es auslösen können...',
				questions: null,
				type: FreeText,
				value: null
			}
		],
		label: 'Können Sie das Herzrasen durch etwas auslösen?',
		name: '6',
		options: [
			'ja',
			'nein',
			'ich weiss nicht'
		],
		template: '',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte beschreiben Sie, wie Sie es beenden können...',
				questions: '',
				type: FreeText,
				value: ''
			}
		],
		label: 'Können Sie das Herzrasen durch etwas beenden?',
		name: '7',
		options: [
			'ja',
			'nein',
			'ich weiss nicht'
		],
		template: '',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: '',
				placeholder: '',
				questions: '',
				type: FreeText,
				value: ''
			}
		],
		label: 'Wurde dieses Herzrasen schon einmal behandelt?',
		name: '8',
		options: [
			'medikamentös', 
			'mit Herzkatheter', 
			'unbehandelt'
		],
		template: '',
		type: CheckboxGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie...',
				questions: '',
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie fühlen Sie den Herzschlag?',
		name: '9',
		options: [
			'sehr schnell', 
			'mässig schnell', 
			'regelmässig aufeinander folgend', 
			'unregelmässig',
			'anderes'
		],
		template: '',
		type: CheckboxGroup,
		value: ''
	}*/
];
