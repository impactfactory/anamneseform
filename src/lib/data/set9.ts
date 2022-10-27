import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';
import Number from '$lib/inputs/Number.svelte';
import RadioGroup from '$lib/inputs/RadioGroup.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';
import TextField from '$lib/inputs/TextField.svelte';

export const set9 = [
{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie, seit wann Sie es haben:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Seit wann haben Sie das Ödem?',
		name: '1',
		options: [
			'seit letzter Woche', 'seit letztem Monat', 'seit letztem Jahr', 'seit Jahren',
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
				placeholder: 'Bitte geben Sie den Körperteil an',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Was ist geschwollen?',
		name: '2',
		options: [
			'das linke Bein', 
			'das rechte Bein', 
			'der linke Fuss', 
			'der rechte Fuss',
			'anderes'
		],
		template: 'Körperteil: ',
		type: CheckboxGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'itte beschreiben Sie, wann das Ödem auftritt:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wann tritt das Ödem auf?',
		name: '3',
		options: [
			'immer an heissen Tagen', 'gelegentlich an heissen Tagen', 'xx', 'x',
			'anderes'
		],
		template: 'Auftreten: ',
		type: CheckboxGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'ja',
				placeholder: 'Bitte beschreiben Sie wann und wie behandelt:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Hatten Sie eine Beinvenen-Thrombose?',
		name: '1',
		options: [
			'ja',
			'nein',
			'ich weiss nicht'
		],
		template: 'Beinvenen-Thrombose',
		type: RadioGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie, wie es sich entwickelt hat:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Wie hat sich Ihr Ödem entwickelt?',
		name: '1',
		options: [
			'plötzlich', 'langsam zunehmend', 'ich weiss nicht',
			'anderes'
		],
		template: 'Entwicklung',
		type: SelectGroup,
		value: ''
	}
];
