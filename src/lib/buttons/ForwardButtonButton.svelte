<script lang="ts">
	export let step: number = '';
</script>

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

<!--
	if chapter = 1, nur vorwärtsbutton
	if dazwischen: vorwärts und rückwärts
	if chapter = letztes, rückwärts und zusammenfassen
-->
