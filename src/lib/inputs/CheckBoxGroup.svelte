<script lang="ts">
	import TextArea from '$lib/inputs/TextArea.svelte';
	export let question = [] as any[];
	export let id = question.id;
	export let placeholder = question.freetextplaceholder;
	let selected = false;
	let freetext = '';

	let i = 1;

	function addTextarea() {
		i = i + 1;
		if (i % 2 == 0) {
			let textarea = document.getElementById('fillme' + id);
			textarea.innerHTML =
				'<textarea class="textarea textarea-bordered w-full" placeholder="' +
				question.freetextplaceholder +
				'"></textarea>';
		}
		if (i % 2 == 1) {
			let textarea = document.getElementById('fillme' + id);
			textarea.innerHTML = '';
		}
	}
</script>

<fieldset class="checkboxgroup block max-w-sm">
	<legend class="pt-4 pb-2 font-semibold">{question.label}</legend>
	{#each question.boxes as box}
		<div class="form-control">
			<label class="label cursor-pointer" for="{question.id}{box.id}">
				{#if box.freeanswer == '1'}
					<input
						type="checkbox"
						class=" checkbox checkbox-sm"
						id="{question.id}{box.id}"
						name="{question.id}{box.id}"
						bind:group={question.name}
						bind:value={selected}
						value="freetext"
					/>
				{:else}
					<input
						type="checkbox"
						class="checkbox checkbox-sm"
						id="{question.id}{box.id}"
						name="{question.id}{box.id}"
						bind:group={question.name}
						value={box.value}
					/>
				{/if}
				<span class="label-text">{box.label}</span>
			</label>
		</div>
	{/each}
	<!-- <div id="fillme{question.id}" /> -->
	{#if selected === 'freetext'}
		<TextArea bind:freeanswertext {id} {placeholder} />
	{/if}
</fieldset>
