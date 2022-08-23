<script lang="ts">
	let antworten = {
		antwort1: '',
		antwort2: '',
		antwort3: ''
	};
</script>

<h1><slot name="title" /></h1>

<div>
	<a class="btn" href="/">Abbrechen</a>
</div>

<slot answers={antworten} />

<div>
	<a class="btn" href="/frage">Zurück</a>
	<a class="btn" href="/frage/2">Weiter</a>
</div>
