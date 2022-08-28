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

	if ($answers.answer3_0 == '3-1') {
		prevPage = '3-3';
	}
	if ($answers.answer3_0 == '4-0') {
		prevPage = '3-0';
	}
</script>

<Exit />
<div in:fade={{ duration: 1000 }}>
	<h2 class="font-medium">Haben Sie unregelmässigen Herzschlag?</h2>

	<p>"Herzrhythmus-Störungen" bezeichnet die Erfahrung, dass....</p>

	<ChapterOpener bind:openerGroup={$answers.answer4_0} nextPartPage="4-1" nextChapterPage="5-0" />
</div>
<StepsButtons {prevPage} nextPage={$answers.answer4_0} />
