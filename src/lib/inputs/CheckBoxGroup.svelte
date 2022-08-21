<script lang="ts">
	export let question = [] as any[];
	let selected = false;
	let id = question.id;
	let placeholder = question.freetextplaceholder;
	let i = 1;

	function addTextarea() {
		i = i + 1;
		if (i % 2 == 0) {
			let textarea = document.getElementById('fillme' + id);
			textarea.innerHTML =
				'<textarea name="freetext' +
				id +
				'" class="textarea textarea-bordered mt-2 w-full" placeholder="' +
				placeholder +
				'"></textarea>';
		}
		if (i % 2 == 1) {
			let textarea = document.getElementById('fillme' + id);
			textarea.innerHTML = '';
		}
	}
</script>

<fieldset class="checkboxgroup py-2 w-full">
	<legend class="pt-4 pb-1 font-semibold text-sm">{question.label}</legend>
	{#each question.boxes as box}
		<div class="form-control">
			<label class="cursor-pointer" for="{question.id}{box.id}">
				{#if box.freeanswer == '1'}
					<input
						type="checkbox"
						class=" checkbox checkbox-sm"
						id="{question.id}{box.id}"
						name="{question.id}{box.id}"
						bind:group={question.name}
						on:click={addTextarea}
						value={box.value}
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
				<span class="label-text ml-4">{box.label}</span>
			</label>
		</div>
	{/each}
	<div id="fillme{question.id}" />
</fieldset>

<style>
	.label-text {
		position: relative;
		top: -6px;
	}
</style>
