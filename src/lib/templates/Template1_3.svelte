<script>
	import { answers } from '$lib/stores';
</script>

{#if $answers.answer1_3_1 == 'nein'}
	Es ist kein Auslöser bekannt.&nbsp;
{:else if $answers.answer1_3_1 == 'ja'}
	Auslöser: {$answers.answer1_3_2}&nbsp;
{/if}
{#if $answers.answer1_3_3 == 'nein'}
	Es ist keine Möglichkeit, das Herzrasen zu beenden, bekannt.&nbsp;
{:else if $answers.answer1_3_3.length}
	So kann das Herzrasen beendet werden: {$answers.answer1_3_4}&nbsp;
{/if}

{#if $answers.answer1_3_5.length}
	Stand der Behandlung ist:
	{#each $answers.answer1_3_5 as answer, i}
		{#if i == $answers.answer1_3_5.length - 2}
			{answer} und&nbsp;
		{:else if i == $answers.answer1_3_5.length - 1}
			{answer}.
		{:else}
			{answer},&nbsp;
		{/if}
	{/each}
{/if}

{#if $answers.answer1_3_6.length}
	Der Herzschlag fühlt sich {#if $answers.answer1_3_8} {$answers.answer1_3_8},{/if}
	{#each $answers.answer1_3_6 as answer, i}
		{#if i == $answers.answer1_3_6.length - 2}
			{answer} und&nbsp;
		{:else if i == $answers.answer1_3_6.length - 1}
			{answer}
		{:else}
			{answer},&nbsp;
		{/if}
	{/each}
	an.
{/if}
