<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import ChapterOpener from '$lib/inputs/ChapterOpener.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';

	let prevPage: string = '';

	let nextPartPage: string;
	let nextChapterPage: string;
	let openerGroup: string;

	if ($answers.answer4_0 == '4-1') {
		prevPage = '4-3';
	}
	if ($answers.answer4_0 == '5-0') {
		prevPage = '4-0';
	}
</script>

<Exit />
<div in:fade={{ duration: 1000 }}>
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
</div>
<StepsButtons {prevPage} nextPage={$answers.answer5_0} />
