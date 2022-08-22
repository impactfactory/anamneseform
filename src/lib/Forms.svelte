<script lang="ts">
	import Switch from '$lib/Switch.svelte';
	import Questions from '$lib/Questions.svelte';
	import ProgressBar from './ProgressBar.svelte';
	import StepsButton from './StepsButton.svelte';

	export let chapters = [] as any[];
	export let freeanswertext = '';
	export let selected = 'empty';
	export let currentActive;
	export let progressBar;

	let step: number = '1';
</script>

step = {step}

<ProgressBar {chapters} bind:step />

<form class="pt-4 pb-4" action="/api/send" method="POST">
	{#each chapters as chapter}
		{#if step == chapter.number}
			<Switch bind:enabled={chapter.enabled} label={chapter.label} />
			<Questions {chapter} bind:freeanswertext bind:selected />
		{/if}
	{/each}

	<!-- <pre>freeanswertext aus Form.svelte: {freeanswertext}<br /></pre> -->
</form>

<StepsButton bind:step />
