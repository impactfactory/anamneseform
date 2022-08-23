<script lang="ts">
	import BackButton from '$lib/buttons/BackButton.svelte';
	import ForwardButton from '$lib/buttons/ForwardButton.svelte';
	import RenderTextButton from '$lib/buttons/RenderTextButton.svelte';

	export let number: number;
	export let length: number;
	export let step: number;
</script>

chapters.length = {length}, nummer = {number}

<div class="py-3">
	{#if number == 1}
		<ForwardButton bind:step />
	{:else if number == length}
		<BackButton bind:step /> <RenderTextButton />
	{:else}
		<BackButton bind:step /> <ForwardButton bind:step />
	{/if}
</div>
