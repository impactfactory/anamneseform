<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';

	let chapterName: string = 'Herzrasen';
	let prevPage: string = '/fragen/1-1';
	let nextPage: string = '/fragen/1-3';

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
</script>

<Exit />

<YouAreHere {chapterName} />

<SelectGroup
	selectName="1"
	selectLabel="Wie hört das Herzrasen auf?"
	selectOptions={['plötzlich', 'langsam abklingend', 'weiss nicht genau']}
	selectPlaceholder="Es hört ... auf."
	bind:selectValue={$answers.answer1_2_1}
	bind:vselectCustomText={$answers.answer1_2_2}
	selectHasCustom={true}
/>

<CheckboxGroup
	checkboxLabel="Haben sie begleitende Symptome in dieser Zeit?"
	boxes={['Schwindel', 'Brustenge', 'Brustschmerzen', 'Luftprobleme']}
	bind:checkboxGroup={$answers.answer1_2_3}
	bind:checkboxCustomText={$answers.answer1_2_5}
	checkboxPlaceholder="Welche?"
	checkboxHasCustom={true}
/>

<SelectGroup
	selectName="2"
	selectLabel="Seit wann kennen Sie dieses Herzrasen?"
	selectOptions={['schon Jahre', 'erst seit Kurzem', 'ich hatte es früher, dann lange nicht']}
	selectPlaceholder="Ich kenne es..."
	bind:selectValue={$answers.answer1_2_6}
	bind:selectCustomText={$answers.answer1_2_7}
	selectHasCustom={true}
/>

<StepsButtons {prevPage} {nextPage} />
