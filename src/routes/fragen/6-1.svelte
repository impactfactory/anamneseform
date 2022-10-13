<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Herzrhythmusstörungen';
	let prevPage: string;
	let nextPage: string = '6-2';

	//backwards navigational logic
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
		selectLabel="Wie häufig haben Sie Herzrhythmusstörungen?"
		selectOptions={[
			'mehrmals täglich',
			'einmal täglich',
			'alle paar Monate',
			'sehr unterschiedlich',
			'mal häufig, dann lange Zeit nichts',
			'sehr selten'
		]}
		selectPlaceholder="Bitte beschreiben Sie wie häufig Herzrhythmusstörungen auftreten:"
		bind:selectValue={$answers.answer6_1_1}
		bind:selectCustomText={$answers.answer6_1_2}
		selectHasCustom={true}
	/>

	<SelectGroup
		selectName="2"
		selectLabel="Wie beginnen die Herzrhythmusstörungen?"
		selectOptions={['plötzlich', 'langsam zunehmend', 'weiss nicht genau']}
		selectPlaceholder="Bitte beschreiben Sie wie die Herzrhythmusstörungen beginnen: "
		bind:selectValue={$answers.answer6_1_3}
		bind:selectCustomText={$answers.answer6_1_4}
		selectHasCustom={true}
	/>

	<SelectGroup
		selectName="3"
		selectLabel="Wie lange die Herzrhythmusstörungen jeweils an?"
		selectOptions={[
			'nur Sekunden',
			'ca. eine halbe Minute',
			'ca. 1-2 Minuten',
			'ca. eine halbe Stunde',
			'mehrere Stunden',
			'mal nur kurz für Minuten mal Stunden'
		]}
		selectPlaceholder="Bitte beschreiben Sie wie die Herzrhythmusstörungen andauern:"
		bind:selectValue={$answers.answer6_1_5}
		bind:selectCustomText={$answers.answer6_1_6}
		selectHasCustom={true}
	/>
</div>

<StepsButtons {prevPage} {nextPage} />
