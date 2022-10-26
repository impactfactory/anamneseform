import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
import FreeText from '$lib/inputs/FreeText.svelte';
import Number from '$lib/inputs/Number.svelte';
import RadioGroup from '$lib/inputs/RadioGroup.svelte';
import SelectGroup from '$lib/inputs/SelectGroup.svelte';
import TextField from '$lib/inputs/TextField.svelte';

export const set4 = [
	{
		conditions: [
			{
				key: 'überhaupt',
				placeholder: 'Behaupten Sie was',
				questions: '',
				type: FreeText,
				value: ''
			}
		],
		label: 'eine Frage',
		name: '1',
		options: [
			'ja',
			'nein',
			'überhaupt'
		],
		template: '',
		type: CheckboxGroup,
		value: ''
	}
];
