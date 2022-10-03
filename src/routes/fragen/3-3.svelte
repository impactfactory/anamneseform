<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'unregelmässiger Herzschlag';
	let prevPage: string = '3-2';
	let nextPage: string = '';

	// navigational logic: define next page url according choice of main symptoms
	if (!$answers.answer0.includes('4') && !$answers.answer0.includes('5')) {
		nextPage = '/zusammenfassung';
	}

	if ($answers.answer0.includes('4')) {
		nextPage = '4-1';
	} else {
		if ($answers.answer0.includes('5')) {
			nextPage = '5-1';
		}
	}
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<p>nicht benötigt bisjetzt</p>
</div>
<StepsButtons {prevPage} {nextPage} />
