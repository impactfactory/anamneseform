<script lang="ts">
	import { slide } from 'svelte/transition';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';
	import CheckBoxGroup from '$lib/inputs/CheckBoxGroup.svelte';
	import Select from '$lib/inputs/Select.svelte';

	export let chapter = [] as any[];
	export let freeanswertext = '';
	export let selected = 'empty';
</script>

<div transition:slide>
	{#each chapter.questions as question}
		{#if question.type == 'radiogroup'}
			<RadioGroup {question} />
		{/if}
		{#if question.type == 'checkboxgroup'}
			<CheckBoxGroup {question} />
		{/if}
		{#if question.type == 'select'}
			<Select {question} bind:freeanswertext bind:selected />
		{/if}
	{/each}
</div>

<!--

<pre>freeanswertext aus Question.svelte: {freeanswertext}<br /></pre>

-->
