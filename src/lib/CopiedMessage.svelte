<script lang="ts">
	import { slide } from 'svelte/transition';
	import Checked from './icons/Checked.svelte';

	export let clicked: number = 0;
</script>

<small>
	{#if clicked == 1}
		<div transition:slide>
			<span><Checked /></span>
			Die Zusammenfassung ist nun in Ihrer Zwischenablage.
		</div>
	{:else if clicked == 2}
		<div transition:slide>
			<span><Checked /></span>
			Die Zwischenablage wurde soeben aktualisiert!
		</div>
	{:else if clicked == 3}
		<div transition:slide>
			<span><Checked /></span><span><Checked /></span>...sie wird jedesmal wieder aktualisiert
			&#128521;
		</div>
	{:else if clicked % 4 == 0 && clicked != 0}
		<div transition:slide>
			Bei Problemen rufen Sie uns gerne an <a href="tel:0041444610067">044 461 00 67</a>.
		</div>
	{:else if clicked != 0}
		<div transition:slide>
			<span><Checked /></span>
			Die Zwischenablage wurde soeben aktualisiert!
		</div>
	{/if}
</small>

<style>
	small {
		color: green;
		display: inline-block;
		padding-left: 1rem;
		top: 3px;
	}

	span {
		display: block;
		fill: currentColor;
		float: left;
		height: 20px;
		padding: 0.1rem 0.5rem 0 0;
		width: 30px;
	}
</style>
