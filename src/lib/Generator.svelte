<script lang="ts">
	import { onMount } from 'svelte';
	import ClipboardJS from 'clipboard';
	import CopiedMessage from '$lib/CopiedMessage.svelte';
	import ProsaList from '$lib/templates/Snippets/ProsaList.svelte';

	let clip;
	let clicked: number = 0;
	export let value: any[];

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

	<div id="txt" class="bg-white border rounded-md my-4 p-3 w-full" contenteditable>
		Die erfahrenen Symptome sind:
		<ProsaList {value} />.
	</div>

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
