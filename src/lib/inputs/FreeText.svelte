<script lang="ts">
	export let value: string;
	export let placeholder: string;
</script>

<textarea class="textarea" bind:value {placeholder} />
