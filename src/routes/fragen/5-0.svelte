<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	let prevPage: string = '/fragen/4-0';
	let nextPage: string = '';
</script>

<Exit />

<h2 class="font-medium">Haben Sie etwas anderes?</h2>

<p>
	Falls alles nicht zugetroffen hat bisjetzt, helfen die Ihnen die folgenden Fragen, genauer zu
	spezifizieren, was Sie erfahren.
</p>

<div class="form-control items-center">
	<label class="label cursor-pointer py-4 w-24">
		<span class="label-text font-bold">ja</span>
		<input type="radio" class="radio radio-lg" bind:group={$answers.answer5_0} value="5-1" />
	</label>
</div>
<div class="form-control items-center">
	<label class="label cursor-pointer py-4 w-24">
		<span class="label-text font-bold">nein</span>
		<input
			type="radio"
			class="radio radio-lg"
			bind:group={$answers.answer5_0}
			value="/zusammenfassung"
		/>
	</label>
</div>

<StepsButtons {prevPage} nextPage={$answers.answer5_0} />
