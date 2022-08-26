<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';

	let chapterName: string = 'Herzrasen';
	let prevPage: string = '/fragen/1-0';
	let nextPage: string = '/fragen/1-2';

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

<SelectGroup
	selectName="1"
	selectLabel="Wie häufig haben Sie Herzrasen?"
	selectOptions={[
		'mehrmals täglich',
		'einmal täglich',
		'alle paar Monate',
		'sehr unterschiedlich',
		'mal häufig, dann lange Zeit nichts',
		'sehr selten'
	]}
	selectPlaceholder="Beschreiben Sie wie häufig..."
	bind:selectValue={$answers.answer1_1_1}
	bind:selectCustomText={$answers.answer1_1_2}
	selectHasCustom={true}
/>

<SelectGroup
	selectName="2"
	selectLabel="Wie lange hält das Herzrasen an?"
	selectOptions={[
		'nur Sekunden',
		'ca. eine halbe Minute',
		'ca. 1-2 Minuten',
		'ca. eine halbe Stunde',
		'mehrere Stunden',
		'mal nur kurz für Minuten mal Stunden'
	]}
	selectPlaceholder="Das Herzrasen dauert jeweils xx."
	bind:selectValue={$answers.answer1_1_3}
	bind:selectCustomText={$answers.answer1_1_4}
	selectHasCustom={true}
/>

<SelectGroup
	selectName="3"
	selectLabel="Wie beginnt das Herzrasen?"
	selectOptions={['plötzlich', 'langsam anklingend', 'weiss nicht genau']}
	selectPlaceholder="Das Herzrasen beginnt jeweils xx."
	bind:selectValue={$answers.answer1_1_5}
	bind:selectCustomText={$answers.answer1_1_6}
	selectHasCustom={true}
/>

<StepsButtons {prevPage} {nextPage} />
