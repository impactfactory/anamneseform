<script lang="ts">
	import { answers } from '$lib/stores';
</script>

<h1>1 Details</h1>
<div>
	Wie häufig haben sie Herzrasen
	<select class="select" bind:value={$answers.answer1}>
		<option>1 mal am Tag</option>
		<option>1 mal in der Woche</option>
	</select>
</div>
