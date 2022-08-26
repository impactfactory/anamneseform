<script lang="ts">
	import '../tailwind.css';

	import { onMount } from 'svelte';

	onMount(async () => {
		const colorscheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const body = document.querySelector('body');
		console.log(body);

		if (colorscheme) {
			body.setAttribute('data-theme', 'dark');
			console.log('Dark Mode');
		}

		if (!colorscheme) {
			body.setAttribute('data-theme', 'autumn');
			console.log('Light Mode');
		}
	});
</script>

<div class="prose">
	<slot />
</div>

<style lang="postcss">
	/*
	label {
		@apply block;
	}

	.btn {
		@apply btn-primary;
	}

	option {
		fon-weight: 400 !important;
	}*/
</style>
