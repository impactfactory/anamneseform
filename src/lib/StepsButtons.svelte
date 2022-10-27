<script lang="ts">
	export let state: string;
	export let backButton: string;
	export let nextButton: string;
	export let startChapter = 0;
	export let endChapter = 1;
	export let start = 0;
	export let end = 2;

	function showConfig() {
		state = 'config';
		start = 0;
		end = 2;
		startChapter = '';
		endChapter = '';
	}
	function showGenerator() {
		state = 'generator';
	}

	function showIntro() {
		state = 'intro';
	}

	function showQuestions() {
		state = 'questions';
		start = 0;
		end = 2;
		startChapter = '';
		endChapter = '';
	}

	function showRisks() {
		state = 'risks';
	}

	function lastRisks() {
		state = 'questions';
		start = '10';
		end = '12';
	}

	//Risks and Questions Navi

	function nextChapter(x: number, y: number) {
		start = 0;
		end = 2;
		startChapter = x + 1;
		endChapter = y + 1;
	}

	function nextQuestions(x: number, y: number) {
		start = x + 2;
		end = y + 2;
	}

	function lastQuestions(x: number, y: number) {
		start = x - 2;
		end = y - 2;
	}
</script>

<div class="pt-3">
	{#if state == 'intro'}
		<button class="btn btn-primary" on:click={showConfig}>weiter</button>
		<!-- Config -->
	{:else if state == 'config'}
		<button class="btn btn-primary" on:click={showIntro}>zurück</button>
		<button class="btn btn-primary" on:click={showQuestions}>weiter</button>
		<!-- Questions -->
	{:else if state == 'questions'}
		<button class="btn btn-primary" on:click={showConfig}>Anfang</button>
		{#if backButton == 'show'}
			<button class="btn btn-primary" on:click={lastQuestions(start, end)}>zurück</button>
		{/if}
		{#if nextButton == 'nextChapter'}
			<button class="btn btn-primary" on:click={nextChapter(startChapter, endChapter)}
				>weiter (K)</button
			>
		{:else if nextButton == 'showRisks'}
			<button class="btn btn-primary" on:click={showRisks}>weiter (R)</button>
		{:else if nextButton == 'nextQuestions'}
			<button class="btn btn-primary" on:click={nextQuestions(start, end)}>weiter (F)</button>
		{/if}

		<!--<button class="btn btn-primary" on:click={nextChapter(startChapter, endChapter)}
			>nächstes Kapitel</button
		>
		<button class="btn btn-primary" on:click={showGenerator}>Zusammenfassung</button>-->
		<!-- Risks -->
	{:else if state == 'risks'}
		<button class="btn btn-primary" on:click={showConfig}>Anfang</button>
		{#if backButton == 'show'}
			<button class="btn btn-primary" on:click={lastQuestions(start, end)}>zurück (R)</button>
		{:else if backButton == 'lastQuestions'}
			<button class="btn btn-primary" on:click={showQuestions}>zurück (F)</button>
		{/if}
		{#if nextButton == 'nextChapter'}
			<button class="btn btn-primary" on:click={showGenerator}>weiter (Z)</button>
		{:else if nextButton == 'nextQuestions'}
			<button class="btn btn-primary" on:click={nextQuestions(start, end)}>weiter (R)</button>
		{/if}
	{:else if state == 'generator'}
		<button class="btn btn-primary" on:click={showConfig}>Anfang</button>
		<button class="btn btn-primary" on:click={showRisks}>zurück</button>
	{/if}
</div>

<div class="pt-4">
	DevLinks: <a href="" on:click={showGenerator}>State Generator</a> |
	<a href="" on:click={showRisks}>State Risks</a>
</div>
