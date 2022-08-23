<script lang="ts">
	import { onMount } from 'svelte';
	import '../tailwind.css';

	onMount(() => {
		function handleFirstTab(e) {
			if (e.keyCode === 9) {
				// the "I am a keyboard user" key
				document.body.classList.add('user-is-tabbing');
				window.removeEventListener('keydown', handleFirstTab);
			}
		}

		window.addEventListener('keydown', handleFirstTab);
	});
</script>

<main class="flex justify-center">
	<div class="max-w-xl">
		<slot />
	</div>
</main>

<style>
</style>
