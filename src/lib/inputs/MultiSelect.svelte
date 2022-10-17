<script lang="ts">
	export let options = [] as any[];
	//let options = ['1', '2', '3'];
	export let value = [] as any[];
</script>

<select bind:value multiple>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>
