<script lang="ts">
	import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Risikofaktoren';
	let prevPage: string = '3-2';
	let nextPage: string = 'risks_1';

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

	let radioLabel: string;
	let radioGroup: string;
	let radioCustomText: string;
	let radioPlaceholder: string;
	let radioHasCustom: boolean;
</script>

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
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
		custom=""
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

	<RadioGroup
		radioLabel="Können Sie das Herzrasen durch etwas beenden?"
		bind:radioGroup={$answers.answer1_3_3}
		bind:radioCustomText={$answers.answer1_3_4}
		radioPlaceholder="Bitte beschreiben Sie, wie Sie es beenden können..."
		radioHasCustom={true}
	/>

	<CheckboxGroup />
	<SelectGroup />
	<RadioGroup />
</div>
<StepsButtons {prevPage} {nextPage} />
