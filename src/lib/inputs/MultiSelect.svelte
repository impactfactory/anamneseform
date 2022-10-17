<script lang="ts">
	export let options = [] as any[];
	export let value = [] as any[];
</script>

<select bind:value multiple>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>
