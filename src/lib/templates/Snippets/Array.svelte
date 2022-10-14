<script lang="ts">
	export let value: string[];
	let item: string;
</script>

{#each value as item, i}
	{#if i == value.length - 2}
		{item} und&nbsp;
	{:else if i == value.length - 1}
		{item}
	{:else}
		{item},&nbsp;
	{/if}
{/each}
