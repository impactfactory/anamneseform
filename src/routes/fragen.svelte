<script lang="ts">
	//import { data } from '$lib/data';
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	//import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Herzrasen';
	let routes = data.routes;
	let qq = data.chapters.questions;
</script>

<Exit />

<YouAreHere {chapterName} />

<div in:fade={{ duration: 1000 }} />

xx
{#each qq as q}
	{q.label}<br />
{/each}

<StepsButtons prevPage={routes.config} nextPage={routes.generator} />
