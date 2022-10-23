<script lang="ts">
	
	import { fields } from '$lib/data/fields';
	import Generator from '$lib/Generator/Generator.svelte';
	import Questions from '$lib/Questions.svelte';

	function showConfig() {
		fields.app.state = 'config';
	}

	function showQuestions() {
		fields.app.state = 'questions';
	}

	function showGenerator() {
		fields.app.state = 'generator';
	}
</script>



{#if fields.app.state == 'config'}
	<div class="config">
		<h2 class="font-medium">Welche Symptome erfahren Sie?</h2>
		<fieldset class="checkboxgroup">
			{#each fields.chapters as chapter}
				<div class="form-control">
					<label class="cursor-pointer">
						<input
							type="checkbox"
							class=" checkbox checkbox-sm"
							value={chapter.name}
							bind:group={fields.selectedChapters}
						/>
						<span class="label-text">{chapter.name}</span>
					</label>
				</div>
			{/each}
		</fieldset>
	</div>


<div class="pt-3">
	<a class="btn btn-primary" href="#" on:click={showQuestions}>weiter</a>
</div>
{/if}


	<Questions {fields} />


{#if fields.app.state == 'generator'}
<div class="generatedtext">
	<Generator selectedChapters={fields.selectedChapters} chapters={fields.chapters} />
</div>
{/if}

<pre>
{JSON.stringify(fields, null, 2)}
</pre>
