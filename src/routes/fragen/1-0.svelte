<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import ChapterOpener from '$lib/inputs/ChapterOpener.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { fade } from 'svelte/transition';
	import { answers } from '$lib/stores';

	let prevPage: string = '/';

	let nextPartPage: string;
	let nextChapterPage: string;
	let openerGroup: string;
</script>

<Exit />

<h2 class="font-medium">Haben Sie "Herzrasen"?</h2>
<div in:fade={{ duration: 1000 }}>
	<p>
		"Herzrasen" bezeichnet die Erfahrung, dass das Herz ohne körperliche Anstrengung zu schnell
		schlägt. Nicht selten wird Herzrasen von Symptomen wie Schwindelgefühl, Unruhe oder einem Druck
		auf der Brust begleitet.
	</p>

	<ChapterOpener bind:openerGroup={$answers.answer1_0} nextPartPage="1-1" nextChapterPage="2-0" />
</div>
<StepsButtons {prevPage} nextPage={$answers.answer1_0} />
