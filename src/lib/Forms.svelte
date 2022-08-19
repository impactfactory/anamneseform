<script lang="ts">
	//import Chapter from './Chapter.svelte';
	//import { slide } from 'svelte/transition';
	import { getChapters } from '$lib/data';
	import ExportButton from '$lib/ExportButton.svelte';
	import Switch from '$lib/Switch.svelte';
	import Questions from '$lib/Questions.svelte';

	//import RadioGroup from '$lib/inputs/RadioGroup.svelte';
	//import CheckBoxGroup from '$lib/inputs/CheckBoxGroup.svelte';
	//import Select from '$lib/inputs/Select.svelte';

	export let chapters = [] as any[];
	//export let questions = [] as any[];
	export let question = '';

	/*
	let chapterStates = [
		{ enabled: false, title: 'Chapter One' },
		{ enabled: false, title: 'Chapter Two' },
		{ enabled: false, title: 'Chapter Three' }
	];*/
</script>

<form class="pt-10" action="/api/send" method="POST">
	{#each chapters as chapter}
		<div>
			<Switch bind:enabled={chapter.enabled} title={chapter.label} />
		</div>
		{#if chapter.enabled}
			<Questions {chapter} />
		{/if}
	{/each}

	<ExportButton />
</form>
