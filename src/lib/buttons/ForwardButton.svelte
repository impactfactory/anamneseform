<script lang="ts">
	export let step: number;
</script>

<button
	class="btn"
	on:click={() => {
		step++;
	}}
>
	vorwärts
</button>
