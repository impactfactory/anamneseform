<script lang="ts">
	import { fields } from '$lib/data/fields';
	export let ExitButton = false;
</script>

<header class="pt-4 w-full flex justify-between">
	<h1 class="mb-1">
		<a href="/" class="no-underline">{fields.app.name}</a>
	</h1>
	{#if ExitButton}
		<a class="btn btn-sm btn-primary btn-square text-white" href="/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</a>
	{/if}
</header>
