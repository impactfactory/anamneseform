<script lang="ts">
	import { fade } from 'svelte/transition';
	import { risks } from '$lib/data/risks';
	import StepsButtons from '$lib/Navigation/StepsButtons.svelte';
	export let app: any[];
	export let memory: string;
	export let selectedChapters: string[];
	export let state: string;
	export let start: number;
	export let end: number;
	let backButton: string;
	let nextButton: string;

	function BackButton(questionsSliceStart: number) {
		if (questionsSliceStart == 0) {
			backButton = 'showLastChaptersEnd';
		} else {
			backButton = 'showLastRisks';
		}
	}

	function NextButton(questionsLength: number, questionsSliceEnd: number) {
		if (questionsSliceEnd >= questionsLength) {
			nextButton = 'showGenerator';
		} else {
			nextButton = 'nextQuestions';
		}
	}

	function calc(length) {
		if (length % app.questionsGrouping == 0) {
			end = length;
		} else if (length % app.questionsGrouping == 1) {
			end = length + 1;
		} else if (length % app.questionsGrouping == 2) {
			end = app.questionsGrouping;
			console.log('Help! Grouping is not 2. Ask Einstein for mathematics code in risks:36!!!');
		}
		start = end - app.questionsGrouping;
	}

	function emptyMemory() {
		memory = 'empty';
		console.log(memory);
	}
</script>

{#if state == 'risks'}
	<div class="risks" in:fade={{ duration: 1000 }}>
		<h2>{risks.template}{risks.title}</h2>
		{#if memory == 'cameBackwards'}
			{calc(risks.questions.length) || ''}
			{#each risks.questions.slice(start, end) as q, i}
				<svelte:component this={q.type} bind:value={q.value} {...q} />
				{BackButton(start) || ''}
				{NextButton(risks.questions.length, end) || ''}
				{emptyMemory() || ''}
			{/each}
		{:else}
			{#each risks.questions.slice(start, end) as q, i}
				<svelte:component this={q.type} bind:value={q.value} {...q} />
				{BackButton(start) || ''}
				{NextButton(risks.questions.length, end) || ''}
			{/each}
		{/if}
	</div>

	<StepsButtons
		bind:end
		bind:state
		bind:start
		bind:memory
		questionsGrouping={app.questionsGrouping}
		{backButton}
		{nextButton}
		{selectedChapters}
	/>

	<!--
	<pre>
    	{JSON.stringify(risks, null, 2)}
	</pre>
	-->
{/if}
