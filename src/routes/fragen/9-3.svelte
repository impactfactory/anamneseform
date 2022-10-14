<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Ödem';
	let prevPage: string = '9-2';
	let nextPage: string = 'risks_1';
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>potentiell weitere Fragen</div>
<StepsButtons {prevPage} {nextPage} />
