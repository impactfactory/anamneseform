<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';
	import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';

	let chapterName: string = 'Atemnot';
	let prevPage: string = '3-1';
	let nextPage: string;

	let selectLabel: string;
	let selectOptions: string[];
	let selectPlaceholder: string;
	let selectValue: string;
	let selectCustomText: string;
	let selectName: string;
	let selectHasCustom: boolean;

	// navigational logic: define next page url according choice of main symptoms
	if (!$answers.answer0.includes('4') && !$answers.answer0.includes('5')) {
		nextPage = '/zusammenfassung';
	}

	if ($answers.answer0.includes('4')) {
		nextPage = '4-1';
	} else {
		if ($answers.answer0.includes('5')) {
			nextPage = '5-1';
		}
	}
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	{#if $answers.answer3_1_1 == 'ja, nur bei Anstrengung' || $answers.answer3_1_1 == 'ja, in Ruhe und bei Anstrengung'}
		<SelectGroup
			selectName="1"
			selectLabel="Wie stark ist ihre Lebensqualität im Alltag durch die Atemprobleme  eingeschränkt?"
			selectOptions={['gar nicht', 'leicht', 'mässig', 'stark']}
			selectPlaceholder=""
			bind:selectValue={$answers.answer3_2_1}
			selectCustomText=""
			selectHasCustom={false}
		/>
	{/if}

	<RadioGroup
		radioLabel="Ist bei ihnen eine Lungenerkrankung bekannt ?"
		bind:radioGroup={$answers.answer3_2_2}
		bind:radioCustomText={$answers.answer3_2_3}
		radioPlaceholder="Welche Lungenerkrankung?"
		radioHasCustom={true}
	/>

	<CheckboxGroup
		checkboxLabel="Treten andere Symptome zusammen mit den Atemproblemen auf?"
		boxes={[
			'Enge im Brustbereich',
			'Schwindel',
			'Herzrasen',
			'Herzstolpern',
			'unregelmäßiger Herzschlag',
			'nein, keine'
		]}
		bind:checkboxGroup={$answers.answer3_2_4}
		bind:checkboxCustomText={$answers.answer3_2_5}
		checkboxPlaceholder="Welche anderen Symptome treten mit den Atemproblemen auf?"
		checkboxHasCustom={true}
		custom=""
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
