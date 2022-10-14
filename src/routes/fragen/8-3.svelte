<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Leistungsschwäche';
	let prevPage: string = '8-2';
	let nextPage: string;

	// navigational logic: define next page url according choice of main symptoms

	if ($answers.answer0.includes('9')) {
		nextPage = '9-1';
	} else {
		nextPage = 'risks_1';
	}
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>potentiell weitere Fragen</div>
<StepsButtons {prevPage} {nextPage} />
