<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	let prevPage: string = '3-0';
	let nextPage: string = '';
</script>

<Exit />

<h2 class="font-medium">Haben Sie unregelmässigen Herzschlag?</h2>

<p>"Herzrhythmus-Störungen" bezeichnet die Erfahrung, dass....</p>

<div class="form-control items-center">
	<label class="label cursor-pointer py-4 w-24">
		<span class="label-text font-bold">ja</span>
		<input type="radio" class="radio radio-lg" bind:group={$answers.answer4_0} value="4-1" />
	</label>
</div>
<div class="form-control items-center">
	<label class="label cursor-pointer py-4 w-24">
		<span class="label-text font-bold">nein</span>
		<input type="radio" class="radio radio-lg" bind:group={$answers.answer4_0} value="5-0" />
	</label>
</div>

<StepsButtons {prevPage} nextPage={$answers.answer4_0} />
