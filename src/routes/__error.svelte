<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import { fade } from 'svelte/transition';
</script>

<Exit />

<div in:fade={{ duration: 1000 }}>
	<h2>Ups, da ging was schief....</h2>
	<p>
		Die hier angefragte Seite gibt es leider nicht.. Ihre bisherigen Eingaben wurden leider dadurch
		gelöscht. ;(<br /><br />
	</p>
	<p>
		<a class="btn btn-primary" href="/">zum Anfang</a>
	</p>
</div>
