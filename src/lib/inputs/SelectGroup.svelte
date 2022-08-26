<script lang="ts">
	import { answers } from '$lib/stores';
	export let label: string = 'Wie häufig haben sie Herzrasen?';
	export let options: string[];
	export let placeholder: string = '';
	export let value1: string;
	export let value2: string;
	export let name: string;
</script>

<fieldset class="selectgroup">
	<div class="form-control">
		<label for="slct{name}" class="label">
			<span class="label-text">{label}</span>
		</label>
		<select name="slct{name}" class="select" bind:value={value1}>
			<option value="">Bitte wählen Sie...</option>
			{#each options as option}
				<option>{option}</option>
			{/each}
			<option value="custom">anderes</option>
		</select>
	</div>

	{#if value1 == 'custom'}
		<textarea class="textarea" bind:value={value2} {placeholder} />
	{/if}
</fieldset>
