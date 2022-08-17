<script lang="ts">
	export let chapters = [] as any[];
	//export let selected;

	// Timestamp erzeugen
	var unixdate = Date.now();
	let timestamp = new Date(unixdate);

	// checkbox grouping und reactivity
	// für jedes Kapitel, für jede Frage darin,falls type=checkbox oder radio, lass die id der frage ein array statement sein
	/* chapters.forEach(function(chapter) {
		chapters.questions.forEach(function(question) {
			{#if question.type == 'checkboxgroup' || question.type == 'radiogroup'}
			benutze question.name zund schreibe let (name des Elements) = []
			braucht es onMount damit die window-Methode benutzt werden kann?
			ist das überhaupt legal?
			{/if}

		})
	})
	*/
</script>

<h1>Anamnese Formular</h1>
<form action="/api/send" method="GET">
	<ul>
		{#each chapters as chapter}
			<li>
				<label for="chapter{chapter.number}">
					<h2 style="">{chapter.label}</h2>
				</label>
				<input id="chapter{chapter.number}" type="radio" name={chapter.number} />
				<label>nein</label>
				<input class="yes" id="chapter{chapter.number}" type="radio" name={chapter.number} />
				<label>ja</label>

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
			</li>
		{/each}
	</ul>
	<input id="100" type="hidden" value={timestamp} />
	<input id="101" type="hidden" value={timestamp} />
</form>

<style>
	/* full form with chapters */
	ul li {
		list-style: none !important;
	}

	legend,
	label {
		font-weight: 600;
	}

	/* chapter accordion */
	ul li input[type='radio'] ~ .question,
	ul li input[type='radio'] ~ fieldset {
		display: none;
	}

	ul li .yes:checked ~ .question,
	ul li .yes:checked ~ fieldset {
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
