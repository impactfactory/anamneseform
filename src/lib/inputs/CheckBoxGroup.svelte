<script lang="ts">
	export let question = [] as any[];
	let selected = false;
	let id = question.id;
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
	<legend class="pt-4 pb-2">{question.label}</legend>
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
				<span class="label-text">{box.label}</span>
			</label>
		</div>
	{/each}
	<div id="fillme{question.id}" />
</fieldset>
