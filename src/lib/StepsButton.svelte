<script lang="ts">
	export let currentActive;
	export let chapters = [] as any[];
	export let step: number = '';
</script>

<div class="step-button py-3">
	<div class="py-3">
		<button
			class="btn"
			on:click={() => {
				step--;
			}}
		>
			rückwärts
		</button>

		<button
			class="btn"
			on:click={() => {
				step++;
			}}
		>
			vorwärts
		</button>
	</div>
</div>

<style>
</style>
