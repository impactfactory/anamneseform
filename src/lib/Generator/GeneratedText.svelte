<script lang="ts">
	import ProsaList from '$lib/Generator/ProsaList.svelte';
	export let selectedChapters: any[];
	export let chapters: any[];
	export let risks: any[];
</script>

<div id="txt" class="bg-white border rounded-md my-4 p-3 w-full" contenteditable>
	<p>
		<strong
			>{#if selectedChapters.length > 1}
				Die erfahrenen Symptome sind: <ProsaList value={selectedChapters} />
			{:else}
				Das erfahrene Symptom ist {selectedChapters}.
			{/if}
		</strong>
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

	<h4 class="mb-0">{risks.title}</h4>
	<p>
		{#each risks.questions as q}
			{#if q.value}
				{q.template}{#if Array.isArray(q.value)}
					<ProsaList value={q.value} />
				{:else}
					{q.value}.&nbsp;
				{/if}
			{/if}
		{/each}
	</p>
</div>
