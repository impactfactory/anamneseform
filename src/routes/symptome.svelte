<script lang="ts">
	import { content } from '$lib/data/content';
	import Generator from '$lib/Generator.svelte';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
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

<div class="questions">
	{#each content.chapters as chapter}
		{#if content.selectedChapters.includes(chapter.name)}
			{#each chapter.questions as question}
				{question.component}

				<!--  <svelte:component this={question.component} bind:value={question.value} {...question} /> -->
			{/each}
		{/if}
	{/each}

	<br /><br />{content.selectedChapters}
</div>

<div class="generator">
	<Generator value={content.selectedChapters} />
</div>

<pre class="pt-40">
{JSON.stringify(content, null, 2)}
</pre>
