<script lang="ts">
	import { fade } from 'svelte/transition';
	import StepsButtons from '$lib/StepsButtons.svelte';
	export let chapters: any[];
	export let selectedChapters: any[];
	export let state: string;
	export let startChapter: number;
	export let endChapter: number;
	export let start: number;
	export let end: number;
	let backButton: string;
	let nextButton: string;

	function BackButton(start: number) {
		if (start == 0) {
			backButton = 'noShow';
		} else {
			backButton = 'show';
		}
	}

	function NextButton(i: number, chaptersLength: number, questionsLength: number, end: number) {
		if (chaptersLength == null) {
			if (i >= questionsLength) {
				nextButton = 'nextChapter';
			}
		} else if (i == chaptersLength - 1 && end >= questionsLength) {
			nextButton = 'showRisks';
		} else {
			nextButton = 'nextQuestions';
		}
	}
</script>

{#if state == 'questions'}
	<div class="questions" in:fade={{ duration: 1000 }}>
		{#each chapters
			.filter((chapter) => selectedChapters.includes(chapter.name))
			.slice(startChapter, endChapter) as chapter, i}
			<h2>{chapter.id}. {chapter.name}</h2>
			{#if chapter.questions}
				{#each chapter.questions.slice(start, end) as q, i}
					<svelte:component this={q.type} bind:value={q.value} {...q} />
					{BackButton(start) || ''}
					{NextButton(end, null, chapter.questions.length, null) || ''}
					i={i}, qlength={chapter.questions.length}
				{/each}
			{/if}
			{NextButton(i, selectedChapters.length, chapter.questions.length, end) || ''}
			i2={i}, sel-length {selectedChapters.length}
		{/each}
	</div>

	<StepsButtons
		bind:state
		bind:start
		bind:end
		bind:startChapter
		bind:endChapter
		{backButton}
		{nextButton}
	/>
{/if}

<pre>
	{JSON.stringify(selectedChapters, null, 2)}
</pre>
