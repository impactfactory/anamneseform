<script lang="ts">
	import Checkbox from './Checkbox.svelte';
	import Slider from './Slider.svelte';
	import Text from './Text.svelte';

	const items = [
		{ name: 'Text', component: Text, value: '' },
		{ name: 'Slider', component: Slider, value: 0 },
		{ name: 'Checkbox', component: Checkbox, value: false }
	];
</script>

{#each items as item}
	<div>
		{item.name}
		<svelte:component this={item.component} bind:value={item.value} />{item.value}
	</div>
{/each}
