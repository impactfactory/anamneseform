<script lang="ts">
	//import { select_multiple_value } from 'svelte/internal';
	import TextArea from '$lib/inputs/TextArea.svelte';

	export let question = [] as any[];

	let selected = 'empty';
	let freetext = '';
	export let freeanswertext;
	export let id = question.id;
	export let placeholder = question.freetextplaceholder;
</script>

<div class="form-control w-full max-w-xs">
	<label for={question.id} class="label">
		<span class="label-text">{question.label}</span>
	</label>
	<select id={question.id} class="select select-bordered" bind:value={selected}>
		<option disabled selected value="empty">Bitte wählen Sie...</option>
		{#each question.options as option}
			{#if option.freeanswer}
				<option value="freetext">
					{option.value}
				</option>
			{:else}
				<option value={option.value}>{option.value}</option>
			{/if}
		{/each}
	</select>
	<div id="fillme{question.id}" class="pt-4" />
</div>

<br />

<br />

selected = {selected}

{#if selected === 'freetext'}
	<!--
		<textarea
		name="freetext{id}"
		class="textarea textarea-bordered w-full"
		bind:value={freeanswertext}
		{placeholder}
	/>
	-->

	<TextArea bind:freeanswertext {id} {placeholder} />
{/if}

freeanswertext aus select.svelte: {freeanswertext}
