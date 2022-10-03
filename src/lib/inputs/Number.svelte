<script lang="ts">
	import { answers } from '$lib/stores';
	export let name: string = '';
	export let label: string = '';
	export let number: number;
</script>

<fieldset>
	<label for="number{name}" class="label">
		<span class="label-text">{label}</span>
	</label>
	<input type="number" class="number" bind:value={number} />
	<span>Minuten</span>
</fieldset>
