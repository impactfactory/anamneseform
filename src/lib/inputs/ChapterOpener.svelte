<script lang="ts">
	import { answers } from '$lib/stores';
	export let openerGroup: string;
	export let nextPartPage: string;
	export let nextChapterPage: string;
</script>

<fieldset class="chapteropener">
	<div class="form-control items-center">
		<label class="label cursor-pointer py-4 w-24">
			<span class="label-text">ja</span>
			<input type="radio" class="radio radio-md" bind:group={openerGroup} value={nextPartPage} />
		</label>
	</div>
	<div class="form-control items-center">
		<label class="label cursor-pointer py-4 w-24">
			<span class="label-text">nein</span>
			<input type="radio" class="radio radio-md" bind:group={openerGroup} value={nextChapterPage} />
		</label>
	</div>
</fieldset>
