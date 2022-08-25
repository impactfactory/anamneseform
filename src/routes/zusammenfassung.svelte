<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import Template1_1 from '$lib/templates/Template1_1.svelte';
	import Template1_2 from '$lib/templates/Template1_2.svelte';
	import Template1_3 from '$lib/templates/Template1_3.svelte';
	import ClipboardJS from 'clipboard';
	import { onMount } from 'svelte';

	let prevPage: string = '/fragen/5-0';
	let nextPage: string = 'noshow';

	let clip;

	onMount(() => {
		clip = new ClipboardJS('.btn');
	});
</script>

<Exit />

<h2 class="font-medium">Ihre Zusammenfassung</h2>
<p>Herzlichen Dank! Wir haben unten eine Zusammenfassung Ihrer Angaben generiert.</p>

<ol>
	<li>Korrigieren und ergänzen Sie nach Belieben.</li>
	<li>Kopieren Sie den generierten Text in Ihre Zwischenablage</li>
	<li>Fügen Sie diesen in die verschlüsselte HIN-Kommunikation mit uns ein</li>
</ol>

<div id="txt" class="bg-slate-100 border rounded-md my-4 p-4 w-full" contenteditable>
	<Template1_1 />
	<Template1_2 />
	<Template1_3 />
</div>

<button data-clipboard-target="#txt" class="btn btn-md btn-primary text-white">
	Text in Zwischenablage kopieren
</button>

<pre class="pt-40">
    {JSON.stringify($answers, null, 4)}
</pre>

<StepsButtons {prevPage} {nextPage} />
