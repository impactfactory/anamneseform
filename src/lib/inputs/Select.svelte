<script lang="ts">
	//import { select_multiple_value } from 'svelte/internal';

	export let question = [] as any[];

	let selected = 'empty';
	let id = question.id;

	function addTextarea() {
		if (selected === 'freetext') {
			let textarea = document.getElementById('fillme' + id);
			textarea.innerHTML =
				'<textarea class="textarea textarea-bordered w-full" placeholder="' +
				question.freetextplaceholder +
				'"></textarea>';
		} else {
			let textarea = document.getElementById('fillme' + id);
			textarea.innerHTML = '';
		}
	}
</script>

<div class="form-control w-full max-w-xs">
	<label for={question.id} class="label">
		<span class="label-text">{question.label}</span>
	</label>
	<select
		id={question.id}
		class="select select-bordered"
		bind:value={selected}
		on:change={addTextarea}
	>
		<option disabled selected value="empty">Bitte wählen Sie...</option>
		{#each question.options as option}
			{#if option.freeanswer}
				<option value="freetext">
					{option.value}
				</option>
			{:else}
				<option value={option.value}>{option.value}</option>
			{/if}
		{/each}
	</select>
	<div id="fillme{question.id}" class="pt-4" />
</div>
