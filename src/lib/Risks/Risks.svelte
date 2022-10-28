<script lang="ts">
	import { fade } from 'svelte/transition';
	import { risks } from '$lib/data/risks';
	import StepsButtons from '$lib/Navigation/StepsButtons.svelte';
	export let app: any[];
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
</script>

{#if state == 'risks'}
	<div class="risks" in:fade={{ duration: 1000 }}>
		<h2>{risks.template}{risks.title}</h2>
		{#each risks.questions.slice(start, end) as q, i}
			<svelte:component this={q.type} bind:value={q.value} {...q} />
			{BackButton(start) || ''}
			{NextButton(risks.questions.length, end) || ''}
		{/each}
	</div>

	<StepsButtons
		bind:state
		bind:start
		bind:end
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
