<script lang="ts">
	export let radioGroup: string;
	export let radioCustomText: string;

	export let value: any;
</script>

<fieldset class="radiogroup">
	<legend>{q.label}</legend>
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
	{#if q.hasCustom}
		{#if radioGroup == 'ja'}
			<textarea class="textarea" bind:value={radioCustomText} placeholder={q.placeholder} />
		{/if}
	{/if}
</fieldset>
