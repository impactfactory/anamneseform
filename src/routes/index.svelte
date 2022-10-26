<script lang="ts">
	import { fields } from '$lib/data/fields';
	import Config from '$lib/Config.svelte';
	import Generator from '$lib/Generator/Generator.svelte';
	import Header from '$lib/Header.svelte';
	import Questions from '$lib/Questions.svelte';
	import Intro from '$lib/Intro.svelte';
	import Risks from '$lib/Risks/Risks.svelte';

	let state: string;
</script>

<Header title={fields.app.title} />

<Intro bind:state={fields.app.state} />

<Config bind:state={fields.app.state} {fields} />

<Questions
	bind:state={fields.app.state}
	selectedChapters={fields.selectedChapters}
	chapters={fields.chapters}
/>

<Risks bind:state={fields.app.state} {fields} />

<Generator
	bind:state={fields.app.state}
	selectedChapters={fields.selectedChapters}
	chapters={fields.chapters}
/>
