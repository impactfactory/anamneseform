<script lang="ts">
	import { fade } from 'svelte/transition';
	import { risks } from '$lib/data/risks';
	import StepsButtons from '$lib/Navigation/StepsButtons.svelte';
	export let state: string;
	export let start: number;
	export let end: number;
	let backButton: string;
	let nextButton: string;

	function BackButton(x: number) {
		if (x == 0) {
			backButton = 'lastQuestions';
		} else {
			backButton = 'show';
		}
	}

	function NextButton(i: number, chaptersLength: number, questionsLength: number, end: number) {
		if (i >= questionsLength) {
			nextButton = 'nextChapter';
		} else if (i == chaptersLength - 1 && end >= questionsLength) {
			nextButton = 'showRisks';
		} else {
			nextButton = 'nextQuestions';
		}
	}
</script>

{#if state == 'risks'}
	<div class="risks" in:fade={{ duration: 1000 }}>
		<h2>{risks.template}{risks.title}</h2>
		{#each risks.questions.slice(start, end) as q}
			<svelte:component this={q.type} bind:value={q.value} {...q} />
			{BackButton(start) || ''}
			{NextButton(end, null, risks.questions.length, null) || ''}
		{/each}
	</div>

	<StepsButtons bind:state bind:start bind:end {backButton} {nextButton} />

	<!--
		<pre>
    {JSON.stringify(risks, null, 2)}
</pre>-->
{/if}
