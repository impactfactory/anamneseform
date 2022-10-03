<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';
	import Textarea from '$lib/inputs/Textarea.svelte';
	import Number from '$lib/inputs/Number.svelte';

	let chapterName: string = 'Atemnot';
	let prevPage: string = '';
	let nextPage: string = '3-2';

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
	let checkboxPlaceholder: string;
	let checkboxHasCustom: boolean;
	let custom: string;

	let radioLabel: string;
	let radioGroup: string;
	let radioCustomText: string;
	let radioPlaceholder: string;
	let radioHasCustom: boolean;

	let number: number;

	//backwards navigational logic
	if ($answers.answer0.includes('2')) {
		prevPage = '2-3';
	} else {
		if ($answers.answer0.includes('1')) {
			prevPage = '1-3';
		} else {
			prevPage = '0-0';
		}
	}
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<SelectGroup
		selectName="1"
		selectLabel="Haben sie Probleme mit dem Atmen (Atemnot) bei Anstrengung oder in Ruhe?"
		selectOptions={['nein', 'ja, nur bei Anstrengung', 'ja, in Ruhe und bei Anstrengung']}
		selectPlaceholder=""
		bind:selectValue={$answers.answer3_1_1}
		selectCustomText=""
		selectHasCustom={false}
	/>

	{#if $answers.answer3_1_1 == 'ja, nur bei Anstrengung'}
		<SelectGroup
			selectName="2"
			selectLabel="Bei welchen Anstrengungsniveau treten die Atemprobleme ungefähr auf?"
			selectOptions={[
				'bei geringsten Belastung',
				'bei leichter Belastung',
				'bei mittlerer Belastung',
				'bei hoher Belastung'
			]}
			selectPlaceholder=""
			bind:selectValue={$answers.answer3_1_3}
			selectCustomText=""
			selectHasCustom={false}
		/>

		<CheckboxGroup
			checkboxLabel="Bei welchen typischen Tätigkeiten treten die Atemproblem auf?"
			boxes={['beim Gehen auf einer graden Strecke', 'beim Bergaufgehen', 'beim Treppensteigen']}
			bind:checkboxGroup={$answers.answer3_1_4}
			bind:checkboxCustomText={$answers.answer3_1_5}
			checkboxPlaceholder="Bitte beschreiben Sie die typische Tätigkeiten bei der die Atemproblem auftreten:"
			checkboxHasCustom={true}
			custom=""
		/>

		<SelectGroup
			selectName="3"
			selectLabel="Wenn sie die die Anstrengung stoppen, wie schnell verschwinden die Atemprobleme?"
			selectOptions={[
				'innerhalb einer Minute',
				'innerhalb von ein paar Minuten',
				'halten lange an'
			]}
			selectPlaceholder=""
			bind:selectValue={$answers.answer3_1_6}
			selectCustomText=""
			selectHasCustom={false}
		/>
	{/if}

	{#if $answers.answer3_1_1 == 'ja, in Ruhe und bei Anstrengung'}
		<RadioGroup
			radioLabel="Treten die Atemprobleme anfallsartig auf?"
			bind:radioGroup={$answers.answer3_1_7}
			radioCustomText=""
			radioPlaceholder=""
			radioHasCustom={false}
		/>

		{#if $answers.answer3_1_7 == 'ja'}
			<Number label="Wieviel Minuten halten die Atemprobleme an?" number={$answers.answer3_1_8} />
		{/if}
	{/if}
</div>
<StepsButtons {prevPage} {nextPage} />
