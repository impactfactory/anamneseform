<script lang="ts">
	export let enabled = false;
	export let title = '';
</script>

<div class="btn-group">
	<div>{title}</div>
	<button on:click={() => (enabled = false)} class:btn-active={!enabled} class="btn w-16"
		>Nein</button
	>
	<button on:click={() => (enabled = true)} class:btn-active={enabled} class="btn w-16">Ja</button>
</div>
