<script lang="ts">
	export let chapters = [] as any[];
	export let selected;

	// Timestamp erzeugen
	var unixdate = Date.now();
	let timestamp = new Date(unixdate);

	// checkbox grouping und reactivity
	// für jedes Kapitel, für jede Frage darin,fall type=checkbox oder radio, lass die id der frage ein array statement sein
</script>

<h1>Anamnese Formular</h1>
<form action="/api/send" method="GET">
	<ul>
		{#each chapters as chapter}
			<li>
				<input id="chapter{chapter.number}" type="checkbox" />
				<label for="chapter{chapter.number}">
					<h2>{chapter.label}</h2>
				</label>
				{#each chapter.questions as question}
					<!-- 
					single input field
				-->
					{#if question.type === 'text'}
						<div class="question form-floating mb-3">
							<input
								class="form-control {question.class}"
								id={question.id}
								type="text"
								placeholder={question.label}
								bind:value={question.value}
							/>
							<label class="form-label {question.class}" for={question.id}>{question.label}</label>
							<div class="form-text  {question.class}">{question.description}</div>
						</div>
						<!-- 
					textarea
				-->
					{:else if question.type === 'textarea'}
						<fieldset>
							<textarea
								class="form-control {question.class}"
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
						<fieldset>
							<legend>{question.label}</legend>
							{#each question.radios as radio}
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
							{/each}
						</fieldset>
						<!-- 
					checkboxgroup aka multiselect
					-->
					{:else if question.type === 'checkboxgroup'}
						<fieldset>
							<legend>{question.label}</legend>
							{#each question.boxes as box}
								<label for="{question.id}{box.id}">
									<input
										type="checkbox"
										id="{question.id}{box.id}"
										name="{question.id}{box.id}"
										bind:group={question.name}
										value={box.value}
									/>
									{box.label}
								</label>
							{/each}
						</fieldset>
						<!-- 
					select single
					-->
					{:else if question.type === 'select'}
						<fieldset>
							<label for={question.id}>{question.label}</label>
							<select id={question.id} bind:value={selected}>
								<option value="" selected>bitte wählen Sie...</option>
								{#each question.options as option}
									<option value={option.value}>{option.value}</option>
								{/each}
							</select>
						</fieldset>
						<!-- 
					select multiple
					-->
					{:else if question.type === 'multiselect'}
						<div class="question row pb-2 slim-select">
							<div class="col-8">
								<h3 class="h6">{question.label}</h3>
							</div>
							<div class="col-4">
								<select class="form-select" aria-label="Default select example" multiple>
									<option selected>bitte wählen Sie...</option>
									{#each question.options as option}
										<option value={option.value}>{option.value}</option>
									{/each}
								</select>
							</div>
						</div>
					{:else}{/if}
				{/each}
			</li>
		{/each}
	</ul>
	<input id="100" type="hidden" value={timestamp} />
	<input id="101" type="hidden" value={timestamp} />
</form>

<style>
	ul li {
		list-style: none !important;
	}
	ul li input[type='checkbox'] ~ .question,
	ul li input[type='checkbox'] ~ fieldset {
		display: none;
	}

	ul li input[type='checkbox']:checked ~ .question,
	ul li input[type='checkbox']:checked ~ fieldset {
		display: block;
	}
	legend,
	label {
		font-weight: 600;
	}
	label:not(:empty) {
		font-weight: 400;
	}
</style>
