<script>
	import { answers } from '$lib/stores';
</script>

{#if $answers.answer1_1_1 && $answers.answer1_1_1 != 'custom'}
	Das Herzrasen tritt {$answers.answer1_1_1} auf.&nbsp;
{:else}
	{$answers.answer1_1_2}&nbsp;
{/if}
{#if $answers.answer1_1_3 && $answers.answer1_1_3 != 'custom'}
	Das Herzrasen dauert jeweils {$answers.answer1_1_3}.&nbsp;
{:else}
	{$answers.answer1_1_4}&nbsp;
{/if}
{#if $answers.answer1_1_5 && $answers.answer1_1_5 != 'custom'}
	Es beginnt {$answers.answer1_1_5}.&nbsp;
{:else}
	{$answers.answer1_1_6}&nbsp;
{/if}
