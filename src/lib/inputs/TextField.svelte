<script lang="ts">
	export let label: string;
	export let value = '';
</script>

<label class="label">
	<span class="label-text">{label}</span>
</label>

<input type="text" bind:value />
