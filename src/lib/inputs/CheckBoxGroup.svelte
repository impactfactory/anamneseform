<script lang="ts">
	export let question = [] as any[];
	let selected = false;
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
						on:click={() => (selected = true)}
						value={box.value}
					/>
				{:else}
					<input
						type="checkbox"
						class="checkbox checkbox-sm"
						id="{question.id}{box.id}"
						name="{question.id}{box.id}"
						bind:group={question.name}
						on:click={() => (selected = false)}
						value={box.value}
					/>
				{/if}
				<span class="label-text">{box.label}</span>
			</label>
		</div>
	{/each}
	{#if selected}
		<textarea
			class="textarea textarea-bordered max-w-full"
			placeholder="Bitte beschreiben Sie..."
			id={question.id}
		/>
	{/if}
</fieldset>
