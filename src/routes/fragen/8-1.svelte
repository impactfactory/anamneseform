<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Leistungsschwäche';
	let prevPage: string;
	let nextPage: string = '8-2';

	//backwards navigational logic
	if ($answers.answer0.includes('7')) {
		prevPage = '7-3';
	} else {
		if ($answers.answer0.includes('6')) {
			prevPage = '6-3';
		} else {
			if ($answers.answer0.includes('5')) {
				prevPage = '5-3';
			} else {
				if ($answers.answer0.includes('4')) {
					prevPage = '4-2';
				} else {
					if ($answers.answer0.includes('3')) {
						prevPage = '3-3';
					} else {
						if ($answers.answer0.includes('2')) {
							prevPage = '2-4';
						} else {
							if ($answers.answer0.includes('1')) {
								prevPage = '1-3';
							} else {
								prevPage = '0-0';
							}
						}
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
		selectLabel="Seit wann hat Ihre körperliche Leistungsfähigkeit nachgelassen?"
		selectOptions={['seit letzter Woche', 'seit letztem Monat', 'seit letztem Jahr', 'seit Jahren']}
		selectPlaceholder="Bitte beschreiben Sie, seit wann Ihre körperliche Leistungsfähigkeit abnimmt:"
		bind:selectValue={$answers.answer8_1_1}
		bind:selectCustomText={$answers.answer8_1_2}
		selectHasCustom={true}
	/>

	<CheckboxGroup
		checkboxLabel="Haben sie begleitende Symptome während den Leistungsschwächen?"
		boxes={[
			'Müdigkeit',
			'Atemnot',
			'kalte Extremitäten',
			'Husten',
			'Rasselgeräusche beim Atmen',
			'nächtlicher Harndrang',
			'Schwindel'
		]}
		bind:checkboxGroup={$answers.answer8_1_3}
		bind:checkboxCustomText={$answers.answer8_1_4}
		checkboxPlaceholder="Welche?"
		checkboxHasCustom={true}
		custom=""
	/>
</div>

<StepsButtons {prevPage} {nextPage} />
