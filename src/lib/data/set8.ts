import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';


export const set8 = [
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Bitte beschreiben Sie, seit wann Ihre körperliche Leistungsfähigkeit abnimmt:',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Seit wann hat Ihre körperliche Leistungsfähigkeit nachgelassen?',
		name: '1',
		options: [
			'seit letzter Woche', 'seit letztem Monat', 'seit letztem Jahr', 'seit Jahren',
			'anderes'
		],
		template: 'Abnahme: ',
		type: SelectGroup,
		value: ''
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Welche?',
				questions: null,
				type: FreeText,
				value: ''
			}
		],
		label: 'Haben sie begleitende Symptome während den Leistungsschwächen?',
		name: '2',
		options: [
			'Müdigkeit',
			'Atemnot',
			'kalte Extremitäten',
			'Husten',
			'Rasselgeräusche beim Atmen',
			'nächtlicher Harndrang',
			'Schwindel',
			'anderes'
		],
		template: 'Begleitende Symptome: ',
		type: CheckboxGroup,
		value: ''
	}
];
