<script lang="ts">
	import { answers } from '$lib/stores';
	import ProsaList from './Snippets/ProsaList.svelte';
	let value: string;
</script>

<!-- Question 1 -->
{#if $answers.answer1_3_1 == 'nein'}
	<span>Kein Auslöser bekannt</span>.&nbsp;
{:else if $answers.answer1_3_1 == 'ja'}
	Auslöser: {$answers.answer1_3_2}&nbsp;
{/if}
{#if $answers.answer1_3_3 == 'nein'}
	<span>Unbekannt, wie zu beenden</span>.&nbsp;
{:else if $answers.answer1_3_3.length}
	So kann das Herzrasen beendet werden: {$answers.answer1_3_4}.&nbsp;
{/if}

<!-- Question 2 -->
{#if $answers.answer1_3_5.length}
	Erfolgte Behandlung: <ProsaList value={$answers.answer1_3_5} />
{/if}

<!-- Question 3 -->
{#if $answers.answer1_3_7.length}
	Der Herzschlag fühlt sich <ProsaList value={$answers.answer1_3_7} /> an.
{/if}
{#if $answers.answer1_3_8}Freie Beschreibung zu Herzschlag: {$answers.answer1_3_8}.{/if}
