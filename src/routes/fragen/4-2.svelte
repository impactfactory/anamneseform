<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Schwindel';
	let prevPage: string = '4-1';
	let nextPage: string;

	// navigational logic: define next page url according choice of main symptoms
	if (
		!$answers.answer0.includes('5') &&
		!$answers.answer0.includes('6') &&
		!$answers.answer0.includes('7') &&
		!$answers.answer0.includes('8') &&
		!$answers.answer0.includes('9')
	) {
		nextPage = 'risks_1';
	}

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

	let selectLabel: string;
	let selectOptions: string[];
	let selectPlaceholder: string;
	let selectValue: string;
	let selectCustomText: string;
	let selectName: string;
	let selectHasCustom: boolean;

	let checkboxLabel: string;
	let checkboxGroup: string;
	let boxes: string[];
	let checkboxCustomText: string;
	let checkboxHasCustom: boolean;
	let custom: string;
</script>

<Exit />

<YouAreHere {chapterName} />

<div in:fade={{ duration: 1000 }}>
	<SelectGroup
		selectName="1"
		selectLabel="Wie hört der Schwindel auf?"
		selectOptions={['plötzlich', 'langsam abnehmend', 'weiss nicht genau']}
		selectPlaceholder="Bitte beschreiben Sie wie der Schwindel aufhört:"
		bind:selectValue={$answers.answer4_2_1}
		bind:selectCustomText={$answers.answer4_2_2}
		selectHasCustom={true}
	/>

	<SelectGroup
		selectName="2"
		selectLabel="Seit wann kennen Sie diesen Schwindel?"
		selectOptions={['schon Jahre', 'erst seit Kurzem', 'ich hatte es früher, dann lange nicht']}
		selectPlaceholder="Bitte beschreiben Sie wie lange Sie den Schwindel schon kennen:"
		bind:selectValue={$answers.answer4_2_3}
		bind:selectCustomText={$answers.answer4_2_4}
		selectHasCustom={true}
	/>

	<SelectGroup
		selectName="3"
		selectLabel="Wann trat der Schwindel zuletzt auf?"
		selectOptions={['heute', 'gestern', 'letzte Woche, letzten Monat, letztes Jahr, vor Jahren']}
		selectPlaceholder="Bitte beschreiben Sie wann der Schwindel zum letzten Mal auftrat:"
		bind:selectValue={$answers.answer4_2_5}
		bind:selectCustomText={$answers.answer4_2_6}
		selectHasCustom={true}
	/>
</div>

<StepsButtons {prevPage} {nextPage} />
