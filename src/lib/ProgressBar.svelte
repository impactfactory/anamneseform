<script lang="ts">
	export let chapters = [] as any[];
	export let step: number = '';
</script>

<div class="py-3">
	<ul class="steps steps-vertical lg:steps-horizontal">
		{#each chapters as chapter}
			<li
				class="step {step == chapter.number || step >= chapter.number ? 'step-primary' : ''}"
				on:click={() => {
					step = chapter.number;
				}}
			>
				{chapter.number}
			</li>
		{/each}
	</ul>
</div>

<style>
</style>
