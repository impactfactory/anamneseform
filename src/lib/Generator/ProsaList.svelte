<script lang="ts">
	export let value: any[];
	let item: string;
	let freeTextKey = 'anderes';
</script>

{#each value as item, i}
	{#if i == value.length - 2}
		{item} und&nbsp;
	{:else if i == value.length - 1}
		{item}{value.includes(freeTextKey) ? ':' : '.'}
	{:else}
		{item},&nbsp;
	{/if}
{/each}
