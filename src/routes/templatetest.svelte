<script>
	import { page } from '$app/stores';
	import { getChapters } from '$lib/data';
	import Palpitation from '$lib/templates/Palpitation.svelte';
	let chapters = getChapters($page.url.searchParams); // wie kann ich das objekt abrufen ohne den page type?
</script>

<h1>Templating-Test</h1>

{#each chapters as chapter}
	{#if chapter.template == 'Palpitation'}
		<Palpitation />
	{/if}
{/each}
