<script lang="ts">
	import { answers } from '$lib/stores';
	import CheckboxGroup from './inputs/CheckboxGroup.svelte';
	import RadioGroup from './inputs/RadioGroup.svelte';
	import RadioTriple from './inputs/RadioTriple.svelte';
	import SelectGroup from './inputs/SelectGroup.svelte';
	import Textarea from './inputs/Textarea.svelte';

	export let q: any;
	let x: string;

	/*	var l = $answers.length;	// get our current items list count
        let newId = answers.length + 1;
		$answers[l] = { id:$idIncrement, name: 'Another option', otherattrib: "additional note" };
*/
</script>

<!--
<a on:click={addObj}>Add an new Oject to our stores.ts</a><br /><br />



    bis hierhin funktionierts

    {#if q.type == 'RadioGroup'}
	<RadioGroup {q} bind:radioGroup={x} bind:radioCustomText={x} />
{:else if q.type == 'SelectGroup'}
	<SelectGroup {q} bind:selectValue={x} bind:selectCustomText={x} />
{/if}

-->
