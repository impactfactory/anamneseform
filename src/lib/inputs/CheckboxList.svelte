<script lang="ts">
	export let value = [] as boolean[];
	export let options = [] as string[];
</script>

{#each options as option}
	<label>
		{option}
		<input type="checkbox" bind:group={value} value={option} />
	</label>
{/each}
