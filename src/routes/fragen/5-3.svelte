<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';

	let chapterName: string = 'Herzstolpern';
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

	let radioLabel: string;
	let radioGroup: string;
	let radioCustomText: string;
	let radioPlaceholder: string;
	let radioHasCustom: boolean;
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<RadioGroup
		radioLabel="Können Sie das Herzstolpern durch etwas auslösen?"
		bind:radioGroup={$answers.answer5_3_1}
		bind:radioCustomText={$answers.answer5_3_2}
		radioPlaceholder="Bitte beschreiben Sie, wie Sie es auslösen können..."
		radioHasCustom={true}
	/>

	<RadioGroup
		radioLabel="Können Sie das Herzstolpern durch etwas beenden?"
		bind:radioGroup={$answers.answer5_3_3}
		bind:radioCustomText={$answers.answer5_3_4}
		radioPlaceholder="Bitte beschreiben Sie, wie Sie es beenden können..."
		radioHasCustom={true}
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
