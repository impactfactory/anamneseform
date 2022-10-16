<script lang="ts">
	//import Exit from '$lib/Exit.svelte';
	//import StepsButtons from '$lib/StepsButtons.svelte';
	//import { fade } from 'svelte/transition';
	import { answers } from '$lib/stores';
	//import { data } from '$lib/data';
	//import QMaker from '$lib/QMaker.svelte';
	//import Generator from '$lib/Generator.svelte';

	let startPage: string = '/symptome';
	let prevPage: string = 'noShow';
	let nextPage: string = '/symptome';

	$answers = [
		{
			id: 5,
			name: 'Maja'
		}
	];

	function addObj() {
		var l = $sanswers.length;
		$answers[l] = { id: 10, name: 'Hans' };
	}
</script>

<!-- <Exit /> -->

<h2 class="font-medium">Welche Symptome erfahren Sie?</h2>

<a on:click={addObj}>Add an new Oject to our stores.ts</a><br /><br />

<!-- 
<div in:fade={{ duration: 1000 }}>
	<fieldset class="checkboxgroup config">
		<legend>Wählen Sie bitte die Symptome aus, welche Ihrer Erfahrung entsprechen</legend>

		

		{#each data.chapters as chapter}
			<div class="form-control">
				<label class="cursor-pointer">
					<input
						type="checkbox"
						class=" checkbox checkbox-sm"
						value={chapter.name}
						bind:group={$answers.answer0}
					/>
					<span class="label-text">{chapter.name}</span>
				</label>
			</div>
		{/each}
	</fieldset>
</div>

<div class="questions">
	{#each data.chapters as chapter}
		{#if $answers.answer0.includes(chapter.name)}
			{#each chapter.questions as q}
				<QMaker {q} />
			{/each}
		{/if}
	{/each}
</div>

<div class="generator">
	<Generator />
</div>


<StepsButtons {prevPage} {nextPage} {startPage} />
-->
