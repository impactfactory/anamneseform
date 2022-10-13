<script>
	import { answers } from '$lib/stores';
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

<!-- Question 3 -->
