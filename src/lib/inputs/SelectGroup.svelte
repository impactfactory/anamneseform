<script lang="ts">
	import FreeText from './FreeText.svelte';

	export let freeText: string;
	export let name: string;
	export let label: string;
	export let options: any[];
	export let placeholder: string;
	export let value: string;
	export let hasFreetext: boolean;
</script>

<fieldset class="selectgroup">
	<div class="form-control">
		<label for="slct{name}" class="label">
			<span class="label-text">{label}</span>
		</label>
		<select name="slct{name}" class="select" bind:value>
			<option value="" disabled>Bitte wählen Sie...</option>
			{#each options as option}
				<option>{option}</option>
			{/each}
			{#if hasFreetext}
				<option value="freetext">anderes</option>
			{/if}
		</select>
	</div>

	{#if value == 'freetext'}
		<FreeText bind:value={freeText} {placeholder} />
	{/if}
</fieldset>
