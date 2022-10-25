
import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';
//import RadioGroup from '$lib/inputs/RadioGroup.svelte';
//import SelectGroup from '$lib/inputs/SelectGroup.svelte';
//import TextArea from '$lib/inputs/TextArea.svelte';


export const set2 = [
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Beschreiben Sie bitte die Art der Beschwerden:',
				questions: null,
				type: FreeText,
				value: null
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
		value: null
	},
	{
		conditions: [
			{
				key: 'anderes',
				placeholder: 'Beschreiben Sie bitte die Lokalisation der Beschwerden:',
				questions: null,
				type: FreeText,
				value: null
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
		value: null
	}
];

