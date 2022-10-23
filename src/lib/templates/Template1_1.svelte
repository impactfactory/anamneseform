<script>
	//import { answers } from '$lib/stores';
</script>

<!-- Question 1 -->
{#if $answers.answer1_1_1 && $answers.answer1_1_1 != 'custom'}
	Das Herzrasen tritt <span>{$answers.answer1_1_1}</span> auf.&nbsp;
{:else}
	{$answers.answer1_1_2}&nbsp;
{/if}

<!-- Question 2 -->
{#if $answers.answer1_1_3 && $answers.answer1_1_3 != 'custom'}
	Das Herzrasen dauert jeweils <span>{$answers.answer1_1_3}</span>.&nbsp;
{:else}
	{$answers.answer1_1_4}
{/if}

<!-- Question 3 -->
{#if $answers.answer1_1_5 && $answers.answer1_1_5 != 'custom'}
	Es <span>beginnt {$answers.answer1_1_5}</span>.&nbsp;
{:else}
	{$answers.answer1_1_6}&nbsp;
{/if}
