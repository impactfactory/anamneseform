<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';
	import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';

	let chapterName: string = 'Bewusstseinsverlust';
	let prevPage: string = '7-1';
	let nextPage: string = '7-3';

	let selectLabel: string;
	let selectOptions: string[];
	let selectPlaceholder: string;
	let selectValue: string;
	let selectCustomText: string;
	let selectName: string;
	let selectHasCustom: boolean;

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
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<SelectGroup
		selectName="1"
		selectLabel="Wann trat zuletzt ein Bewusstseinsverlust auf?"
		selectOptions={[
			'heute',
			'gestern',
			'letzte Woche',
			'letzten Monat',
			'letztes Jahr',
			'vor Jahren'
		]}
		selectPlaceholder="Bitte beschreiben Sie wann ein Bewusstseinsverlust zum letzten Mal auftrat:"
		bind:selectValue={$answers.answer7_2_1}
		bind:selectCustomText={$answers.answer7_2_2}
		selectHasCustom={true}
	/>

	<RadioGroup
		radioLabel="Haben Sie sich bei einem Bewusstseinsverlust jemals verletzt?"
		bind:radioGroup={$answers.answer7_2_3}
		bind:radioCustomText={$answers.answer7_2_4}
		radioPlaceholder="Bitte beschreiben Sie, wie Sie sich verletzt haben:"
		radioHasCustom={true}
	/>

	<CheckboxGroup
		checkboxLabel="Gibt es begleitende Symptome bei einem Bewusstseinsverlust?"
		boxes={[
			'Schwindel',
			'Brustenge',
			'Brustschmerzen',
			'Atemprobleme',
			'Einnässen',
			'Zungenbiss',
			'nein, keine'
		]}
		bind:checkboxGroup={$answers.answer7_2_5}
		checkboxCustomText={$answers.answer7_2_6}
		checkboxPlaceholder="Bitte beschreiben Sie begleitende Symptome: "
		checkboxHasCustom={true}
		custom=""
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
