<script lang="ts">
	import Switch from '$lib/Switch.svelte';
	import Questions from '$lib/Questions.svelte';

	export let chapters = [] as any[];
	export let freeanswertext = '';
</script>

<form class="pt-4 pb-4" action="/api/send" method="POST">
	{#each chapters as chapter}
		<Switch bind:enabled={chapter.enabled} label={chapter.label} />

		{#if chapter.enabled}
			<Questions {chapter} bind:freeanswertext />
		{/if}
	{/each}

	<pre>freeanswertext aus Form.svelte: {freeanswertext}<br /></pre>
</form>
