<script lang="ts">
	import { beforeUpdate } from 'svelte';
	import { answers } from '$lib/stores';

	export let prevPage: string = '/';
	export let nextPage: string = '';

	//check initial chapters choice
	beforeUpdate(() => {
		if ($answers.answer0.includes('1')) {
			console.log('yeah');
			nextPage = '1-1';
		} else {
			nextPage = '';
		}
	});
</script>

$answers.answer0 aus Stepper = {$answers.answer0} // nextPage = {nextPage}

<footer class="py-4 px-2 w-full flex justify-center gap-x-2 fixed bottom-0 left-0 bg-base-100">
	<a class="btn btn-primary" href="/">abbrechen</a>
	<a class="btn btn-primary" href={prevPage}>zurück</a>

	{#if nextPage == ''}
		<a class="btn btn-primary" href="" disabled>weiter</a>
	{:else if nextPage == 'noshow'}
		<!-- -->
	{:else}
		<a class="btn btn-primary" href={nextPage}>weiter</a>
	{/if}
</footer>

<style>
	footer {
		opacity: 0.9;
	}
	a.btn {
		opacity: 1;
	}
</style>
