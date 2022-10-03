<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';

	let chapterName: string = 'Brustschmerzen';
	let prevPage: string = '2-2';
	let nextPage: string = '2-4';

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

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<SelectGroup
		selectName="1"
		selectLabel="Haben diese Beschwerden in letzter Zeit an Häufigkeit zugenommen?"
		selectOptions={[
			'nein',
			'ja, deutlich häufiger',
			'ja, etwas häufiger',
			'Die Beschwerden sind immer mehr oder weniger immer da.'
		]}
		selectPlaceholder=""
		bind:selectValue={$answers.answer2_3_1}
		bind:selectCustomText={$answers.answer2_3_2}
		selectHasCustom={false}
	/>

	<SelectGroup
		selectName="1"
		selectLabel="Wie lange halten die Beschwerden an?"
		selectOptions={[
			'Sekunden',
			'Minuten',
			'ca. 10 - 15 min',
			'ca. eine halbe bis eine Stunde',
			'Stunden',
			'Die Beschwerden sind immer mehr oder weniger immer da'
		]}
		selectPlaceholder=""
		bind:selectValue={$answers.answer2_3_3}
		bind:selectCustomText={$answers.answer2_3_4}
		selectHasCustom={false}
	/>

	<RadioGroup
		radioLabel="Kommen die Beschwerden am Anfang der Belastung und verschwinden dann bei weiterer Anstrengung wieder?"
		bind:radioGroup={$answers.answer2_3_5}
		bind:radioCustomText={$answers.answer2_3_6}
		radioPlaceholder=""
		radioHasCustom={false}
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
