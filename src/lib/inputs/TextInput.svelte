<script>
	export let questions = [] as any[];
</script>

<fieldset>
	<input id={question.id} type="text" placeholder={question.label} bind:value={question.value} />
	<label class="form-label {question.class}" for={question.id}>{question.label}</label>
	<div class="form-text  {question.class}">{question.description}</div>
</fieldset>
