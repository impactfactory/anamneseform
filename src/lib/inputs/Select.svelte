<script lang="ts">
	import TextArea from '$lib/inputs/TextArea.svelte';

	export let question = [] as any[];
	let selected = 'empty';
	//export let freeanswertext;
	export let id = question.id;
	export let placeholder = question.freetextplaceholder;
</script>

<fieldset class="py-2 w-full">
	<div class="form-control">
		<label for={question.id} class="label font-semibold">
			<span class="label-text">{question.label}</span>
		</label>
		<select id={question.id} class="select select-bordered select-sm w-100" bind:value={selected}>
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
	</div>

	{#if selected === 'freetext'}
		<TextArea {id} {placeholder} />
	{/if}
</fieldset>

<!-- für Debugging
<pre>selected = {selected}<br />
	freeanswertext aus select.svelte: {freeanswertext}
</pre>
-->
<style>
	.select {
		font-weight: 400;
	}
</style>
