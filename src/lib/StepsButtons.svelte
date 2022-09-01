<script lang="ts">
	//import { beforeUpdate } from 'svelte';
	import { answers } from '$lib/stores';

	export let prevPage: string = '/';
	export let nextPage: string = '';
</script>

<footer class="py-4 px-2 w-full flex justify-center gap-x-2 fixed bottom-0 left-0 bg-base-100">
	<a class="btn btn-primary" href="/">abbrechen</a>
	<a class="btn btn-primary" href={prevPage}>zurück</a>

	{#if nextPage == 'disabled'}
		<a class="btn btn-primary" href="/" disabled>weiter</a>
	{:else if nextPage == 'noshow'}
		<!-- -->
	{:else}
		<a class="btn btn-primary" href={nextPage}>weiter</a>
	{/if}
</footer>

<pre>
	{JSON.stringify($answers, null, 2)}
</pre>

<style>
	footer {
		opacity: 0.9;
	}
	a.btn {
		opacity: 1;
	}
</style>
