<script lang="ts">
	export let placeholder: string;
	export let value: string;
</script>

<textarea class="textarea" bind:value {placeholder} />
