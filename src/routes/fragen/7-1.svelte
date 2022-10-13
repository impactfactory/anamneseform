<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Bewusstseinsverlust';
	let prevPage: string;
	let nextPage: string = '7-2';

	//backwards navigational logic
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

	let selectLabel: string;
	let selectOptions: string[];
	let selectPlaceholder: string;
	let selectValue: string;
	let selectCustomText: string;
	let selectName: string;
	let selectHasCustom: boolean;
</script>

<Exit />

<YouAreHere {chapterName} />

<div in:fade={{ duration: 1000 }}>
	<SelectGroup
		selectName="1"
		selectLabel="Wie häufig erleiden Sie Bewusstseinsverlust?"
		selectOptions={[
			'mehrmals täglich',
			'einmal täglich',
			'alle paar Monate',
			'sehr unterschiedlich',
			'mal häufig, dann lange Zeit nichts',
			'sehr selten'
		]}
		selectPlaceholder="Bitte beschreiben Sie wie häufig dies auftritt:"
		bind:selectValue={$answers.answer7_1_1}
		bind:selectCustomText={$answers.answer7_1_2}
		selectHasCustom={true}
	/>

	<SelectGroup
		selectName="2"
		selectLabel="Wann trat zum ersten Mal ein Bewusstseinsverlust auf?"
		selectOptions={['letzte Woche', 'letzten Monat', 'letztes Jahr', 'vor Jahren']}
		selectPlaceholder="Bitte beschreiben Sie wann ein Bewusstseinsverlust zum ersten Mal auftrat:"
		bind:selectValue={$answers.answer7_1_3}
		bind:selectCustomText={$answers.answer7_1_4}
		selectHasCustom={true}
	/>

	<SelectGroup
		selectName="3"
		selectLabel="Sind Ihnen Auslöser für Bewusstseinsverlust bekannt??"
		selectOptions={[
			'Alkoholgenuss',
			'Schweizer Abstimmungsresulate',
			'mein Kontostand',
			'nein, keine'
		]}
		selectPlaceholder="Bitte beschreiben Sie die Ihnen bekannten Auslöser:"
		bind:selectValue={$answers.answer7_1_5}
		bind:selectCustomText={$answers.answer7_1_6}
		selectHasCustom={true}
	/>
</div>

<StepsButtons {prevPage} {nextPage} />
