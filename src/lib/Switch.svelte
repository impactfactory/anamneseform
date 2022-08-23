<script lang="ts">
	export let enabled: boolean = 'false';
	export let label: string;
	export let step: number;
	export let number: number;
</script>

<div class="flex justify-start items-center py-4">
	<h2 class="font-semibold text-2xl pr-4 w-4/5">{number}: {label}</h2>

	<div class="relative z-0 inline-flex shadow-sm rounded-md w-1/5">
		<button
			on:click={() => {
				step++;
			}}
			type="button"
			class="w-16 shadow-lg xl:w-24 relative inline-flex items-center justify-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
			>Nein</button
		>

		<!--
			<button
			on:click={() => (enabled = false)}
			type="button"
			class:active={!enabled}
			class="w-16 shadow-lg xl:w-24 relative inline-flex items-center justify-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
			>Nein</button
		>
		-->
		<button
			on:click={() => (enabled = true)}
			class:active={enabled}
			type="button"
			class="w-16 shadow-lg xl:w-24 -ml-px relative inline-flex items-center justify-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
			>Ja</button
		>
	</div>
</div>

<style lang="postcss">
	.active {
		@apply bg-gray-500 text-white shadow-none border-none;
	}
</style>
