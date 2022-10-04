<script lang="ts">
	import Bmi from '$lib/inputs/Bmi.svelte';
	import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Risikofaktoren';
	let prevPage: string = '3-2';
	let nextPage: string = 'risks_1';

	let checkboxLabel: string;
	let checkboxGroup: string;
	let boxes: string[];
	let checkboxCustomText: string;
	let checkboxPlaceholder: string;
	let checkboxHasCustom: boolean;
	let custom: string;

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

	let weight: number;
	let height: number;
	let hip: number;
	let gender: string;
</script>

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<!--
	- Hat jm. in Ihrer Verwandtschaft Herzprobleme? - Haben Sie Bluthochdruck? - Haben Sie eine
	Fettstoffwechselstörung? - Rauchen Sie? - Haben Sie Diabetes? - Wie aktiv ist ihr Lebensstil? -
	Wie ernähren Sie sich? - Leiden Sie an einer Schlaf - Wie stressvoll ist Ihr Alltag - Leiden Sie
	an einer rheumatischen Erkrankung - Leiden Sie an einer Niereninsuffizienz? --->

	<Bmi
		bind:weight={$answers.risk1_1}
		bind:height={$answers.risk1_2}
		bind:taille={$answers.risk1_3}
		bind:hip={$answers.risk1_4}
		bind:gender={$answers.risk1_5}
	/>
</div>
<StepsButtons {prevPage} {nextPage} />
