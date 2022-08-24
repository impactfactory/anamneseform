<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { answers } from '$lib/stores';
	import { text } from 'svelte/internal';

	let chapterName: string = 'Herzrasen';
	let percentage: number = 40;
	let prevPage: string = '1-2';
	let nextPage: string = '1-4';
	let treatments = ['ja (medikamentös)', 'ja (mit Herzkatheter)', 'keine'];
	let pulses = [
		'sehr schnell',
		'mässig schnell',
		'regelmässig aufeinander folgend',
		'unregelmässig'
	];
</script>

<Exit />

<YouAreHere {chapterName} {percentage} />

<fieldset class="radiogroup w-full">
	<legend class="pb-2 pt-3 text-sm font-semibold"
		>Können Sie das Herzrasen durch etwas auslösen?</legend
	>
	<div class="form-control">
		<label>
			<input type="radio" class="radio radio-sm" bind:group={$answers.answer1_3_1} value="ja" />
			<span class="label-text pl-4">ja</span>
		</label>
	</div>
	<div class="form-control">
		<label>
			<input type="radio" class="radio radio-sm" bind:group={$answers.answer1_3_1} value="nein" />
			<span class="label-text pl-4">nein</span>
		</label>
	</div>
	{#if $answers.answer1_3_1 == 'ja'}
		<textarea
			class="textarea textarea-bordered w-full"
			bind:value={$answers.answer1_3_2}
			placeholder="Bitte beschreiben Sie, wie Sie es auslösen können..."
		/>
	{/if}
</fieldset>

<fieldset class="radiogroup w-full">
	<legend class="pb-2 pt-3 text-sm font-semibold"
		>Können Sie das Herzrasen durch etwas beenden?</legend
	>
	<div class="form-control">
		<label>
			<input type="radio" class="radio radio-sm" bind:group={$answers.answer1_3_3} value="ja" />
			<span class="label-text pl-4">ja</span>
		</label>
	</div>
	<div class="form-control">
		<label>
			<input type="radio" class="radio radio-sm" bind:group={$answers.answer1_3_3} value="nein" />
			<span class="label-text pl-4">nein</span>
		</label>
	</div>
	{#if $answers.answer1_3_3 == 'ja'}
		<textarea
			class="textarea textarea-bordered w-full"
			bind:value={$answers.answer1_3_4}
			placeholder="Bitte beschreiben Sie, wie Sie es beenden können..."
		/>
	{/if}
</fieldset>

<fieldset class="checkboxgroup py-2 w-full">
	<legend class="pt-4 pb-1 font-semibold text-sm"
		>Wurde dieses Herzrasen schon einmal behandelt?</legend
	>
	{#each treatments as treatment}
		<div class="form-control">
			<label class="cursor-pointer">
				<input
					type="checkbox"
					class=" checkbox checkbox-sm"
					value={treatment}
					bind:group={$answers.answer1_3_5}
				/>
				<span class="label-text ml-4">{treatment}</span>
			</label>
		</div>
	{/each}
</fieldset>

<fieldset class="checkboxgroup py-2 w-full">
	<legend class="pt-4 pb-1 font-semibold text-sm">Wie fühlen Sie den Herzschlag?</legend>
	{#each pulses as pulse}
		<div class="form-control">
			<label class="cursor-pointer">
				<input
					type="checkbox"
					class=" checkbox checkbox-sm"
					value={pulse}
					bind:group={$answers.answer1_3_6}
				/>
				<span class="label-text ml-4">{pulse}</span>
			</label>
		</div>
	{/each}
	<div class="form-control">
		<label class="cursor-pointer">
			<input type="checkbox" class=" checkbox checkbox-sm" bind:checked={$answers.answer1_3_7} />
			<span class="label-text ml-4">anderes</span>
		</label>
	</div>
	{#if $answers.answer1_3_7}
		<textarea
			class="textarea textarea-bordered w-full"
			bind:value={$answers.answer1_3_8}
			placeholder="Bitte beschreiben Sie..."
		/>
	{/if}
</fieldset>

<StepsButtons {prevPage} {nextPage} />
