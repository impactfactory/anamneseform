<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';
	import Textarea from '$lib/inputs/Textarea.svelte';

	let chapterName: string = 'Brustschmerzen';
	let prevPage: string = '2-3';
	let nextPage: string;

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

	let name: string;
	let label: string;
	let customText: string;
	let placeholder: string;

	// navigational logic: define next page url according choice of main symptoms

	if (
		!$answers.answer0.includes('3') &&
		!$answers.answer0.includes('4') &&
		!$answers.answer0.includes('5')
	) {
		nextPage = '/zusammenfassung';
	}

	if ($answers.answer0.includes('3')) {
		nextPage = '3-1';
	} else {
		if ($answers.answer0.includes('4')) {
			nextPage = '4-1';
		} else {
			if ($answers.answer0.includes('5')) {
				nextPage = '5-1';
			}
		}
	}
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<SelectGroup
		selectName="1"
		selectLabel="Reagieren die Beschwerden auf Nitro-Spray oder Kapseln?"
		selectOptions={['ja', 'nein', 'habe ich noch nicht probiert']}
		selectPlaceholder=""
		bind:selectValue={$answers.answer2_4_1}
		selectCustomText=""
		selectHasCustom={false}
	/>

	<RadioGroup
		radioLabel="Hatten Sie diese Beschwerden schon vorher einmal für einen gewissen Zeitraum und sind sie dann wieder einen längeren Zeitraum verschwunden?"
		bind:radioGroup={$answers.answer2_4_2}
		radioCustomText=""
		radioPlaceholder=""
		radioHasCustom={false}
	/>

	{#if $answers.answer2_4_2 == 'ja'}
		<SelectGroup
			selectName="2"
			selectLabel="Sind die Beschwerden zuvor durch einen Eingriff oder Massnahme wieder verschwunden?"
			selectOptions={[
				'nein',
				'ja, durch einen Stent',
				'ja, durch eine Bypass-Operation',
				'ja, durch Medikamente',
				'ja, durch eine andere Massnahme'
			]}
			selectPlaceholder=""
			bind:selectValue={$answers.answer2_4_3}
			selectCustomText=""
			selectHasCustom={false}
		/>

		{#if $answers.answer2_4_3.includes('ja, durch eine andere Massnahme')}
			<Textarea
				name="1"
				label=""
				bind:customText={$answers.answer2_4_4}
				placeholder="Welche Massnahme oder welcher Eingriff war das?"
			/>
		{/if}
	{/if}

	<SelectGroup
		selectName="3"
		selectLabel="Wann traten diese Beschwerden zuletzt auf?"
		selectOptions={['heute', 'gestern', 'vor ein paar Tagen', 'vor einer Woche', 'vor Monaten']}
		selectPlaceholder="Bitte beschreiben Sie, wann die Beschwerden zuletzt auftraten:"
		bind:selectValue={$answers.answer2_4_5}
		bind:selectCustomText={$answers.answer2_4_6}
		selectHasCustom={true}
	/>
</div>

<StepsButtons {prevPage} {nextPage} />
