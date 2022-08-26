<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import ChapterOpener from '$lib/inputs/ChapterOpener.svelte';
	import { answers } from '$lib/stores';

	let prevPage: string = '/fragen/4-0';

	let nextPartPage: string;
	let nextChapterPage: string;
	let openerGroup: string;
</script>

<Exit />

<h2 class="font-medium">Haben Sie etwas anderes?</h2>

<p>
	Falls alles nicht zugetroffen hat bisjetzt, helfen die Ihnen die folgenden Fragen, genauer zu
	spezifizieren, was Sie erfahren.
</p>

<ChapterOpener
	bind:openerGroup={$answers.answer5_0}
	nextPartPage="5-1"
	nextChapterPage="/zusammenfassung"
/>

<StepsButtons {prevPage} nextPage={$answers.answer5_0} />
