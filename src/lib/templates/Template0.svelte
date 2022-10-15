<script lang="ts">
	import { answers } from '$lib/stores';
	import { chapters } from '$lib/chapters';
	import ProsaList from './Snippets/ProsaList.svelte';

	let value: string[];
	let chapterNames = $answers.answer0.map((key) => chapters[key]);
</script>

<!-- Question 1 -->
{#if $answers.answer0}
	<p>
		Die erfahrenen Symptome sind: <ProsaList value={chapterNames} />.
	</p>
{:else}{/if}
