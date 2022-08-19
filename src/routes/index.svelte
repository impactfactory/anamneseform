<script lang="ts">
	import { page } from '$app/stores';

	import { getChapters } from '$lib/data'; // oder im Form importiert?
	import Title from '$lib/Title.svelte';
	import Forms from '$lib/Forms.svelte';
	import CopyText from '$lib/CopyText.svelte';

	let chapters = getChapters($page.url.searchParams);
</script>

<Title title="Anamnese-Formular" />

<p class="prose">
	Bitte füllen Sie dieses Formular vor Ihrem ersten Besuch aus. Wir freuen uns Sie bald zu sehen.
</p>

<Forms {chapters} />

<CopyText {chapters} />
