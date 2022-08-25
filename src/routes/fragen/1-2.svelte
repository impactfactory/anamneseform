<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';

	let chapterName: string = 'Herzrasen';
	let percentage: number = 30;
	let prevPage: string = '1-1';
	let nextPage: string = '1-3';
	let symptoms = ['Schwindel', 'Brustenge', 'Brustschmerzen', 'Luftprobleme'];
</script>

<Exit />

<YouAreHere {chapterName} {percentage} />

<fieldset>
	<div class="form-control w-full max-w-xs mt-4">
		<label class="label">Wie hört das Herzrasen auf?</label>
		<select class="select select-bordered" bind:value={$answers.answer1_2_1}>
			<option value="">Bitte wählen Sie</option>
			<option>plötzlich</option>
			<option>langsam abklingend</option>
			<option>weiss nicht genau</option>
			<option value="custom">anderes</option>
		</select>
	</div>
	{#if $answers.answer1_2_1 == 'custom'}
		<textarea
			class="textarea textarea-bordered w-full mt-4"
			bind:value={$answers.answer1_2_2}
			placeholder="Es hört xxxx auf."
		/>
	{/if}
</fieldset>

<fieldset class="checkboxgroup py-2 w-full">
	<legend class="pt-4 pb-1 font-semibold text-sm"
		>Haben sie begleitende Symptome in dieser Zeit?</legend
	>
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
			class="textarea textarea-bordered w-full mt-4"
			bind:value={$answers.answer1_2_5}
			placeholder="Beschreiben Sie Ihre Symptome..."
		/>
	{/if}
</fieldset>

<fieldset>
	<div class="form-control w-full max-w-xs mt-4">
		<label class="label">Seit wann kennen Sie dieses Herzrasen?</label>
		<select class="select select-bordered" bind:value={$answers.answer1_2_6}>
			<option value="">Bitte wählen Sie</option>
			<option>schon Jahre</option>
			<option>erst seit Kurzem</option>
			<option>ich hatte es früher, dann lange nicht</option>
			<option value="custom">anderes</option>
		</select>
	</div>
	{#if $answers.answer1_2_6 == 'custom'}
		<textarea
			class="textarea textarea-bordered w-full mt-4"
			bind:value={$answers.answer1_2_7}
			placeholder="Das Herzrasen dauert jeweils xx."
		/>
	{/if}
</fieldset>

<StepsButtons {prevPage} {nextPage} />
