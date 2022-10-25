<script lang="ts">
	import { onMount } from 'svelte';
	import ClipboardJS from 'clipboard';
	import CopiedMessage from '$lib/Generator/CopiedMessage.svelte';
	import GeneratedText from '$lib/Generator/GeneratedText.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	export let selectedChapters: any[];
	export let chapters: any[];
	export let state: string;

	function showConfig() {
		state = 'config';
	}

	function showQuestions() {
		state = 'questions';
	}

	let clip;
	let clicked: number = 0;

	onMount(() => {
		clip = new ClipboardJS('.btn');
	});
</script>

{#if state == 'generator'}
<div class="generatedtext">

	<h2 class="font-medium">Ihre Zusammenfassung:</h2>
	
	<ol>
		<li>Kopieren Sie den Text in Ihre Zwischenablage.</li>
		<li>Fügen Sie diesen in die HIN-Kommunikation mit uns ein.</li>
		<li>Korrigieren, ergänzen, abschicken!</li>
	</ol>

	<GeneratedText {selectedChapters} {chapters} />

	<button
		data-clipboard-target="#txt"
		class="btn btn-md btn-primary inline-block"
		on:click={() => clicked++}
	>
		Kopieren
	</button>

	<CopiedMessage {clicked} />
</div>

<StepsButtons bind:state />

<!-- 
<div class="pt-3">
    <button class="btn btn-primary" on:click={showConfig}>Anfang</button>
    <button class="btn btn-primary" on:click={showQuestions}>zurück</button>
</div>
-->
{/if}

<style>
	button {
		opacity: 0.9;
	}
</style>
