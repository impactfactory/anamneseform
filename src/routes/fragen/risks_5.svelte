<script lang="ts">
	import RadioTriple from '$lib/inputs/RadioTriple.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Risikofaktoren';
	let prevPage: string = 'risks_4';
	let nextPage: string = 'risks_6';

	let radioLabel: string;
	let radioGroup: string;
	let radioCustomText: string;
	let radioPlaceholder: string;
	let radioHasCustom: boolean;
</script>

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<RadioTriple
		radioLabel="Haben Sie Schlaf-Apnoe?"
		bind:radioGroup={$answers.risk5_1}
		bind:radioCustomText={$answers.risk5_2}
		radioPlaceholder="Bitte geben Sie Ihnen bekannte Details an:"
		radioHasCustom={true}
	/>

	<RadioTriple
		radioLabel="Haben Sie Stress?"
		bind:radioGroup={$answers.risk5_3}
		bind:radioCustomText={$answers.risk5_4}
		radioPlaceholder="Bitte geben Sie Ihnen bekannte Details an:"
		radioHasCustom={true}
	/>

	<RadioTriple
		radioLabel="Haben Sie Rheuma?"
		bind:radioGroup={$answers.risk5_5}
		bind:radioCustomText={$answers.risk5_6}
		radioPlaceholder="Bitte geben Sie Ihnen bekannte Details an:"
		radioHasCustom={true}
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
