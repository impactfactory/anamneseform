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

	{#each conditions as condition (condition.name)}
		{#if value == condition.key}
			<svelte:component this={condition.type} bind:value={condition.value} {...condition} />
			<!-- {condition.label}  funktioniert bei kapitel 3 wie gewünscht, <svelte:component /> hingegen nicht. Wird nur einmal ausgegeben statt 3x-->
		{/if}
	{/each}
</fieldset>
