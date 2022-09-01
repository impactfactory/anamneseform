<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'andere Herzphänomene';
	let prevPage: string = '';
	let nextPage: string = '5-2';

	//backwards navigational logic
	if ($answers.answer0.includes('4')) {
		prevPage = '4-3';
	} else {
		if ($answers.answer0.includes('3')) {
			prevPage = '3-3';
		} else {
			if ($answers.answer0.includes('2')) {
				prevPage = '2-3';
			} else {
				if ($answers.answer0.includes('1')) {
					prevPage = '1-3';
				} else {
					prevPage = '0-0';
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
