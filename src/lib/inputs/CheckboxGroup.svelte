<script lang="ts">
	import { answers } from '$lib/stores';
	export let checkboxLabel: string = '';
	export let boxes: string[];
	export let checkboxGroup: string;
	export let checkboxHasCustom: boolean = false;
	export let custom: string;
	export let checkboxCustomText: string;
	export let checkboxPlaceholder: string;
</script>

<fieldset class="checkboxgroup">
	<legend>{checkboxLabel}</legend>
	{#each boxes as box}
		<div class="form-control">
			<label class="cursor-pointer">
				<input
					type="checkbox"
					class=" checkbox checkbox-sm"
					value={box}
					bind:group={checkboxGroup}
				/>
				<span class="label-text">{box}</span>
			</label>
		</div>
	{/each}

	{#if checkboxHasCustom}
		<div class="form-control">
			<label class="cursor-pointer">
				<input type="checkbox" class=" checkbox checkbox-sm" bind:checked={custom} />
				<span class="label-text">anderes</span>
			</label>
		</div>
	{/if}

	{#if custom}
		<textarea class="textarea" bind:value={checkboxCustomText} placeholder={checkboxPlaceholder} />
	{/if}
</fieldset>
