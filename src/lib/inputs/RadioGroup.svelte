<script lang="ts">
	export let question = [] as any[];
	//export let chapters = [] as any[];
	let selected = false;
</script>

<fieldset class="radiogroup">
	<legend class="pt-4 font-semibold">{question.label}</legend>
	{#each question.radios as radio}
		<div class="form-control">
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
					<span class="label-text">{radio.value}</span>
				</label>
				{#if selected}
					<textarea
						class="textarea textarea-bordered"
						placeholder={question.freetextplaceholder}
						name=""
						id="{question.id}{radio.id + 'txt'}"
					/>
				{/if}
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
					<span class="label-text">{radio.value}</span>
				</label>
			{/if}
		</div>
	{/each}
</fieldset>
