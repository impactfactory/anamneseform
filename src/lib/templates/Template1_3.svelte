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
{#if $answers.answer1_3_5.length}
	Erfolgte Behandlung:
	{#each $answers.answer1_3_5 as answer, i}
		{#if i == $answers.answer1_3_5.length - 2}
			<span>{answer}</span> und&nbsp;
		{:else if i == $answers.answer1_3_5.length - 1}
			<span>{answer}</span>.
		{:else}
			<span>{answer}</span>,&nbsp;
		{/if}
	{/each}
{/if}

<!-- Question 3 -->
{#if $answers.answer1_3_7.length}
	Der Herzschlag fühlt sich {#if $answers.answer1_3_8} {$answers.answer1_3_8},{/if}
	{#each $answers.answer1_3_7 as answer, i}
		{#if i == $answers.answer1_3_7.length - 2}
			<span>{answer}</span> und&nbsp;
		{:else if i == $answers.answer1_3_7.length - 1}
			<span>{answer}</span>
		{:else}
			{answer},&nbsp;
		{/if}
	{/each}
	an.
{/if}
