<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Schwindel';
	let prevPage: string = '0-0';
	let nextPage: string = '4-2';

	//backwards navigational logic
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
		selectLabel="Wie würden Sie den Schwindel beschreiben?"
		selectOptions={['als Drehschwindel', 'als xx']}
		selectPlaceholder="Bitte beschreiben Sie den Schwindel:"
		bind:selectValue={$answers.answer4_1_1}
		bind:selectCustomText={$answers.answer4_1_2}
		selectHasCustom={true}
	/>

	<SelectGroup
		selectName="2"
		selectLabel="Wie häufig haben Sie diesen Schwindel?"
		selectOptions={[
			'mehrmals täglich',
			'einmal täglich',
			'alle paar Monate',
			'sehr unterschiedlich',
			'mal häufig, dann lange Zeit nichts',
			'sehr selten'
		]}
		selectPlaceholder="Beschreiben Sie wie häufig..."
		bind:selectValue={$answers.answer4_1_3}
		bind:selectCustomText={$answers.answer4_1_4}
		selectHasCustom={true}
	/>

	<SelectGroup
		selectName="3"
		selectLabel="Wie beginnt der Schwindel?"
		selectOptions={['plötzlich', 'langsam zunehmend', 'weiss nicht genau']}
		selectPlaceholder="Bitte beschreiben Sie wie der Schwindel beginnt:"
		bind:selectValue={$answers.answer4_1_5}
		bind:selectCustomText={$answers.answer4_1_6}
		selectHasCustom={true}
	/>

	<SelectGroup
		selectName="4"
		selectLabel="Wie lange hält der Schwindel an?"
		selectOptions={[
			'nur Sekunden',
			'ca. eine halbe Minute',
			'ca. 1-2 Minuten',
			'ca. eine halbe Stunde',
			'mehrere Stunden',
			'mal nur kurz für Minuten mal Stunden'
		]}
		selectPlaceholder="Bitte beschreiben Sie wie der Schwindel andauert: "
		bind:selectValue={$answers.answer4_1_7}
		bind:selectCustomText={$answers.answer4_1_8}
		selectHasCustom={true}
	/>
</div>

<StepsButtons {prevPage} {nextPage} />
