<script lang="ts">
	export let prevPage: string;
	export let nextPage: string;
</script>

<footer class="py-8 w-full flex justify-center gap-x-4">
	<a class="btn btn-sm btn-primary text-white" href="/fragen/{prevPage}">zurück</a>
	<a class="btn btn-sm btn-primary text-white" href="/fragen/{nextPage}">weiter</a>
</footer>
