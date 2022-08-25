<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	let prevPage: string = '/';
	let nextPage: string = '';
</script>

<Exit />

<h2 class="font-medium">Haben Sie "Herzrasen"?</h2>

<p>
	"Herzrasen" bezeichnet die Erfahrung, dass das Herz ohne körperliche Anstrengung zu schnell
	schlägt. Nicht selten wird Herzrasen von Symptomen wie Schwindelgefühl, Unruhe oder einem Druck
	auf der Brust begleitet.
</p>

<div class="form-control items-center">
	<label class="label cursor-pointer py-4 w-24">
		<span class="label-text font-bold">ja</span>
		<input type="radio" class="radio radio-lg" bind:group={$answers.answer1_0} value="1-1" />
	</label>
</div>
<div class="form-control items-center">
	<label class="label cursor-pointer py-4 w-24">
		<span class="label-text font-bold">nein</span>
		<input type="radio" class="radio radio-lg" bind:group={$answers.answer1_0} value="2-0" />
	</label>
</div>

<StepsButtons {prevPage} nextPage={$answers.answer1_0} />
