<script lang="ts">
	import { onMount } from 'svelte';
	import ClipboardJS from 'clipboard';
	import CopiedMessage from '$lib/Generator/CopiedMessage.svelte';
	import GeneratedText from '$lib/Generator/GeneratedText.svelte';
	import StepsButtons from '$lib/Navigation/StepsButtons.svelte';
	export let selectedChapters: any[];
	export let chapters: any[];
	export let risks: any[];
	export let state: string;
	export let start: number;
	export let end: number;
	let clip;
	let clicked: number = 0;

	onMount(() => {
		clip = new ClipboardJS('.btn');
	});
</script>

{#if state == 'generator'}
	<div class="generatedtext">
		<h2>Ihre Zusammenfassung:</h2>

		<ol>
			<li>Kopieren Sie den Text in Ihre Zwischenablage.</li>
			<li>Fügen Sie diesen in die HIN-Kommunikation mit uns ein.</li>
			<li>Korrigieren, ergänzen, abschicken!</li>
		</ol>

		<GeneratedText {selectedChapters} {chapters} {risks} />

		<button
			data-clipboard-target="#txt"
			class="btn btn-md btn-primary inline-block"
			on:click={() => clicked++}
		>
			Kopieren
		</button>

		<CopiedMessage {clicked} />
	</div>
	<StepsButtons bind:state bind:start bind:end selected={risks.questions} />
{/if}

<style>
	button {
		opacity: 0.9;
	}
</style>
