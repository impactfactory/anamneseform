<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	let prevPage: string = '2-0';
	let nextPage: string = '';
</script>

<Exit />

<h2 class="font-medium">Haben Sie "Herzklopfen"?</h2>

<p>"Herzklopfen" bezeichnet die Erfahrung, dass das Herz ungewöhnlich stark klopft</p>

<div class="form-control items-center">
	<label class="label cursor-pointer py-4 w-24">
		<span class="label-text font-bold">ja</span>
		<input type="radio" class="radio radio-lg" bind:group={$answers.answer3_0} value="3-1" />
	</label>
</div>
<div class="form-control items-center">
	<label class="label cursor-pointer py-4 w-24">
		<span class="label-text font-bold">nein</span>
		<input type="radio" class="radio radio-lg" bind:group={$answers.answer3_0} value="4-0" />
	</label>
</div>

<StepsButtons {prevPage} nextPage={$answers.answer3_0} />
