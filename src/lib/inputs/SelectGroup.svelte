<script lang="ts">
	import { answers } from '$lib/stores';
	export let selectLabel: string = '';
	export let selectOptions: string[];
	export let selectPlaceholder: string = '';
	export let selectValue: string;
	export let selectCustomText: string;
	export let selectName: string;
	export let selectHasCustom: boolean;
</script>

<fieldset class="selectgroup">
	<div class="form-control">
		<label for="slct{selectName}" class="label">
			<span class="label-text">{selectLabel}</span>
		</label>
		<select name="slct{selectName}" class="select" bind:value={selectValue}>
			<option value="" disabled>Bitte wählen Sie...</option>
			{#each selectOptions as option}
				<option>{option}</option>
			{/each}
			{#if selectHasCustom}
				<option value="custom">anderes</option>
			{/if}
		</select>
	</div>

	{#if selectValue == 'custom'}
		<textarea class="textarea" bind:value={selectCustomText} placeholder={selectPlaceholder} />
	{/if}
</fieldset>
