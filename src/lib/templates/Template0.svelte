<script lang="ts">
	import { answers } from '$lib/data/stores';
	import { data } from '$lib/data/data';
	import ProsaList from './Snippets/ProsaList.svelte';

	let value: string[];
	//let chapterNames = $answers.answer0.map((key) => data.chapters[key]);
</script>

<!-- Question 1 -->
{#if $answers.answer0}
	<p>
		Die erfahrenen Symptome sind: <ProsaList value={$answers.answer0} />.
	</p>
{:else}{/if}
