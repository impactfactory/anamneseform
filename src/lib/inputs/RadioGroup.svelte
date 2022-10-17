<script lang="ts">
	import FreeText from './FreeText.svelte';
	export let condition: string;
	export let freeText: string;
	export let label: string;
	export let options = [] as string[];
	export let placeholder: string;
	export let value: string;
</script>

<fieldset class="radiogroup">
	<legend>{label}</legend>
	{#each options as option}
		<div class="form-control">
			<label>
				<input type="radio" class="radio radio-sm" bind:group={value} value={option} />
				<span class="label-text">{option}</span>
			</label>
		</div>
	{/each}

	{#if value == condition}
		<FreeText bind:value={freeText} {placeholder} />
	{/if}
</fieldset>
