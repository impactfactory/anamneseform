<script>
	import { page } from '$app/stores';
	import Forms from '$lib/Forms.svelte';
	import { getChapters } from '$lib/data';

	let chapters = getChapters($page.url.searchParams);
</script>

<Forms {chapters} />
