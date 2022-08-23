<script lang="ts">
	import { slide } from 'svelte/transition';
	import Switch from '$lib/Switch.svelte';
	import Questions from '$lib/Questions.svelte';
	import ProgressBar from './ProgressBar.svelte';
	import StepsButtons from './buttons/ForwardButtonButton.svelte';
	import RenderTextButton from './buttons/RenderTextButton.svelte';

	export let chapters = [] as any[];
	//export let freeanswertext = '';
	export let selected = 'empty';
	export let currentActive;
	export let progressBar;

	let step: number = '1';
	//const numberOfChapters = chapters.length;
</script>

<ProgressBar {chapters} bind:step />

<form class="pt-4 pb-4" action="" method="POST">
	{#each chapters as chapter, i}
		{#if step == chapter.number}
			<div transition:slide>
				<Switch
					bind:enabled={chapter.enabled}
					label={chapter.label}
					number={chapter.number}
					bind:step
				/>
				{#if chapter.enabled}
					<Questions {chapter} />
					<StepsButtons bind:step />
				{/if}
			</div>
		{/if}
	{/each}

	<!-- <pre>freeanswertext aus Form.svelte: {freeanswertext}<br /></pre> -->
</form>
