<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import ChapterOpener from '$lib/inputs/ChapterOpener.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';

	let prevPage: string = '2-0';

	let nextPartPage: string;
	let nextChapterPage: string;
	let openerGroup: string;
</script>

<Exit />

<h2 class="font-medium">Haben Sie "Herzklopfen"?</h2>

<p>"Herzklopfen" bezeichnet die Erfahrung, dass das Herz ungewöhnlich stark klopft</p>

<ChapterOpener bind:openerGroup={$answers.answer3_0} nextPartPage="3-1" nextChapterPage="4-0" />

<StepsButtons {prevPage} nextPage={$answers.answer3_0} />
