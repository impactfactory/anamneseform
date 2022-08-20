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
		<div id="foo">
			{#each chapters as chapter}
				{#if chapter.enabled}
					<RenderedText {chapter} />
				{/if}
			{/each}
		</div>

		<!-- Trigger -->
		<button class="btn" data-clipboard-target="#foo">
			<img src="assets/clippy.svg" alt="Copy to clipboard" />
		</button>
	</div>
</div>

<pre>freeanswertext aus CopyText.svelte: {freeanswertext}<br /></pre>
