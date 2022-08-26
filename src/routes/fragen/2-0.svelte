<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	let prevPage: string = '1-3';
	let nextPage: string = '';
</script>

<Exit />

<h2 class="font-medium">Haben Sie "Herzstolpern"?</h2>

<p>
	"Herzstolpern" bezeichnet die Erfahrung, dass der Herzschlag zu früh schlägt oder pausiert und
	dann heftiger klopft. Beklommenheitsgefühl, Angst- oder Panikzustände und Schweißausbrüche können
	Begleiterscheinungen sein.
</p>

<fieldset class="chapteropener">
	<div class="form-control items-center">
		<label class="label cursor-pointer py-4 w-24">
			<span class="label-text">ja</span>
			<input type="radio" class="radio radio-md" bind:group={$answers.answer2_0} value="2-1" />
		</label>
	</div>
	<div class="form-control items-center">
		<label class="label cursor-pointer py-4 w-24">
			<span class="label-text">nein</span>
			<input type="radio" class="radio radio-md" bind:group={$answers.answer2_0} value="3-0" />
		</label>
	</div>
</fieldset>

<StepsButtons {prevPage} nextPage={$answers.answer2_0} />
