<script lang="ts">
	export let prevPage: string = '/';
	export let nextPage: string = '';
</script>

<footer
	class="py-4 w-full flex justify-center gap-x-4 fixed bottom-0 left-0 bg-gray-300 border-2 border-t-gray-300"
>
	<a class="btn btn-primary" href="/">abbrechen</a>
	<a class="btn btn-primary" href={prevPage}>zurück</a>

	{#if nextPage == ''}
		<a class="btn btn-primary" disabled>weiter</a>
	{:else if nextPage == 'noshow'}{:else}
		<a class="btn btn-primary" href={nextPage}>weiter</a>
	{/if}
</footer>
