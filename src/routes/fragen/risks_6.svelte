<script lang="ts">
	import RadioTriple from '$lib/inputs/RadioTriple.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Risikofaktoren';
	let prevPage: string = 'risks_4';
	let nextPage: string = '/zusammenfassung';

	let radioLabel: string;
	let radioGroup: string;
	let radioCustomText: string;
	let radioPlaceholder: string;
	let radioHasCustom: boolean;
</script>

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<RadioTriple
		radioLabel="Haben Sie eine Niereninsuffizienz?"
		bind:radioGroup={$answers.risk6_1}
		bind:radioCustomText={$answers.risk6_2}
		radioPlaceholder="Bitte geben Sie Ihnen bekannte Details an:"
		radioHasCustom={true}
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
