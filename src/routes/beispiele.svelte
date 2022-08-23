<script lang="ts">
	import ClipboardJS from 'clipboard';
	import { onMount } from 'svelte';
	let clip;
	onMount(() => {
		clip = new ClipboardJS('.btn');
	});
</script>

<div id="txt">Lorem ipsum dolor, sit amet consectetur</div>

<button data-clipboard-target="#txt" class="btn">copy</button>
