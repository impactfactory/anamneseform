<script lang="ts">
	import Bmi from '$lib/inputs/Bmi.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Risikofaktoren';
	let prevPage: string;
	let nextPage: string = 'risks_2';

	//backwards navigational logic
	if ($answers.answer0.includes('9')) {
		prevPage = '9-3';
	} else {
		if ($answers.answer0.includes('8')) {
			prevPage = '8-3';
		} else {
			if ($answers.answer0.includes('7')) {
				prevPage = '7-3';
			} else {
				if ($answers.answer0.includes('6')) {
					prevPage = '6-3';
				} else {
					prevPage = '0-0';
				}
			}
		}
	}

	let gender: string;
	let weight: number;
	let height: number;
	let pulse: string;
	let pressure_sys: string;
	let pressure_dia: string;
</script>

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<Bmi
		bind:gender={$answers.risk1_6}
		bind:weight={$answers.risk1_1}
		bind:height={$answers.risk1_2}
		bind:pulse={$answers.risk1_3}
		bind:pressure_sys={$answers.risk1_4}
		bind:pressure_dia={$answers.risk1_5}
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
