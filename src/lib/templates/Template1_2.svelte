<script>
	import { answers } from '$lib/stores';
</script>

{#if $answers.answer1_2_1 && $answers.answer1_2_1 != 'custom'}
	Es hört {$answers.answer1_2_1} auf.&nbsp;
{:else}
	{$answers.answer1_2_2}&nbsp;
{/if}

{#if $answers.answer1_2_3.length || $answers.answer1_2_4}
	Symptome: {#each $answers.answer1_2_3 as answer, i}
		{#if i == $answers.answer1_2_3.length - 2}
			{answer} und &nbsp;
		{:else if i == $answers.answer1_2_3.length - 1}
			{answer}.
		{:else}
			{answer},&nbsp;
		{/if}
	{/each}

	{#if $answers.answer1_2_4}
		&nbsp;{$answers.answer1_2_5}
	{:else}{/if}
{/if}

{#if $answers.answer1_2_6 && $answers.answer1_2_6 != 'custom'}
	Das Herzrasen ist seit {$answers.answer1_2_6} bekannt.&nbsp;
{:else if $answers.answer1_2_7}
	Bekannt: {$answers.answer1_2_7}&nbsp;
{/if}
