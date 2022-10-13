<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'andere Herzphänomene';
	let prevPage: string = '5-2';
	let nextPage: string;

	// navigational logic: define next page url according choice of main symptoms
	if (
		!$answers.answer0.includes('6') &&
		!$answers.answer0.includes('7') &&
		!$answers.answer0.includes('8') &&
		!$answers.answer0.includes('9')
	) {
		nextPage = 'risks_1';
	}

	if ($answers.answer0.includes('6')) {
		nextPage = '6-1';
	} else {
		if ($answers.answer0.includes('7')) {
			nextPage = '7-1';
		} else {
			if ($answers.answer0.includes('8')) {
				nextPage = '8-1';
			} else {
				if ($answers.answer0.includes('9')) {
					nextPage = '9-1';
				}
			}
		}
	}
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<p>Fragen über Fragen</p>
</div>
<StepsButtons {prevPage} {nextPage} />
