<script lang="ts">
	export let name: string;
	export let label: string;
	export let number: number;
</script>

<fieldset>
	<label for="number{name}" class="label">
		<span class="label-text">{label}</span>
	</label>
	<input id="number{name}" type="number" class="number" bind:value={number} />
</fieldset>
