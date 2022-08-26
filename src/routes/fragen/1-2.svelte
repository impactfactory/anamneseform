<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';

	let chapterName: string = 'Herzrasen';
	let percentage: number = 30;
	let prevPage: string = '/fragen/1-1';
	let nextPage: string = '/fragen/1-3';
	let symptoms = ['Schwindel', 'Brustenge', 'Brustschmerzen', 'Luftprobleme'];
</script>

<Exit />

<YouAreHere {chapterName} {percentage} />

<div class="form-control selectgroup">
	<label class="label">
		<span class="label-text">Wie hört das Herzrasen auf?</span>
	</label>
	<select class="select" bind:value={$answers.answer1_2_1}>
		<option value="" disabled>Bitte wählen Sie</option>
		<option>plötzlich</option>
		<option>langsam abklingend</option>
		<option>weiss nicht genau</option>
		<option value="custom">anderes</option>
	</select>
</div>
{#if $answers.answer1_2_1 == 'custom'}
	<textarea class="textarea" bind:value={$answers.answer1_2_2} placeholder="Es hört xxxx auf." />
{/if}

<fieldset class="checkboxgroup">
	<legend>Haben sie begleitende Symptome in dieser Zeit?</legend>
	{#each symptoms as symptom}
		<div class="form-control">
			<label class="cursor-pointer">
				<input
					type="checkbox"
					class=" checkbox checkbox-sm"
					value={symptom}
					bind:group={$answers.answer1_2_3}
				/>
				<span class="label-text ml-4">{symptom}</span>
			</label>
		</div>
	{/each}
	<div class="form-control">
		<label class="cursor-pointer">
			<input
				type="checkbox"
				class=" checkbox checkbox-sm"
				value="custom"
				bind:checked={$answers.answer1_2_4}
			/>
			<span class="label-text ml-4">anderes</span>
		</label>
	</div>

	{#if $answers.answer1_2_4}
		<textarea
			class="textarea"
			bind:value={$answers.answer1_2_5}
			placeholder="Beschreiben Sie Ihre Symptome..."
		/>
	{/if}
</fieldset>

<div class="form-control selectgroup">
	<label class="label">
		<span class="label-text">Seit wann kennen Sie dieses Herzrasen?</span>
	</label>
	<select class="select" bind:value={$answers.answer1_2_6}>
		<option value="">Bitte wählen Sie</option>
		<option>schon Jahre</option>
		<option>erst seit Kurzem</option>
		<option>ich hatte es früher, dann lange nicht</option>
		<option value="custom">anderes</option>
	</select>
</div>
{#if $answers.answer1_2_6 == 'custom'}
	<textarea
		class="textarea"
		bind:value={$answers.answer1_2_7}
		placeholder="Das Herzrasen dauert jeweils xx."
	/>
{/if}

<StepsButtons {prevPage} {nextPage} />
