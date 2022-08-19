<script lang="ts">
	export let enabled = false;
	export let label = '';
</script>

<div class="flex justify-between pt-4">
	<h2 class="font-semibold text-xl ">{label}</h2>

	<div class="relative z-0 inline-flex shadow-sm rounded-md">
		<button
			on:click={() => (enabled = false)}
			type="button"
			class:active={!enabled}
			class="w-16 shadow-lg xl:w-24 relative inline-flex items-center justify-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
			>Nein</button
		>
		<button
			on:click={() => (enabled = true)}
			class:active={enabled}
			type="button"
			class="w-16 shadow-lg xl:w-24 -ml-px relative inline-flex items-center justify-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
			>Ja</button
		>
	</div>
</div>

<style lang="postcss">
	.active {
		@apply bg-gray-500 text-white shadow-none;
	}
</style>
