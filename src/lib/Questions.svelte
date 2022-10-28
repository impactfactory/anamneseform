<script lang="ts">
	import { fade } from 'svelte/transition';
	import StepsButtons from '$lib/Navigation/StepsButtons.svelte';

	export let app: any[];
	export let chapters: any[];
	export let end: number;
	export let endChapter: number;
	export let memory: string;
	export let selectedChapters: any[];
	export let start: number;
	export let startChapter: number;
	export let state: string;

	let backButton: string;
	let nextButton: string;

	function BackButton(
		questionsSliceStart: number,
		chaptersSliceStart: number,
		chaptersSliceEnd: number
	) {
		if (questionsSliceStart == 0 && chaptersSliceStart == 0) {
			backButton = 'noShow';
		} else if (chaptersSliceEnd != 1 && questionsSliceStart == 0) {
			backButton = 'lastChaptersEnd';
		} else {
			backButton = 'show';
		}
	}

	function NextButton(
		chaptersLength: number,
		questionsLength: number,
		questionsSliceEnd: number,
		chaptersSliceEnd: number
	) {
		if (chaptersSliceEnd == chaptersLength && end >= questionsLength) {
			nextButton = 'showRisks';
		} else if (questionsSliceEnd >= questionsLength) {
			nextButton = 'nextChapter';
		} else {
			nextButton = 'nextQuestions';
		}
	}
	// Calculate this chapters last slice end with current questions.length
	// if someone navigated backwards to here
	// then delete memory to be able to continue back or forth as programmed for all other cases
	// only works with grouping = 2 :(
	function calc(length) {
		if (length % app.questionsGrouping == 0) {
			end = length;
		} else if (length % app.questionsGrouping == 1) {
			end = length + 1;
		} else if (length % app.questionsGrouping == 2) {
			end = app.questionsGrouping;
			console.log('Help! Grouping is not 2. Ask Einstein for mathematics code in questions:54!!!');
		}
		start = end - app.questionsGrouping;
	}

	function emptyMemory() {
		memory = 'empty';
		console.log(memory);
	}
</script>

{#if state == 'questions'}
	<div class="questions" in:fade={{ duration: 1000 }}>
		{#each chapters
			.filter((chapter) => selectedChapters.includes(chapter.name))
			.slice(startChapter, endChapter) as chapter, chaptersIteration}
			<h2>{chapter.template}{chapter.name}</h2>
			{#if chapter.questions}
				{#if memory == 'cameBackwards'}
					{calc(chapter.questions.length) || ''}
					{#each chapter.questions.slice(start, end) as q, i}
						<svelte:component this={q.type} bind:value={q.value} {...q} />
						{BackButton(start, startChapter, endChapter) || ''}
						{NextButton(selectedChapters.length, chapter.questions.length, end, endChapter) || ''}
						{emptyMemory() || ''}
					{/each}
				{:else}
					{#each chapter.questions.slice(start, end) as q, i}
						<svelte:component this={q.type} bind:value={q.value} {...q} />
						{BackButton(start, startChapter, endChapter) || ''}
						{NextButton(selectedChapters.length, chapter.questions.length, end, endChapter) || ''}
					{/each}
				{/if}
			{/if}
		{/each}
	</div>

	<StepsButtons
		bind:state
		bind:start
		bind:end
		bind:startChapter
		bind:endChapter
		{backButton}
		bind:memory
		questionsGrouping={app.questionsGrouping}
		chaptersGrouping={app.chaptersGrouping}
		{nextButton}
	/>
{/if}

<!-- 
<pre>
	{JSON.stringify(selectedChapters, null, 2)}
</pre>
-->
