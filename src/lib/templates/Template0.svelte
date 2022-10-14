<script lang="ts">
	import { answers, chapters } from '$lib/stores';
	import Array from './Snippets/Array.svelte';

	let value: string[];
</script>

<!-- Question 1 -->
{#if $answers.answer0}
	<p>Die erfahrenen Symptome sind: <Array value={$answers.answer0} />.</p>
{:else}{/if}
