<script lang="ts">
	export let prevPage: string = '/';
	export let nextPage: string = '';
</script>

<footer class="py-4 px-2 w-full flex justify-center gap-x-2 fixed bottom-0 left-0 bg-base-100">
	<a class="btn btn-primary" href="/">abbrechen</a>
	<a class="btn btn-primary" href={prevPage}>zurück</a>

	{#if nextPage == ''}
		<a class="btn btn-primary" disabled>weiter</a>
	{:else if nextPage == 'noshow'}{:else}
		<a class="btn btn-primary" href={nextPage}>weiter</a>
	{/if}
</footer>

<style>
	footer {
		opacity: 0.8;
	}
</style>
