<script lang="ts">
	import Chapter from './Chapter.svelte';

	export let chapters = [] as any[];
</script>

<h1>Anamnese Formular</h1>

<form action="/api/send" method="POST">
	{#each chapters as chapter}
		<Chapter {chapter} />
	{/each}

	<button>Absenden</button>
</form>
