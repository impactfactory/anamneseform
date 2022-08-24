<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';

	let chapterName: string = 'Herzrasen';
	let prevPage: string = '1-3';
	let nextPage: string = '2-0';
</script>

<Exit />

<YouAreHere {chapterName} />

<div>
	<label>Wie hört das Herzrasen auf?</label>
	<select class="select select-bordered" bind:value={$answers.answer1}>
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
{#if $answers.answer1 == 'custom'}
	<div>
		<textarea
			class="textarea textarea-bordered w-full"
			bind:value={$answers.answer2}
			placeholder="Das Herzrasen tritt xxxx auf."
		/>
	</div>
{/if}

<div>
	<label>Haben sie begleitende Symptome in dieser Zeit?</label>
	<select class="select select-bordered" bind:value={$answers.answer3}>
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
{#if $answers.answer3 == 'custom'}
	<div>
		<textarea
			class="textarea textarea-bordered w-full"
			bind:value={$answers.answer4}
			placeholder="Das Herzrasen dauert jeweils xx."
		/>
	</div>
{/if}

<div>
	<label>Seit wann kennen Sie dieses Herzrasen?</label>
	<select class="select select-bordered" bind:value={$answers.answer5}>
		<option value="">Bitte wählen Sie</option>
		<option>plötzlich</option>
		<option>langsam anklingend</option>
		<option>weiss nicht genau</option>
		<option value="custom">anderes</option>
	</select>
</div>
{#if $answers.answer5 == 'custom'}
	<div>
		<textarea
			class="textarea textarea-bordered w-full"
			bind:value={$answers.answer6}
			placeholder="Das Herzrasen dauert jeweils xx."
		/>
	</div>
{/if}

<StepsButtons {prevPage} {nextPage} />
