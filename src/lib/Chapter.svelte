<script lang="ts">
	export let chapter = {} as any;
</script>

<section>
	<label for="chapter{chapter.number}">
		<h2 style="">{chapter.label}</h2>
	</label>
	<input id="chapter{chapter.number}" type="radio" name={chapter.number} />
	<label for="chapter{chapter.number}">nein</label>
	<input class="yes" id="chapter{chapter.number}1" type="radio" name={chapter.number} />
	<label for="chapter{chapter.number}1">ja</label>

	{#each chapter.questions as question}
		<!-- 
        single input field
    -->
		{#if question.type === 'text'}
			<fieldset>
				<input
					id={question.id}
					type="text"
					placeholder={question.label}
					bind:value={question.value}
				/>
				<label class="form-label {question.class}" for={question.id}>{question.label}</label>
				<div class="form-text  {question.class}">{question.description}</div>
			</fieldset>

			<!-- 
        textarea
    -->
		{:else if question.type === 'textarea'}
			<fieldset>
				<textarea
					id={question.id}
					bind:value={question.text}
					cols={question.cols}
					rows={question.rows}
					placeholder={question.label}
				/>
				<label class="form-label {question.class}" for={question.id}>{question.label}</label>
				<div class="form-text  {question.class}">
					{question.description} <span>{question.text.length}/ {question.max}</span>
				</div>
			</fieldset>
			<!-- 
        radio group
    -->
		{:else if question.type === 'radiogroup'}
			<fieldset class="radiogroup">
				<legend>{question.label}</legend>
				{#each question.radios as radio}
					{#if radio.freeanswer == '1'}
						<label for="{question.id}{radio.id}">
							<input
								type="radio"
								class="freeanswer"
								name={question.id}
								id="{question.id}{radio.id}"
								bind:group={question.name}
								value={radio.value}
							/>
							<span>{radio.value}</span>
							<textarea name="" id="{question.id}{radio.id + 'txt'}" />
						</label>
					{:else}
						<label for="{question.id}{radio.id}">
							<input
								type="radio"
								name={question.id}
								id="{question.id}{radio.id}"
								bind:group={question.name}
								value={radio.value}
							/>
							{radio.value}
						</label>
					{/if}
				{/each}
			</fieldset>
			<!-- 
        checkboxgroup aka multiselect
        -->
		{:else if question.type === 'checkboxgroup'}
			<fieldset class="checkboxgroup">
				<legend>{question.label}</legend>
				{#each question.boxes as box}
					<label for="{question.id}{box.id}">
						{#if box.freeanswer == '1'}
							<input
								type="checkbox"
								class="freeanswer"
								id="{question.id}{box.id}"
								name="{question.id}{box.id}"
								bind:group={question.name}
								value={box.value}
							/>
							<span>{box.label}</span>
							<textarea id={question.id} bind:value={question.text} placeholder="" />
						{:else}
							<input
								type="checkbox"
								id="{question.id}{box.id}"
								name="{question.id}{box.id}"
								bind:group={question.name}
								value={box.value}
							/>
							{box.label}
						{/if}
					</label>
				{/each}
			</fieldset>
			<!-- 
        select
        -->
		{:else if question.type === 'select'}
			<fieldset>
				<label for={question.id}>{question.label}</label>
				{#if question.hasfreeanswer == '1'}
					<select class="hasfreeanswer" id={question.id}>
						<option value="" selected>bitte wählen Sie...</option>
						{#each question.options as option}
							{#if option.freeanswer == '1'}
								<option class="freeanswer" value={option.value}>
									<span>{option.value}</span>
								</option>
							{:else}
								<option value={option.value}>{option.value}</option>
							{/if}
						{/each}
					</select>
					<textarea name="" id="" />
					<!-- geht hier auch direkt javascript ? -->
				{:else}
					<select id={question.id}>
						<option value="" selected>bitte wählen Sie...</option>
						{#each question.options as option}
							<option value={option.value}>{option.value}</option>
						{/each}
					</select>
				{/if}
			</fieldset>
		{/if}
	{/each}
</section>

<style>
	section {
		list-style: none !important;
	}

	legend,
	label {
		font-weight: 600;
	}

	/* chapter accordion */
	input[type='radio'] ~ fieldset {
		display: none;
	}

	.yes:checked ~ .question,
	.yes:checked ~ fieldset {
		display: block;
	}

	label[for*='chapter'] {
		display: inline-block;
		margin-right: 2em;
	}

	/* component select */

	.hasfreeanswer + textarea {
		display: none;
	}

	.hasfreeanswer:has(> .freeanswer) + textarea {
		/* :has() geht noch nicht */
		display: block;
	}

	/* component radiogroup */
	.radiogroup label {
		font-weight: 400;
	}

	.radiogroup .freeanswer + span + textarea {
		display: none;
	}

	.radiogroup .freeanswer:checked + span::after {
		content: ':';
	}

	.radiogroup .freeanswer:checked + span + textarea {
		display: block;
	}

	/* component checkboxgroup */
	.checkboxgroup label {
		font-weight: 400;
	}

	.checkboxgroup .freeanswer + span + textarea {
		display: none;
	}

	.checkboxgroup .freeanswer:checked + span::after {
		content: ':';
	}

	.checkboxgroup .freeanswer:checked + span + textarea {
		display: block;
	}
</style>
