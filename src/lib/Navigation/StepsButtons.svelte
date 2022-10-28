<script lang="ts">
	/* geht nicht
	import {
		showConfig,
		showGenerator,
		showIntro,
		showQuestions,
		showRisks,
		nextChapter,
		nextQuestions,
		lastQuestions
	} from '$lib/Navigation/functions'; */
	export let backButton: string;
	export let chaptersGrouping: number;
	export let end = 2;
	export let endChapter = 1;
	export let nextButton: string;
	export let memory: '';
	export let questionsGrouping: number;
	export let selectedChapters: string[];
	export let start = 0;
	export let startChapter = 0;
	export let state: string;

	/* -- Simple States Togglers --------------------------------------------- */
	function showConfig() {
		state = 'config';
		end = questionsGrouping;
		start = end - questionsGrouping;
		endChapter = chaptersGrouping;
		startChapter = endChapter - startChapter;
	}
	function showGenerator() {
		state = 'generator';
	}

	function showIntro() {
		state = 'intro';
	}

	function showRisks() {
		state = 'risks';
	}

	function showQuestions() {
		state = 'questions';
		start = 0;
		end = questionsGrouping;
		startChapter = 0;
		endChapter = chaptersGrouping;
	}

	/* -- Risks and Questions Navigation / Backwards - Forwards ---------- */

	function lastChaptersEnd(x: number, y: number) {
		startChapter = x - chaptersGrouping;
		endChapter = y - chaptersGrouping;
		memory = 'cameBackwards';
	}

	function nextChapter(x: number, y: number) {
		start = 0;
		end = questionsGrouping;
		startChapter = x + chaptersGrouping;
		endChapter = y + chaptersGrouping;
	}

	function nextQuestions(x: number, y: number) {
		start = x + questionsGrouping;
		end = y + questionsGrouping;
	}

	function lastQuestions(x: number, y: number) {
		start = x - questionsGrouping;
		end = y - questionsGrouping;
	}

	/* -- Risks Navigation / Backwards to the last Chapters Questions Slice ---------- */

	function lastChaptersEndFromRisks() {
		state = 'questions';
		endChapter = selectedChapters.length;
		memory = 'cameBackwards';
		startChapter = selectedChapters.length - chaptersGrouping;
	}

	/* -- Generator Navigation / Backwards to last Risks Slice ---------- */

	function showLastRisksSlice() {
		state = 'risks';
		endChapter = risks.questions.length;
		memory = 'cameBackwards';
		startChapter = risks.questions.length - chaptersGrouping;
	}
</script>

<div class="pt-3">
	{#if state == 'intro'}
		<button class="btn btn-primary" on:click={showConfig}>weiter</button>
		<!-- Config --------------------------------------------------------->
	{:else if state == 'config'}
		<button class="btn btn-primary" on:click={showIntro}>zurück</button>
		<button class="btn btn-primary" on:click={showQuestions}>weiter</button>
		<!---->
		<!-- Questions ------------------------------------------------------->
		<!---->
	{:else if state == 'questions'}
		<!-- Start Again Button -->
		<button class="btn btn-primary" on:click={showConfig}>Anfang</button>
		<!-- Back Button -->
		{#if backButton == 'show'}
			<button class="btn btn-primary" on:click={lastQuestions(start, end)}>zurück</button>
		{:else if backButton == 'lastChaptersEnd'}
			<button class="btn btn-primary" on:click={lastChaptersEnd(startChapter, endChapter)}
				>zurück (F-1)</button
			>
		{/if}
		<!-- Forward Button-->
		{#if nextButton == 'nextQuestions'}
			<button class="btn btn-primary" on:click={nextQuestions(start, end)}>weiter (F)</button>
		{:else if nextButton == 'nextChapter'}
			<button class="btn btn-primary" on:click={nextChapter(startChapter, endChapter)}
				>weiter (K)</button
			>
		{:else if nextButton == 'showRisks'}
			<button class="btn btn-primary" on:click={showRisks}>weiter (R)</button>
		{/if}
		<!---->
		<!-- Risks --------------------------------------------------------->
		<!---->
	{:else if state == 'risks'}
		<button class="btn btn-primary" on:click={showConfig}>Anfang</button>
		{#if backButton == 'showLastRisks'}
			<button class="btn btn-primary" on:click={lastQuestions(start, end)}>zurück (R)</button>
		{:else if backButton == 'showLastChaptersEnd'}
			<button class="btn btn-primary" on:click={lastChaptersEndFromRisks}>zurück (F)</button>
		{/if}
		{#if nextButton == 'showGenerator'}
			<button class="btn btn-primary" on:click={showGenerator}>weiter (Z)</button>
		{:else if nextButton == 'nextQuestions'}
			<button class="btn btn-primary" on:click={nextQuestions(start, end)}>weiter (R)</button>
		{/if}
		<!-- -->
		<!-- Generator ------------------------------------------------------>
		<!---->
	{:else if state == 'generator'}
		<button class="btn btn-primary" on:click={showConfig}>Anfang</button>
		<button class="btn btn-primary" on:click={showLastRisksSlice}>zurück (R)</button>
	{/if}
</div>

<div class="pt-4">
	DevLinks: <u on:click={showGenerator}>State Generator</u>
	|
	<u on:click={showRisks}>State Risks</u>
</div>
