<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import ChapterOpener from '$lib/inputs/ChapterOpener.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';

	let prevPage: string = '1-3';

	let nextPartPage: string;
	let nextChapterPage: string;
	let openerGroup: string;
</script>

<Exit />

<h2 class="font-medium">Haben Sie "Herzstolpern"?</h2>

<p>
	"Herzstolpern" bezeichnet die Erfahrung, dass der Herzschlag zu früh schlägt oder pausiert und
	dann heftiger klopft. Beklommenheitsgefühl, Angst- oder Panikzustände und Schweißausbrüche können
	Begleiterscheinungen sein.
</p>

<ChapterOpener bind:openerGroup={$answers.answer2_0} nextPartPage="2-1" nextChapterPage="3-0" />

<StepsButtons {prevPage} nextPage={$answers.answer2_0} />
