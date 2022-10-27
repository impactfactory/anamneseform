import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';
import RadioGroup from '$lib/inputs/RadioGroup.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';
import TextArea from '$lib/inputs/TextArea.svelte';

export const risks = {
	title: 'Risiken',
	questions: [
		{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte geben Sie Ihnen bekannte Details an:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Hat jm. in Ihrer Verwandschaft Herzprobleme?',
		name: '1',
		options: [
			'ja',
			'nein',
			'unbekannt'
		],
		template: 'Herzprobleme in Verwandschaft: ',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte geben Sie Ihnen bekannte Details an:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Haben Sie Bluthochdruck?',
		name: '2',
		options: [
			'ja',
			'nein',
			'unbekannt'
		],
		template: 'Bluthochdruck: ',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte geben Sie Ihnen bekannte Details an:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Haben Sie eine Fettstoffwechselstörung (HLP)?',
		name: '3',
		options: [
			'ja',
			'nein',
			'unbekannt'
		],
		template: 'Fettstoffwechselstörung: ',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Seit wann und wieviel?',
				questions: null,
				template: 'Dauer und Menge: ',
				type: FreeText,
				value: ''
			}
		],
		label: 'Rauchen Sie?',
		name: '4',
		options: [
			'ja',
			'nein'
		],
		template: 'Rauchen: ',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte geben Sie Ihnen bekannte Details an:',
				questions: null,
				template: '',
				type: FreeText,
				value: ''
			}
		],
		label: 'Haben Sie Diabetes?',
		name: '5',
		options: [
			'ja',
			'nein',
			'unbekannt'
		],
		template: 'Diabetes: ',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte geben Sie Ihnen bekannte Details an:',
				questions: null,
				template: '',
				type: FreeText,
				value: ''
			}
		],
		label: 'Haben Sie Adipositas?',
		name: '6',
		options: [
			'ja',
			'nein',
			'unbekannt'
		],
		template: 'Diabetes: ',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte geben Sie Ihnen bekannte Details an:',
				questions: null,
				template: '',
				type: FreeText,
				value: ''
			}
		],
		label: 'Haben Sie Bewegungsmangel?',
		name: '7',
		options: [
			'ja',
			'nein',
			'unbekannt'
		],
		template: 'Bewegungsmangel: ',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte geben Sie Ihnen bekannte Details an:',
				questions: null,
				template: '',
				type: FreeText,
				value: ''
			}
		],
		label: 'Haben Sie Schlaf-Apnoe?',
		name: '8',
		options: [
			'ja',
			'nein',
			'unbekannt'
		],
		template: 'Schlaf-Apnoe: ',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte geben Sie Ihnen bekannte Details an:',
				questions: null,
				template: '',
				type: FreeText,
				value: ''
			}
		],
		label: 'Haben Sie Stress?',
		name: '9',
		options: [
			'ja',
			'nein',
			'unbekannt'
		],
		template: 'Stress: ',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte geben Sie Ihnen bekannte Details an:',
				questions: null,
				template: '',
				type: FreeText,
				value: ''
			}
		],
		label: 'Haben Sie Rheuma?',
		name: '10',
		options: [
			'ja',
			'nein',
			'unbekannt'
		],
		template: 'Rheuma: ',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte geben Sie Ihnen bekannte Details an:',
				questions: null,
				template: '',
				type: FreeText,
				value: ''
			}
		],
		label: 'Haben Sie eine Niereninsuffizienz?',
		name: '11',
		options: [
			'ja',
			'nein',
			'unbekannt'
		],
		template: 'Niereninsuffizienz: ',
		type: RadioGroup,
		value: ''
	}
	]
};
