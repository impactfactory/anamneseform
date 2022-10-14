<script lang="ts">
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import ClipboardJS from 'clipboard';
	import CopiedMessage from '$lib/CopiedMessage.svelte';
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import Template0 from '$lib/templates/Template0.svelte';
	import Template1_1 from '$lib/templates/Template1_1.svelte';
	import Template1_2 from '$lib/templates/Template1_2.svelte';
	import Template1_3 from '$lib/templates/Template1_3.svelte';
	import Template2 from '$lib/templates/Template2.svelte';
	import Template3 from '$lib/templates/Template3.svelte';
	import Template4 from '$lib/templates/Template4.svelte';
	import Template5 from '$lib/templates/Template5.svelte';
	import Template6 from '$lib/templates/Template6.svelte';
	import Template7 from '$lib/templates/Template7.svelte';
	import Template8 from '$lib/templates/Template8.svelte';
	import Template9 from '$lib/templates/Template9.svelte';
	import TemplateRisks from '$lib/templates/TemplateRisks.svelte';

	let prevPage: string = '';
	let nextPage: string = 'noShow';

	//backwards navigational logic
	if ($answers.answer0.includes(9)) {
		prevPage = '9-3';
	} else {
		if ($answers.answer0.includes(8)) {
			prevPage = '8-3';
		} else {
			if ($answers.answer0.includes(7)) {
				prevPage = '7-3';
			} else {
				if ($answers.answer0.includes(6)) {
					prevPage = '6-3';
				} else {
					if ($answers.answer0.includes(5)) {
						prevPage = '5-3';
					} else {
						if ($answers.answer0.includes(4)) {
							prevPage = '4-2';
						} else {
							if ($answers.answer0.includes(3)) {
								prevPage = '3-3';
							} else {
								if ($answers.answer0.includes(2)) {
									prevPage = '2-4';
								} else {
									if ($answers.answer0.includes(1)) {
										prevPage = '1-3';
									} else {
										prevPage = '0-0';
									}
								}
							}
						}
					}
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
		<Template0 />

		{#if $answers.answer0.includes(1)}
			<Template1_1 />
			<Template1_2 />
			<Template1_3 />
		{/if}
		{#if $answers.answer0.includes(2)}
			<Template2 />
		{/if}
		{#if $answers.answer0.includes(3)}
			<Template3 />
		{/if}
		{#if $answers.answer0.includes(4)}
			<Template4 />
		{/if}
		{#if $answers.answer0.includes(5)}
			<Template5 />
		{/if}
		{#if $answers.answer0.includes(6)}
			<Template6 />
		{/if}
		{#if $answers.answer0.includes(7)}
			<Template7 />
		{/if}
		{#if $answers.answer0.includes(8)}
			<Template8 />
		{/if}
		{#if $answers.answer0.includes(9)}
			<Template9 />
		{/if}
		<TemplateRisks />
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

<pre class="pt-40">
    {JSON.stringify($answers, null, 2)}
</pre>

<StepsButtons {prevPage} {nextPage} />

<style>
	button {
		opacity: 0.9;
	}
</style>
