<script lang="ts">
	import { answers } from '$lib/stores';
	export let name: string = '';
	export let label: string = '';
	export let customText: string;
	export let placeholder: string;
</script>

<label for="txt{name}" class="label">
	<span class="label-text">{label}</span>
</label>
<textarea name="txt{name}" class="textarea" bind:value={customText} {placeholder} />
