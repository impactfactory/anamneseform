<script lang="ts">
	import { page } from '$app/stores';

	import { getChapters } from '$lib/data'; // oder im Form importiert?
	import Title from '$lib/Title.svelte';
	import Switch from '$lib/Switch.svelte'; // oder direkt im Form eingebaut?
	import Forms from '$lib/Forms.svelte';

	let chapters = getChapters($page.url.searchParams);
</script>

<Title title="Anamnese-Formular" />

<p class="prose">
	Bitte füllen Sie dieses Formular vor Ihrem ersten Besuch aus. Wir freuen uns Sie bald zu sehen.
</p>

<Forms {chapters} />

<!-- Plan

- Titel
- Formular
- - Chapters
- - - Questions
- - - - Inputs
- Action-Buttons

-->
