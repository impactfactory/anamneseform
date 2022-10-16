<script lang="ts">
	import { answers } from '$lib/data/stores';

	export let radioLabel: string = '';
	export let radioPlaceholder: string = '';
	export let radioGroup: string;
	export let radioCustomText: string;
	export let radioHasCustom: boolean;
</script>

<fieldset class="radiogroup">
	<legend>{radioLabel}</legend>
	<div class="form-control">
		<label>
			<input type="radio" class="radio radio-sm" bind:group={radioGroup} value="ja" />
			<span class="label-text">ja</span>
		</label>
	</div>
	<div class="form-control">
		<label>
			<input type="radio" class="radio radio-sm" bind:group={radioGroup} value="nein" />
			<span class="label-text">nein</span>
		</label>
	</div>
	<div class="form-control">
		<label>
			<input type="radio" class="radio radio-sm" bind:group={radioGroup} value="fraglich" />
			<span class="label-text">fraglich</span>
		</label>
	</div>
	{#if radioHasCustom}
		{#if radioGroup == 'ja'}
			<textarea class="textarea" bind:value={radioCustomText} placeholder={radioPlaceholder} />
		{/if}
	{/if}
</fieldset>
