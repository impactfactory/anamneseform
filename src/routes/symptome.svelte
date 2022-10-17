<script lang="ts">
	import { content } from '$lib/data/content';
	import Generator from '$lib/Generator.svelte';
	import MultiSelect from '$lib/inputs/MultiSelect.svelte';
</script>

<h2 class="font-medium">Welche Symptome erfahren Sie?</h2>
<div class="choice">
	{#each content.chapters as chapter}
		<div class="form-control">
			<label class="cursor-pointer">
				<input
					type="checkbox"
					class=" checkbox checkbox-sm"
					value={chapter.name}
					bind:group={content.selectedChapters}
				/>
				<span class="label-text">{chapter.name}</span>
			</label>
		</div>
	{/each}
</div>

{content.selectedChapters}

<div class="questions">
	{#each content.chapters as chapter}
		{#if content.selectedChapters.includes(chapter.name)}
			{#each chapter.questions as question}
				{question.component}: {question.label}

				<svelte:component
					this={question.component}
					bind:value={question.value}
					options="['1', '2', '3']"
					{...question}
				/>
			{/each}
		{/if}
	{/each}
</div>

<div class="generator">
	<Generator value={content.selectedChapters} />
</div>

<pre class="pt-40">
{JSON.stringify(content, null, 2)}
</pre>
