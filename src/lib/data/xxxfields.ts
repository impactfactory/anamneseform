import CheckboxField from '$lib/inputs/CheckboxField.svelte';
import CheckboxList from '$lib/inputs/CheckboxList.svelte';
import MultiSelect from '$lib/inputs/MultiSelect.svelte';
import TextField from '$lib/inputs/TextField.svelte';

export const fields = [
	{ cmp: TextField, value: 'a', template: () => 'text b', disabled: false },
	{ cmp: CheckboxList, value: [], options: [1, 2, 3], template: () => '' },
	{
		cmp: CheckboxField,
		value: true,
		template: (value) => (value ? 'sie sind tot' : 'sie leben')
	}
];
