<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		console.log('start');
		async function arr() {
			return new Promise(function (resolve) {
				setTimeout(() => {
					resolve('hallo kai');
				}, 1000);
			});
		}
		console.log('before promise');
		const allPromises = [arr(), arr(), arr()];
		console.log(await Promise.all(allPromises));
		console.log('end');
	});
</script>
