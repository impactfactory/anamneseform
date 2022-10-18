<script lang="ts">
	import { onMount } from 'svelte';
	import ClipboardJS from 'clipboard';
	import CopiedMessage from '$lib/CopiedMessage.svelte';
	import GeneratedText from './GeneratedText.svelte';
	export let selectedChapters: any[];
	export let chapters: any[];

	let clip;
	let clicked: number = 0;

	onMount(() => {
		clip = new ClipboardJS('.btn');
	});
</script>

<div>
	<h2 class="font-medium">Danke! Ihre Zusammenfassung:</h2>

	<ol>
		<li>Kopieren Sie den Text in Ihre Zwischenablage.</li>
		<li>Fügen Sie diesen in die HIN-Kommunikation mit uns ein.</li>
		<li>Korrigieren, ergänzen, abschicken!</li>
	</ol>

	<GeneratedText bind:selectedChapters {chapters} />

	<button
		data-clipboard-target="#txt"
		class="btn btn-md btn-primary inline-block"
		on:click={() => clicked++}
	>
		Kopieren
	</button>

	<CopiedMessage {clicked} />
</div>

<style>
	button {
		opacity: 0.9;
	}
</style>
