import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';
import RadioGroup from '$lib/inputs/RadioGroup.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';
import TextArea from '$lib/inputs/TextArea.svelte';

export const set2 = [
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Beschreiben Sie bitte die Art der Beschwerden:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Welche Art Missempfindungen oder Beschwerden in der Brust sind es?',
		name: '1',
		options: [
			'Druck oder Brennen',
			'Stechen in der Brust',
			'anderes'
		],
		template: 'Beschwerden: ',
		type: CheckboxGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Beschreiben Sie bitte die Lokalisation der Beschwerden:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wo sind diese Beschwerden?',
		name: '3',
		options: [
			'hinter dem Brustbein',
			'im linken Arm',
			'in der linken Brusthälfte',
			'in der gesamten Brust',
			'im Kiefer oder in den Zähnen',
			'im Halsbereich',
			'im Nacken',
			'zwischen den Schulterblättern',
			'anderes'
		],
		template: 'Lokalisation: ',
		type: CheckboxGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: '',
				placeholder: '',
				questions: null,
				type: null,
				value: ''
			}
		],
		label: 'Sind die Beschwerden oder Missempfindungen eher flächig oder lassen sie sich eher punktuell mit dem Finger zeigen?',
		name: '4',
		options: [
			'flächig', 
			'eher punktuell'
		],
		template: 'Art: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: ['bei leichter körperlicher Anstrengung','bei deutlicher körperlicher Anstrengung'],
				placeholder: 'Beschreiben sie eine typische Belastung, bei welcher die Beschwerden auftreten',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wann treten diese Beschwerden auf?',
		name: '5',
		options: [
			'bei leichter körperlicher Anstrengung',
			'bei deutlicher körperlicher Anstrengung',
			'bei Stress',
			'in Ruhe'
		],
		template: 'Zeiten: ',
		type: CheckboxGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: '',
				placeholder: '',
				questions: null,
				type: TextArea,
				value: ''
			}
		],
		label: 'Wie häufig haben Sie diese Beschwerden?',
		name: '6',
		options: [
			'mehrmals täglich',
			'täglich',
			'mehrmals in der Woche',
			'ungefähr einmal in der Woche',
			'ein paar mal im Monat',
			'gelegentlich',
			'bis jetzt nur einmal gehabt',
			'bis jetzt nur ein paarmal gehabt'
		],
		template: 'Häufigkeit: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Beschreiben sie, seit wann sie diese Beschwerden haben:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Seit wann kennen sie diese Beschwerden?',
		name: '7',
		options: [
			'seit ca. einer Woche', 
			'seit mehreren Wochen', 
			'seit Monaten', 
			'seit Jahren',
			'anderes'
		],
		template: 'Bekannt: ',
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
		label: 'Haben diese Beschwerden in letzter Zeit an Häufigkeit zugenommen?',
		name: '8',
		options: [
			'nein',
			'ja, deutlich häufiger',
			'ja, etwas häufiger',
			'die Beschwerden sind immer mehr oder weniger immer da.'
		],
		template: 'Zunahme: ',
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
		label: 'Wie lange halten die Beschwerden an?',
		name: '9',
		options: [
			'Sekunden',
			'Minuten',
			'ca. 10 - 15 min',
			'ca. eine halbe bis eine Stunde',
			'Stunden',
			'Die Beschwerden sind immer mehr oder weniger immer da'
		],
		template: 'Dauer: ',
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
		label: 'Kommen die Beschwerden am Anfang der Belastung und verschwinden dann bei weiterer Anstrengung wieder?',
		name: '10',
		options: [
			'ja',
			'nein'
		],
		template: 'Beschwerden kommen am Anfang der Belastung und verschwinden dann wieder:',
		type: RadioGroup,
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
		label: 'Reagieren die Beschwerden auf Nitro-Spray oder Kapseln?',
		name: '11',
		options: [
			'ja', 
			'nein', 
			'habe ich noch nicht probiert'
		],
		template: 'Reaktion auf Nitro-Spray oder Kapseln: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: '',
				placeholder: '',
				questions: null,
				type: null,
				value: ''
			}
		],
		label: 'Hatten Sie diese Beschwerden schon vorher einmal für einen gewissen Zeitraum und sind sie dann wieder einen längeren Zeitraum verschwunden?',
		name: '12',
		options: [
			'ja',
			'nein'
		],
		template: 'Schon mal aufgetreten und dann länger wieder verschwunden: ',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja, durch eine andere Massnahme',
				placeholder: 'Welche Massnahme oder welcher Eingriff war das?',
				questions: null,
				template: ': ',
				type: FreeText,
				value: ''
			}
		],
		label: 'Sind die Beschwerden zuvor durch einen Eingriff oder Massnahme wieder verschwunden?',
		name: '13',
		options: [
				'nein',
				'ja, durch einen Stent',
				'ja, durch eine Bypass-Operation',
				'ja, durch Medikamente',
				'ja, durch eine andere Massnahme'
		],
		template: 'Beschwerden durch Massnahme verschwunden: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie, wann die Beschwerden zuletzt auftraten:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wann traten diese Beschwerden zuletzt auf?',
		name: '14',
		options: [
			'heute', 
			'gestern', 
			'vor ein paar Tagen', 
			'vor einer Woche', 
			'vor Monaten',
			'anderes'
		],
		template: 'Zuletzt aufgetreten: ',
		type: SelectGroup,
		value: ''
	}
];