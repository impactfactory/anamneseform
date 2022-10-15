<script lang="ts">
	import { answers } from '$lib/stores';
	import CheckboxGroup from './inputs/CheckboxGroup.svelte';
	import RadioGroup from './inputs/RadioGroup.svelte';
	import RadioTriple from './inputs/RadioTriple.svelte';
	import SelectGroup from './inputs/SelectGroup.svelte';
	import Textarea from './inputs/Textarea.svelte';

	export let q: any;
	let x: string;
</script>

{#if q.type == 'RadioGroup'}
	<RadioGroup {q} bind:radioGroup={x} bind:radioCustomText={x} />
{:else if q.type == 'SelectGroup'}
	<SelectGroup {q} bind:selectValue={$answers.answers1} bind:selectCustomText={x} />
{/if}
