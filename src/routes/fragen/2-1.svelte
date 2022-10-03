<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';

	let chapterName: string = 'Brustschmerzen';
	let prevPage: string = '';
	let nextPage: string = '2-2';

	let checkboxLabel: string;
	let checkboxGroup: string;
	let boxes: string[];
	let checkboxCustomText: string;
	let checkboxPlaceholder: string;
	let checkboxHasCustom: boolean;
	let custom: string;

	let selectLabel: string;
	let selectOptions: string[];
	let selectPlaceholder: string;
	let selectValue: string;
	let selectCustomText: string;
	let selectName: string;
	let selectHasCustom: boolean;

	//backwards navigational logic
	if ($answers.answer0.includes('1')) {
		prevPage = '1-3';
	} else {
		prevPage = '0-0';
	}
</script>

<Exit />

<YouAreHere {chapterName} />

<div in:fade={{ duration: 1000 }}>
	<CheckboxGroup
		checkboxLabel="Welche Art Missempfindungen / Beschwerden in der Brust sind es?"
		boxes={['Druck oder Brennen', 'Stechen in der Brust']}
		bind:checkboxGroup={$answers.answer2_1_1}
		bind:checkboxCustomText={$answers.answer2_1_2}
		checkboxPlaceholder="Beschreiben Sie bitte die Art der Beschwerden!"
		checkboxHasCustom={true}
	/>

	<CheckboxGroup
		checkboxLabel="Wo sind diese Beschwerden?"
		boxes={[
			'hinter dem Brustbein',
			'im linken Arm',
			'in der linken Brusthälfte',
			'in der gesamten Brust',
			'im Kiefer oder in den Zähnen',
			'im Halsbereich',
			'im Nacken',
			'zwischen den Schulterblättern'
		]}
		bind:checkboxGroup={$answers.answer2_1_3}
		bind:checkboxCustomText={$answers.answer2_1_4}
		checkboxPlaceholder="Beschreiben sie die Lokalisation der Beschwerden!"
		checkboxHasCustom={true}
	/>

	<SelectGroup
		selectName="1"
		selectLabel="Sind die Beschwerden / Missempfindungen eher flächig oder lassen sie sich eher punktuell mit dem Finger zeigen?"
		selectOptions={['flächig', ' eher punktuell']}
		selectPlaceholder=""
		bind:selectValue={$answers.answer2_1_5}
		bind:selectCustomText={$answers.answer2_1_6}
		selectHasCustom={false}
	/>
</div>

<StepsButtons {prevPage} {nextPage} />
