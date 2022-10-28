<script lang="ts">
	import { fields } from '$lib/data/fields';
	import { onMount } from 'svelte';
	import Config from '$lib/Config.svelte';
	import Generator from '$lib/Generator/Generator.svelte';
	import Header from '$lib/Header.svelte';
	import Questions from '$lib/Questions.svelte';
	import Intro from '$lib/Intro.svelte';
	import Risks from '$lib/Risks/Risks.svelte';

	let state: string;

	onMount(async () => {
		window.onbeforeunload = function () {
			return 'Diese Nachricht erscheint leider nirgends. Stattdessen die Default Nachrichten der Browser.';
		};
	});
</script>

<Header title={fields.app.title} />

<Intro bind:state={fields.app.state} />

<Config bind:state={fields.app.state} {fields} />

<Questions
	bind:state={fields.app.state}
	selectedChapters={fields.selectedChapters}
	chapters={fields.chapters}
	app={fields.app}
/>

<Risks bind:state={fields.app.state} app={fields.app} selectedChapters={fields.selectedChapters} />

<Generator
	bind:state={fields.app.state}
	selectedChapters={fields.selectedChapters}
	chapters={fields.chapters}
	risks={fields.risks}
/>
