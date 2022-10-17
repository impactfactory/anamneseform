<script lang="ts">
	import FreeText from './FreeText.svelte';

	export let freeText: string;
	export let label: string;
	export let options = [] as string[];
	export let placeholder: string;
	export let value = [] as string[];
	export let hasFreetext: boolean;
</script>

<fieldset class="checkboxgroup">
	<legend>{label}</legend>
	{#each options as option}
		<div class="form-control">
			<label class="cursor-pointer">
				<input type="checkbox" class="checkbox checkbox-sm" bind:group={value} value={option} />
				<span class="label-text">{option}</span>
			</label>
		</div>
	{/each}

	{#if hasFreetext}
		<div class="form-control">
			<label class="cursor-pointer">
				<input type="checkbox" class="checkbox checkbox-sm" bind:group={value} value="freetext" />
				<span class="label-text">anders</span>
			</label>
		</div>
	{/if}

	{#if value.includes('freetext')}
		<FreeText bind:value={freeText} {placeholder} />
	{/if}
</fieldset>
