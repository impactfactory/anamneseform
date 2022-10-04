<script lang="ts">
	import Bmi from '$lib/inputs/Bmi.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Risikofaktoren';
	let prevPage: string = '3-2';
	let nextPage: string = 'risks_1';
</script>

<YouAreHere {chapterName} />
<div in:fade={{ duration: 1000 }}>
	<!--
	- Hat jm. in Ihrer Verwandtschaft Herzprobleme? - Haben Sie Bluthochdruck? - Haben Sie eine
	Fettstoffwechselstörung? - Rauchen Sie? - Haben Sie Diabetes? - Wie aktiv ist ihr Lebensstil? -
	Wie ernähren Sie sich? - Leiden Sie an einer Schlaf - Wie stressvoll ist Ihr Alltag - Leiden Sie
	an einer rheumatischen Erkrankung - Leiden Sie an einer Niereninsuffizienz? --->

	<Bmi />
</div>
<StepsButtons {prevPage} {nextPage} />
