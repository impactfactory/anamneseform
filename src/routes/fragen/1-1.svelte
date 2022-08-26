<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';

	let chapterName: string = 'Herzrasen';
	let prevPage: string = '/fragen/1-0';
	let nextPage: string = '/fragen/1-2';
	let label: string;
	let options: string[];
	let placeholder: string;
	let value1: string;
	let value2: string;
	let name: string;
</script>

<Exit />

<YouAreHere {chapterName} />

<SelectGroup
	name="1"
	label="Wie häufig haben sie Herzrasen?"
	options={[
		'nur Sekunden',
		'ca. eine halbe Minute',
		'ca. 1-2 Minuten',
		'ca. eine halbe Stunde',
		'mehrere Stunden',
		'mal nur kurz für Minuten mal Stunden'
	]}
	placeholder="Hier ist ein Test-Platzhalter"
	bind:value1={$answers.answer1_1_1}
	bind:value2={$answers.answer1_1_2}
/>

<SelectGroup
	name="2"
	label="Wie lange hält das Herzrasen an?"
	options={['mehrmals täglich', 'einmal täglich', 'alle paar Monate']}
	placeholder="Das Herzrasen dauert jeweils xx."
	bind:value1={$answers.answer1_1_3}
	bind:value2={$answers.answer1_1_4}
/>

<SelectGroup
	name="3"
	label="Wie beginnt das Herzrasen?"
	options={['plötzlich', 'langsam anklingend', 'weiss nicht genau']}
	placeholder="Das Herzrasen beginnt jeweils xx."
	bind:value1={$answers.answer1_1_5}
	bind:value2={$answers.answer1_1_6}
/>

<StepsButtons {prevPage} {nextPage} />
