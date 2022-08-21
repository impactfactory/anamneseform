<script lang="ts">
	//import { onMount } from 'svelte';
	import RenderedText from '$lib/RenderedText.svelte';

	//import ClipboardJS from '$lib/clipboard.js';

	export let chapters = [] as any[];
	//export let text: string;

	//new ClipboardJS('.btn');
	export let freeanswertext: string;
</script>

<hr />

<div class="py-4">
	<p>
		Bitte kopieren Sie folgenden Text. Gehen Sie zur verschlüsslten Mail-Kommunikation mit HIN,
		welche unsere Praxis mit Ihnen begonnen hat und schicken Sie uns Ihren Bericht, danke!
	</p>

	<div class="pt-4">
		<div id="renderedtext">
			text text, hier besteht nur noch Unklarheit wie man das lösen soll
			{#each chapters as chapter}
				{#if chapter.enabled}
					<RenderedText {chapter} />
				{/if}
			{/each}
		</div>

		<!-- Trigger -->
		<button class="btn" data-clipboard-target="#renderedtext">
			<img src="assets/clippy.svg" alt="Copy to clipboard" />
		</button>
	</div>
</div>

<pre>freeanswertext aus CopyText.svelte: {freeanswertext}<br /></pre>

<style>
	#renderedtext {
		background: white;
		border: 1px solid rgb(215, 215, 215);
		border-radius: 10px;
		height: auto;
		margin: 2rem 0 2rem 0;
		min-height: 100px;
		padding: 0.5rem 1rem 0.5rem 1rem;
		width: 100%;
		/*@apply bg-white border-gray-500 border-width-1 rounded-lg w-full;*/
	}
</style>
