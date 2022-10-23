<script lang="ts">
	export let fields: any[];
</script>

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