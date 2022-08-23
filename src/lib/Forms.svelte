<script lang="ts">
	import { slide } from 'svelte/transition';
	import Switch from '$lib/Switch.svelte';
	import Questions from '$lib/Questions.svelte';
	import ProgressBar from '$lib/ProgressBar.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';

	export let chapters = [] as any[];
	export let selected = 'empty';

	let step: number = '1';
</script>

<ProgressBar {chapters} bind:step />

<form class="pt-4 pb-4">
	{#each chapters as chapter}
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
					<StepsButtons number={chapter.number} length={chapters.length} bind:step />
				{/if}
			</div>
		{/if}
	{/each}

	<!-- <pre>freeanswertext aus Form.svelte: {freeanswertext}<br /></pre> -->
</form>
