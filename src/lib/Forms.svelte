<script lang="ts">
	import Switch from '$lib/Switch.svelte';
	import Questions from '$lib/Questions.svelte';

	export let chapters = [] as any[];
	export let freeanswertext = '';
</script>

<form class="pt-10" action="/api/send" method="POST">
	{#each chapters as chapter}
		<div>
			<Switch bind:enabled={chapter.enabled} label={chapter.label} />
		</div>
		{#if chapter.enabled}
			<Questions {chapter} bind:freeanswertext />
		{/if}
	{/each}
</form>

freeanswertext aus Form.svelte: {freeanswertext}<br />
