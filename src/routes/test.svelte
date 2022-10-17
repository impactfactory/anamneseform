<script>
	import CheckboxField from '$lib/CheckboxField.svelte';
	import CheckboxList from '$lib/inputs/CheckboxList.svelte';
	import MultiSelect from '$lib/inputs/MultiSelect.svelte';
	import TextField from '$lib/inputs/TextField.svelte';

	const app = {
		favicon: '/assets/favicon.svg',
		name: 'Ihre Online-Anamnese',
		routes: {
			index: '/index',
			config: '/symptome',
			questions: 'questions',
			generator: '/zusammenfassung'
		}
	};

	const fields = [
		app,
        selectedChapters: '',
        chapters: [{
            name: 'Herzrasen'
        }, {name: 'Brustschmerzen'}, {
            name: 'Schwindel'
        },],
		{ cmp: TextField, value: 'a', template: () => 'text b', disabled: false },
		{ cmp: CheckboxList, value: [], options: [1, 2, 3], template: () => '' },
		{
			cmp: CheckboxField,
			value: true,
			template: (value) => (value ? 'sie sind tot' : 'sie leben')
		}
	];
</script>

<h1>test</h1>
{JSON.stringify(fields)}
{#each fields as field}
	<div>
		<svelte:component this={field.cmp} bind:value={field.value} {...field} />
	</div>
{/each}

{#each fields as field}
	<div>
		{field.value}
		{field.template(field.value)}
	</div>
{/each}
