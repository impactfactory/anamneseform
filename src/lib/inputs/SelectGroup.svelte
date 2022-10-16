<script lang="ts">
	//export let selectValue: string;
	//export let selectCustomText: string;
	export let value: string;
	//export let q: any;
</script>

xx {value}

<!-- 

<fieldset class="selectgroup">
	<div class="form-control">
		<label for="slct{q.id}" class="label">
			<span class="label-text">{q.label}</span>
		</label>
		<select name="slct{q.id}" class="select" bind:value={q.value}>
			<option value="" disabled>Bitte wählen Sie...</option>
			{#each q.options as option}
				<option>{option}</option>
			{/each}
			{#if q.hasCustom}
				<option value="custom">anderes</option>
			{/if}
		</select>
	</div>

	{#if q.value == 'custom'}
		<textarea class="textarea" bind:value={selectCustomText} placeholder={q.placeholder} />
	{/if}
</fieldset>

-->
