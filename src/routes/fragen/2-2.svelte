<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
	import Textarea from '$lib/inputs/Textarea.svelte';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';

	let chapterName: string = 'Brustschmerzen';
	let prevPage: string = '2-1';
	let nextPage: string = '2-3';

	let checkboxLabel: string;
	let checkboxGroup: string;
	let boxes: string[];
	let checkboxCustomText: string;
	let checkboxPlaceholder: string;
	let checkboxHasCustom: boolean;
	let custom: string;

	let name: string;
	let label: string;
	let customText: string;
	let placeholder: string;

	let selectLabel: string;
	let selectOptions: string[];
	let selectPlaceholder: string;
	let selectValue: string;
	let selectCustomText: string;
	let selectName: string;
	let selectHasCustom: boolean;

	let test = 'A';
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<CheckboxGroup
		checkboxLabel="Wann treten diese Beschwerden auf?"
		boxes={[
			'bei leichter körperlicher Anstrengung',
			'bei deutlicher körperlicher Anstrengung',
			'bei Stress',
			'in Ruhe'
		]}
		bind:checkboxGroup={$answers.answer2_2_1}
		bind:checkboxCustomText={$answers.answer2_2_2}
		checkboxPlaceholder=""
		checkboxHasCustom={false}
		custom=""
	/>

	{#if $answers.answer2_2_1.includes('bei leichter körperlicher Anstrengung') || $answers.answer2_2_1.includes('bei deutlicher körperlicher Anstrengung')}
		<Textarea
			name="1"
			label=""
			bind:customText={$answers.answer2_2_3}
			placeholder="Beschreiben sie eine typische Belastung, bei welcher die Beschwerden auftreten"
		/>
	{/if}

	<SelectGroup
		selectName="1"
		selectLabel="Wie häufig haben sie diese Beschwerden?"
		selectOptions={[
			'mehrmals täglich',
			'täglich',
			'mehrmals in der Woche',
			'ungefähr einmal in der Woche',
			'ein paar mal im Monat',
			'gelegentlich',
			'bis jetzt nur einmal gehabt',
			'bis jetzt nur ein paarmal gehabt'
		]}
		selectPlaceholder=""
		bind:selectValue={$answers.answer2_2_4}
		bind:selectCustomText={$answers.answer2_2_5}
		selectHasCustom={false}
	/>

	<SelectGroup
		selectName="2"
		selectLabel="Seit wann kennen sie diese Beschwerden?"
		selectOptions={['seit ca. einer Woche', 'seit mehreren Wochen', 'seit Monaten', 'seit Jahren']}
		selectPlaceholder="Beschreiben sie, seit wann sie diese Beschwerden haben"
		bind:selectValue={$answers.answer2_2_6}
		bind:selectCustomText={$answers.answer2_2_7}
		selectHasCustom={true}
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
