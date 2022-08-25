<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';

	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';

	let chapterName: string = 'Herzrasen';
	let percentage: number = 20;
	let prevPage: string = '1-0';
	let nextPage: string = '1-2';
</script>

<Exit />

<YouAreHere {chapterName} {percentage} />

<section class="py-4 px-1">
	<fieldset>
		<div class="form-control w-full max-w-xs">
			<label class="label">Wie häufig haben sie Herzrasen?</label>
			<select class="select select-bordered" bind:value={$answers.answer1_1_1}>
				<option value="">Bitte wählen Sie</option>
				<option>mehrmals täglich</option>
				<option>einmal täglich</option>
				<option>einmal pro Woche</option>
				<option>alle paar Monate</option>
				<option>sehr unterschiedlich</option>
				<option>mal häufig dann lange Zeit nichts</option>
				<option>sehr selten</option>
				<option value="custom">anderes</option>
			</select>
		</div>

		{#if $answers.answer1_1_1 == 'custom'}
			<textarea
				class="textarea textarea-bordered w-full mt-4"
				bind:value={$answers.answer1_1_2}
				placeholder="Das Herzrasen tritt xxxx auf."
			/>
		{/if}
	</fieldset>

	<fieldset>
		<div class="form-control w-full max-w-xs mt-4">
			<label class="label">Wie lange hält das Herzrasen an?</label>
			<select class="select select-bordered" bind:value={$answers.answer1_1_3}>
				<option value="">Bitte wählen Sie</option>
				<option>nur Sekunden</option>
				<option>ca. eine halbe Minute</option>
				<option>ca. 1-2 Minuten</option>
				<option>ca. eine halbe Stunde</option>
				<option>mehrere Stunden</option>
				<option>mal nur kurz für Minuten mal Stunden</option>
				<option value="custom">anderes</option>
			</select>
		</div>

		{#if $answers.answer1_1_3 == 'custom'}
			<textarea
				class="textarea textarea-bordered w-full mt-4"
				bind:value={$answers.answer1_1_4}
				placeholder="Das Herzrasen dauert jeweils xx."
			/>
		{/if}
	</fieldset>

	<fieldset>
		<div class="form-control w-full max-w-xs mt-4">
			<label class="label">Wie beginnt das Herzrasen?</label>
			<select class="select select-bordered" bind:value={$answers.answer1_1_5}>
				<option value="">Bitte wählen Sie</option>
				<option>plötzlich</option>
				<option>langsam anklingend</option>
				<option>weiss nicht genau</option>
				<option value="custom">anderes</option>
			</select>
		</div>

		{#if $answers.answer1_1_5 == 'custom'}
			<textarea
				class="textarea textarea-bordered w-full mt-4"
				bind:value={$answers.answer1_1_6}
				placeholder="Das Herzrasen beginnt jeweils xx."
			/>
		{/if}
	</fieldset>
</section>

<StepsButtons {prevPage} {nextPage} />
