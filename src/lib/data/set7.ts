import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';
import RadioGroup from '$lib/inputs/RadioGroup.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';

export const set7 = [
{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie wie häufig dies auftritt:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie häufig erleiden Sie Bewusstseinsverlust?',
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
				placeholder: 'Bitte beschreiben Sie wann dies zum ersten Mal auftrat:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wann trat zum ersten Mal ein Bewusstseinsverlust auf?',
		name: '2',
		options: [
			'letzte Woche', 'letzten Monat', 'letztes Jahr', 'vor Jahren',
			'anderes'
		],
		template: 'Erstes Auftreten: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie Ihnen bekannte Auslöser:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Sind Ihnen Auslöser für Bewusstseinsverlust bekannt?',
		name: '3',
		options: [
			'Schönheiten des anderen Geschlechts',
			'Schweizer Abstimmungsresulate',
			'mein Kontostand',
			'sorry, ich war grad bewusstlos. Um was gehts?',
			'anderes'
		],
		template: 'Bekannte Auslöser: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie wann ein Bewusstseinsverlust zum letzten Mal auftrat:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wann trat zuletzt ein Bewusstseinsverlust auf?',
		name: '4',
		options: [
			'heute',
			'gestern',
			'letzte Woche',
			'letzten Monat',
			'letztes Jahr',
			'vor Jahren',
			'anderes'
		],
		template: 'Letztes Auftreten: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte beschreiben Sie, wie Sie sich verletzt haben:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Haben Sie sich bei einem Bewusstseinsverlust jemals verletzt?',
		name: '5',
		options: [
			'ja',
			'nein'
		],
		template: 'Erlittene Verletzungen: ',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie begleitende Symptome:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Gibt es begleitende Symptome bei einem Bewusstseinsverlust?',
		name: '6',
		options: [
			'Schwindel',
			'Brustenge',
			'Brustschmerzen',
			'Atemprobleme',
			'Einnässen',
			'Zungenbiss',
			'nein, keine',
			'anderes'
		],
		template: 'Begleitende Symptome: ',
		type: CheckboxGroup,
		value: ''
	}
];
