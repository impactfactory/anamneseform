<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';

	let chapterName: string = 'Ödem';
	let prevPage: string = '9-1';
	let nextPage: string = '9-3';

	let radioLabel: string;
	let radioGroup: string;
	let radioCustomText: string;
	let radioPlaceholder: string;
	let radioHasCustom: boolean;

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
	<RadioGroup
		radioLabel="Hatten Sie eine Beinvenentrhombose?"
		bind:radioGroup={$answers.answer9_2_1}
		bind:radioCustomText={$answers.answer9_2_2}
		radioPlaceholder="Bitte beschreiben Sie wann und wie behandelt:"
		radioHasCustom={true}
	/>

	<SelectGroup
		selectName="1"
		selectLabel="Wie hat sich Ihr Ödem entwickelt?"
		selectOptions={['plötzlich', 'langsam zunehmend', 'ich weiss nicht']}
		selectPlaceholder="Bitte beschreiben Sie, wie es sich entwickelt hat:"
		bind:selectValue={$answers.answer9_2_3}
		bind:selectCustomText={$answers.answer9_2_4}
		selectHasCustom={true}
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
