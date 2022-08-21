<script lang="ts">
	import TextArea from '$lib/inputs/TextArea.svelte';

	export let question = [] as any[];
	//export let chapters = [] as any[];
	let selected = false;
	export let freeanswertext;
	export let id = question.id;
	export let placeholder = question.freetextplaceholder;
</script>

<fieldset class="radiogroup w-full">
	<legend class="pb-2 pt-3 text-sm font-semibold">{question.label}</legend>
	{#each question.radios as radio}
		<div class="form-control">
			{#if radio.freeanswer == '1'}
				<label for="{question.id}{radio.id}">
					<input
						type="radio"
						class="radio radio-sm"
						name={question.id}
						id="{question.id}{radio.id}"
						bind:group={question.name}
						value={radio.value}
						on:click={() => (selected = true)}
					/>
					<span class="label-text pl-4">{radio.value}</span>
				</label>
				{#if selected}
					<TextArea bind:freeanswertext {id} {placeholder} />
				{/if}
			{:else}
				<label for="{question.id}{radio.id}">
					<input
						type="radio"
						class="radio radio-sm"
						name={question.id}
						id="{question.id}{radio.id}"
						value={radio.value}
						on:click={() => (selected = false)}
					/>
					<span class="label-text pl-4">{radio.value}</span>
				</label>
			{/if}
		</div>
	{/each}
</fieldset>

<style>
	label span {
		position: relative;
		top: -5px;
	}
</style>
