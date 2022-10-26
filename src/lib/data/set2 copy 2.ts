
import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';

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
		template: null,
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
		name: '2',
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
		template: null,
		type: CheckboxGroup,
		value: ''
	}
];

