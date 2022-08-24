<script lang="ts">
	import StepsButtons from '$lib/StepsButtons.svelte';

	let antworten = {
		antwort1: '',
		antwort2: '',
		antwort3: ''
	};

	export let chapter: number;
</script>

<h1><slot name="title" /></h1>

<div>
	<a class="btn" href="/">x</a>
</div>

<slot answers={antworten} />

{chapter}

<StepsButtons {chapter} />
