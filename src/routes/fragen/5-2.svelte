<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';

	let chapterName: string = 'Herzstolpern';
	let prevPage: string = '5-1';
	let nextPage: string = '5-3';

	let selectLabel: string;
	let selectOptions: string[];
	let selectPlaceholder: string;
	let selectValue: string;
	let selectCustomText: string;
	let selectName: string;
	let selectHasCustom: boolean;
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<SelectGroup
		selectName="1"
		selectLabel="Wie hört das Herzstolpernd jeweils auf?"
		selectOptions={['plötzlich', 'langsam abnehmend', 'weiss nicht genau']}
		selectPlaceholder="Bitte beschreiben Sie wie das Herzstolpern aufhört:"
		bind:selectValue={$answers.answer5_2_1}
		bind:selectCustomText={$answers.answer5_2_2}
		selectHasCustom={true}
	/>

	<SelectGroup
		selectName="2"
		selectLabel="Seit wann erfahren Sie das Herzstolpern?"
		selectOptions={['schon Jahre', 'erst seit Kurzem', 'ich hatte es früher, dann lange nicht']}
		selectPlaceholder="Bitte beschreiben Sie wie lange Sie den Schwindel schon kennen:"
		bind:selectValue={$answers.answer5_2_3}
		bind:selectCustomText={$answers.answer5_2_4}
		selectHasCustom={true}
	/>

	<SelectGroup
		selectName="3"
		selectLabel="Wann trat das Herzstolpern zuletzt auf?"
		selectOptions={[
			'heute',
			'gestern',
			'letzte Woche',
			'letzten Monat',
			'letztes Jahr',
			'vor Jahren'
		]}
		selectPlaceholder="Bitte beschreiben Sie wann der Schwindel zum letzten Mal auftrat:"
		bind:selectValue={$answers.answer5_2_5}
		bind:selectCustomText={$answers.answer5_2_6}
		selectHasCustom={true}
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
