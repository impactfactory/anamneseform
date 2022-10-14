<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import RadioGroup from '$lib/inputs/RadioGroup.svelte';
	import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';

	let chapterName: string = 'Leistungsschwäche';
	let prevPage: string = '8-1';
	let nextPage: string = '8-3';
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>potentiell weitere Fragen</div>
<StepsButtons {prevPage} {nextPage} />
