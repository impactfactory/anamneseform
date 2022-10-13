<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';

	let chapterName: string = 'Herzrhythmusstörungen';
	let prevPage: string = '6-1';
	let nextPage: string = '6-3';

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
		selectLabel="Wie hören die Herzrhythmusstörungen jeweils auf?"
		selectOptions={['plötzlich', 'langsam abnehmend', 'weiss nicht genau']}
		selectPlaceholder="Bitte beschreiben Sie wie die Herzrhythmusstörungen aufhören:"
		bind:selectValue={$answers.answer6_2_1}
		bind:selectCustomText={$answers.answer6_2_2}
		selectHasCustom={true}
	/>

	<SelectGroup
		selectName="2"
		selectLabel="Seit wann erfahren Sie die Herzrhythmusstörungen?"
		selectOptions={['schon Jahre', 'erst seit Kurzem', 'ich hatte es früher, dann lange nicht']}
		selectPlaceholder="Bitte beschreiben Sie wie lange Sie die Herzrhythmusstörungen schon kennen:"
		bind:selectValue={$answers.answer6_2_3}
		bind:selectCustomText={$answers.answer6_2_4}
		selectHasCustom={true}
	/>

	<SelectGroup
		selectName="3"
		selectLabel="Wann traten die Herzrhythmusstörungen zuletzt auf?"
		selectOptions={[
			'heute',
			'gestern',
			'letzte Woche',
			'letzten Monat',
			'letztes Jahr',
			'vor Jahren'
		]}
		selectPlaceholder="Bitte beschreiben Sie wann die Herzrhythmusstörungen zum letzten Mal auftraten:"
		bind:selectValue={$answers.answer6_2_5}
		bind:selectCustomText={$answers.answer6_2_6}
		selectHasCustom={true}
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
