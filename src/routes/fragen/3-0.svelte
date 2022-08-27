<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import ChapterOpener from '$lib/inputs/ChapterOpener.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';

	let prevPage: string = '';

	let nextPartPage: string;
	let nextChapterPage: string;
	let openerGroup: string;

	if ($answers.answer2_0 == '2-1') {
		prevPage = '2-3';
	}
	if ($answers.answer2_0 == '3-0') {
		prevPage = '2-0';
	}
</script>

<Exit />
<div in:fade={{ duration: 1500 }}>
	<h2 class="font-medium">Haben Sie "Herzklopfen"?</h2>

	<p>"Herzklopfen" bezeichnet die Erfahrung, dass das Herz ungewöhnlich stark klopft</p>

	<ChapterOpener bind:openerGroup={$answers.answer3_0} nextPartPage="3-1" nextChapterPage="4-0" />
</div>
<StepsButtons {prevPage} nextPage={$answers.answer3_0} />
