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

	if ($answers.answer5_0 == '5-1') {
		prevPage = '5-3';
	}
	if ($answers.answer5_0 == '/zusammenfassung') {
		prevPage = '/fragen/5-0';
	}

	let clip;
	let clicked: number = 0;

	onMount(() => {
		clip = new ClipboardJS('.btn');
	});
</script>

<Exit />
<div in:fade={{ duration: 1500 }}>
	<h2 class="font-medium">Herzlichen Dank! Ihre Zusammenfassung:</h2>

	<ol>
		<li>Kopieren Sie den generierten Text in Ihre Zwischenablage</li>
		<li>Fügen Sie diesen in die verschlüsselte HIN-Kommunikation mit uns ein</li>
		<li>Korrigieren und ergänzen Sie Ihn dort nach Belieben</li>
		<li>Abschicken!</li>
	</ol>

	<div id="txt" class="bg-white border rounded-md my-4 p-4 w-full" contenteditable>
		<Template1_1 />
		<Template1_2 />
		<Template1_3 />
	</div>

	<button
		data-clipboard-target="#txt"
		class="btn btn-md btn-primary text-white inline-block"
		on:click={() => clicked++}
	>
		Kopieren
	</button>

	<CopiedMessage {clicked} />

	<pre class="pt-40">
    {JSON.stringify($answers, null, 2)}
</pre>
</div>
<StepsButtons {prevPage} {nextPage} />
