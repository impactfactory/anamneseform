<script lang="ts">
	export let conditions: any[];
	export let label: string;
	export let options = [] as string[];
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

	{#each conditions as condition}
		{#if value == condition.key}
			<svelte:component this={condition.type} bind:value={condition.value} {...condition} />
		{/if}
	{/each}
</fieldset>
