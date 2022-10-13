<script lang="ts">
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';
	import RadioTriple from '$lib/inputs/RadioTriple.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Risikofaktoren';
	let prevPage: string = 'risks_3';
	let nextPage: string = 'risks_5';

	let radioLabel: string;
	let radioGroup: string;
	let radioCustomText: string;
	let radioPlaceholder: string;
	let radioHasCustom: boolean;
</script>

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<RadioTriple
		radioLabel="Haben Sie eine Fettstoffwechselstörung (HLP)?"
		bind:radioGroup={$answers.risk4_1}
		bind:radioCustomText={$answers.risk4_2}
		radioPlaceholder="Bitte geben Sie Ihnen bekannte Details an:"
		radioHasCustom={true}
	/>

	<RadioTriple
		radioLabel="Haben Sie Adipositas?"
		bind:radioGroup={$answers.risk4_3}
		bind:radioCustomText={$answers.risk4_4}
		radioPlaceholder="Bitte geben Sie Ihnen bekannte Details an:"
		radioHasCustom={true}
	/>

	<RadioTriple
		radioLabel="Haben Sie Bewegungsmangel?"
		bind:radioGroup={$answers.risk4_5}
		bind:radioCustomText={$answers.risk4_6}
		radioPlaceholder="Bitte geben Sie Ihnen bekannte Details an:"
		radioHasCustom={true}
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
