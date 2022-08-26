<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import ChapterOpener from '$lib/inputs/ChapterOpener.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	let prevPage: string = '3-0';

	let nextPartPage: string;
	let nextChapterPage: string;
	let openerGroup: string;
</script>

<Exit />

<h2 class="font-medium">Haben Sie unregelmässigen Herzschlag?</h2>

<p>"Herzrhythmus-Störungen" bezeichnet die Erfahrung, dass....</p>

<ChapterOpener bind:openerGroup={$answers.answer4_0} nextPartPage="4-1" nextChapterPage="5-0" />

<StepsButtons {prevPage} nextPage={$answers.answer4_0} />
