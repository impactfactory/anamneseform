<script lang="ts">
	export let question = [] as any[];
	//export let chapters = [] as any[];
	let selected = false;
</script>

<fieldset class="radiogroup">
	<legend class="pt-4 font-semibold">{question.label}</legend>
	{#each question.radios as radio}
		{#if radio.freeanswer == '1'}
			<label for="{question.id}{radio.id}">
				<input
					type="radio"
					class="radio radio-xs"
					name={question.id}
					id="{question.id}{radio.id}"
					bind:group={question.name}
					value={radio.value}
					on:click={() => (selected = true)}
				/>
				<span>{radio.value}</span>
				{#if selected}
					<textarea
						class="textarea textarea-bordered"
						placeholder="..."
						name=""
						id="{question.id}{radio.id + 'txt'}"
					/>
				{/if}
			</label>
		{:else}
			<label for="{question.id}{radio.id}">
				<input
					type="radio"
					class="radio radio-xs"
					name={question.id}
					id="{question.id}{radio.id}"
					value={radio.value}
					on:click={() => (selected = false)}
				/>
				{radio.value}
			</label>
		{/if}
	{/each}
</fieldset>
