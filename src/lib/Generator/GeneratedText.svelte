<script lang="ts">
	import ProsaList from '$lib/Generator/ProsaList.svelte';
	export let selectedChapters: any[];
	export let chapters: any[];
</script>

<div id="txt" class="bg-white border rounded-md my-4 p-3 w-full" contenteditable>
	<p>
		{#if selectedChapters.length > 1}
			Die erfahrenen Symptome sind: <ProsaList value={selectedChapters} />
		{:else}
			Das erfahrene Symptom ist {selectedChapters}.
		{/if}
	</p>

	{#each chapters as chapter}
		{#if selectedChapters.includes(chapter.name)}
			<h4 class="mb-0">{chapter.template}{chapter.name}</h4>
			<p>
				{#if chapter.questions}
					{#each chapter.questions as q}
						{#if q.value}
							{q.template}
							{#if Array.isArray(q.value)}
								<ProsaList value={q.value} />
							{:else}
								{q.value}.&nbsp;
							{/if}
						{/if}
					{/each}
				{/if}
			</p>
		{/if}
	{/each}
</div>
