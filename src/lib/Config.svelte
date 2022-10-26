<script lang="ts">
	import StepsButtons from './StepsButtons.svelte';
	export let fields: any[];
	export let state: string;
</script>

{#if state == 'config'}
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

	<StepsButtons bind:state />
{/if}
