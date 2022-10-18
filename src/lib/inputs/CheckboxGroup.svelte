<script lang="ts">
	export let conditions: any[];
	//export let conditionAnswer: string;
	export let label: string;
	export let options = [] as string[];
	export let placeholder: string;
	export let value = [] as string[];
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

	{#each conditions as condition}
		{#if value.includes(condition.key)}
			<svelte:component this={condition.component} bind:value={condition.value} {placeholder} />
		{/if}
	{/each}
</fieldset>

<!--
	<FreeText bind:value={freeText} {placeholder} />
-->
