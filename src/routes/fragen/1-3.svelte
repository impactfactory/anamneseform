<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';
	import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Herzrasen';
	let prevPage: string = '/fragen/1-2';
	let nextPage: string = '';

	let radioLabel: string;
	let radioGroup: string;
	let radioCustomText: string;
	let radioPlaceholder: string;
	let radioHasCustom: boolean;

	let checkboxLabel: string;
	let checkboxGroup: string;
	let boxes: string[];
	let checkboxCustomText: string;
	let checkboxHasCustom: boolean;
	let checkboxPlaceholder: string;
	let custom: string;

	// navigational logic: define next page url according choice of main symptoms
	if (
		!$answers.answer0.includes('2') &&
		!$answers.answer0.includes('3') &&
		!$answers.answer0.includes('4') &&
		!$answers.answer0.includes('5') &&
		!$answers.answer0.includes('6') &&
		!$answers.answer0.includes('7') &&
		!$answers.answer0.includes('8') &&
		!$answers.answer0.includes('9')
	) {
		nextPage = 'risks_1';
	}

	if ($answers.answer0.includes('2')) {
		nextPage = '2-1';
	} else {
		if ($answers.answer0.includes('3')) {
			nextPage = '3-1';
		} else {
			if ($answers.answer0.includes('4')) {
				nextPage = '4-1';
			} else {
				if ($answers.answer0.includes('5')) {
					nextPage = '5-1';
				} else {
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
				}
			}
		}
	}
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<RadioGroup
		radioLabel="Können Sie das Herzrasen durch etwas auslösen?"
		bind:radioGroup={$answers.answer1_3_1}
		bind:radioCustomText={$answers.answer1_3_2}
		radioPlaceholder="Bitte beschreiben Sie, wie Sie es auslösen können..."
		radioHasCustom={true}
	/>

	<RadioGroup
		radioLabel="Können Sie das Herzrasen durch etwas beenden?"
		bind:radioGroup={$answers.answer1_3_3}
		bind:radioCustomText={$answers.answer1_3_4}
		radioPlaceholder="Bitte beschreiben Sie, wie Sie es beenden können..."
		radioHasCustom={true}
	/>

	<CheckboxGroup
		checkboxLabel="Wurde dieses Herzrasen schon einmal behandelt?"
		boxes={['medikamentös', 'mit Herzkatheter', 'unbehandelt']}
		bind:checkboxGroup={$answers.answer1_3_5}
		checkboxCustomText=""
		checkboxPlaceholder="."
		checkboxHasCustom={false}
		custom=""
	/>

	<CheckboxGroup
		checkboxLabel="Wie fühlen Sie den Herzschlag?"
		boxes={['sehr schnell', 'mässig schnell', 'regelmässig aufeinander folgend', 'unregelmässig']}
		bind:checkboxGroup={$answers.answer1_3_7}
		bind:checkboxCustomText={$answers.answer1_3_8}
		checkboxPlaceholder="Bitte beschreiben Sie..."
		checkboxHasCustom={true}
		custom=""
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
