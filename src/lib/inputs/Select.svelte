<script lang="ts">
	import { select_multiple_value } from 'svelte/internal';

	export let question = [] as any[];
	let textarea; // fraglich, siehe unten
</script>

<div class="form-control w-full max-w-xs">
	<label for={question.id} class="label">
		<span class="label-text">{question.label}</span>
	</label>
	<select id={question.id} class="select select-bordered">
		<option disabled selected>Bitte wählen Sie...</option>
		{#each question.options as option}
			{#if option.freeanswer}
				<option id="free" value={option.value}>{option.value}</option>
				<!-- mir ist unklar wie das geht. brauchts hier einen bind? -->
				<script>
					{   if(document.getElementById('free').value == "option.value") 
						const textarea = document.createElement('textarea');
						document.getElementById('freeanswer').appendChild(textarea);
					}
				</script>
				<!---->
			{:else}
				<option value={option.value}>{option.value}</option>
			{/if}
		{/each}
	</select>
	<div id="freeanswer">...</div>
</div>
