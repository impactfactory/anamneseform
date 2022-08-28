<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';
	import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Herzrasen';
	let prevPage: string = '/fragen/1-2';
	let nextPage: string = '/fragen/2-0';

	let radioLabel: string;
	let radioGroup: string;
	let radioCustomText: string;
	let radioPlaceholder: string;

	let checkboxLabel: string;
	let checkboxGroup: string;
	let boxes: string[];
	let checkboxCustomText: string;
	let checkboxHasCustom: boolean;
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<RadioGroup
		radioLabel="Können Sie das Herzrasen durch etwas auslösen?"
		bind:radioGroup={$answers.answer1_3_1}
		bind:radioCustomText={$answers.answer1_3_2}
		radioPlaceholder="Bitte beschreiben Sie, wie Sie es auslösen können..."
	/>

	<RadioGroup
		radioLabel="Können Sie das Herzrasen durch etwas beenden?"
		bind:radioGroup={$answers.answer1_3_3}
		bind:radioCustomText={$answers.answer1_3_4}
		radioPlaceholder="Bitte beschreiben Sie, wie Sie es beenden können..."
	/>

	<CheckboxGroup
		checkboxLabel="Wurde dieses Herzrasen schon einmal behandelt?"
		boxes={['medikamentös', 'mit Herzkatheter', 'unbehandelt']}
		bind:checkboxGroup={$answers.answer1_3_5}
		bind:checkboxCustomText={$answers.answer1_3_6}
	/>

	<CheckboxGroup
		checkboxLabel="Wie fühlen Sie den Herzschlag?"
		boxes={['sehr schnell', 'mässig schnell', 'regelmässig aufeinander folgend', 'unregelmässig']}
		bind:checkboxGroup={$answers.answer1_3_7}
		bind:checkboxCustomText={$answers.answer1_3_8}
		checkboxPlaceholder="Bitte beschreiben Sie..."
		checkboxHasCustom={true}
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
