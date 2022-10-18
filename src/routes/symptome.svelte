<script lang="ts">
	import { fields } from '$lib/data/fields';
	import Generator from '$lib/Generator/Generator.svelte';
</script>

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

<div class="questions">
	{#each fields.chapters as chapter}
		{#if fields.selectedChapters.includes(chapter.name)}
			{#each chapter.questions as q}
				<svelte:component this={q.type} bind:value={q.value} {...q} />
			{/each}
		{/if}
	{/each}
</div>

<div class="generatedtext">
	<Generator bind:selectedChapters={fields.selectedChapters} chapters={fields.chapters} />
</div>

<pre class="pt-40">
{JSON.stringify(fields, null, 2)}
</pre>
