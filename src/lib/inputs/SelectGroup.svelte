<script lang="ts">
	export let conditions: any[];
	export let name: string;
	export let label: string;
	export let options: any[];
	export let value: string;
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
		</select>
	</div>

	{#each conditions as condition}
		{#if value == condition.key}
			<svelte:component this={condition.type} bind:value={condition.value} {...condition} />
		{/if}
	{/each}
</fieldset>
