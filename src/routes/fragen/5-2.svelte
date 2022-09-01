<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'andere Herzphänomene';
	let prevPage: string = '5-1';
	let nextPage: string = '5-3';
</script>

<Exit />

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<p>Fragen über Fragen</p>
</div>
<StepsButtons {prevPage} {nextPage} />
