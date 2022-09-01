<script lang="ts">
	import CopiedMessage from '$lib/CopiedMessage.svelte';
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import Template1_1 from '$lib/templates/Template1_1.svelte';
	import Template1_2 from '$lib/templates/Template1_2.svelte';
	import Template1_3 from '$lib/templates/Template1_3.svelte';
	import ClipboardJS from 'clipboard';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let prevPage: string = '';
	let nextPage: string = 'noshow';

	//backwards navigational logic
	if ($answers.answer0.includes('5')) {
		prevPage = '/fragen/5-3';
	} else {
		if ($answers.answer0.includes('4')) {
			prevPage = '/fragen/4-3';
		} else {
			if ($answers.answer0.includes('3')) {
				prevPage = '/fragen/3-3';
			} else {
				if ($answers.answer0.includes('2')) {
					prevPage = '/fragen/2-3';
				} else {
					prevPage = '/fragen/1-3';
				}
			}
		}
	}

	let clip;
	let clicked: number = 0;

	onMount(() => {
		clip = new ClipboardJS('.btn');
	});
</script>

<Exit />
<div in:fade={{ duration: 1500 }}>
	<h2 class="font-medium">Danke! Ihre Zusammenfassung:</h2>

	<ol>
		<li>Kopieren Sie den Text in Ihre Zwischenablage.</li>
		<li>Fügen Sie diesen in die HIN-Kommunikation mit uns ein.</li>
		<li>Korrigieren, ergänzen, abschicken!</li>
	</ol>

	<div id="txt" class="bg-white border rounded-md my-4 p-3 w-full" contenteditable>
		<Template1_1 />
		<Template1_2 />
		<Template1_3 />
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

<!-- 
	<pre class="pt-40">
    {JSON.stringify($answers, null, 2)}
</pre>
-->

<StepsButtons {prevPage} {nextPage} />

<style>
	button {
		opacity: 0.9;
	}
</style>
