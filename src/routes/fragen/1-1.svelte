<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';

	let chapterName: string = 'Herzrasen';
	let prevPage: string = '/fragen/1-0';
	let nextPage: string = '/fragen/1-2';
</script>

<Exit />

<YouAreHere {chapterName} />

<fieldset class="selectgroup">
	<div class="form-control">
		<label class="label">
			<span class="label-text">Wie häufig haben sie Herzrasen?</span>
		</label>
		<select class="select" bind:value={$answers.answer1_1_1}>
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
			class="textarea"
			bind:value={$answers.answer1_1_2}
			placeholder="Das Herzrasen tritt xxxx auf."
		/>
	{/if}
</fieldset>

<fieldset class="selectgroup">
	<div class="form-control">
		<label class="label">
			<span class="label-text">Wie lange hält das Herzrasen an?</span>
		</label>

		<select class="select" bind:value={$answers.answer1_1_3}>
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
			class="textarea"
			bind:value={$answers.answer1_1_4}
			placeholder="Das Herzrasen dauert jeweils xx."
		/>
	{/if}
</fieldset>

<fieldset class="selectgroup">
	<div class="form-control">
		<label class="label">
			<span class="label-text">Wie beginnt das Herzrasen?</span>
		</label>
		<select class="select" bind:value={$answers.answer1_1_5}>
			<option value="">Bitte wählen Sie</option>
			<option>plötzlich</option>
			<option>langsam anklingend</option>
			<option>weiss nicht genau</option>
			<option value="custom">anderes</option>
		</select>
	</div>

	{#if $answers.answer1_1_5 == 'custom'}
		<textarea
			class="textarea"
			bind:value={$answers.answer1_1_6}
			placeholder="Das Herzrasen beginnt jeweils xx."
		/>
	{/if}
</fieldset>

<StepsButtons {prevPage} {nextPage} />
