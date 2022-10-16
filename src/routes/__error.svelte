<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import { data } from '$lib/data';
	import { fade } from 'svelte/transition';

	let routes = data.app.routes;
</script>

<Exit />

<div in:fade={{ duration: 1000 }}>
	<h2>Ups, da ging was schief....</h2>
	<p>
		Die hier angefragte Seite gibt es leider nicht.. Ihre bisherigen Eingaben wurden leider dadurch
		gelöscht. ;(<br /><br />
	</p>
	<p>
		<a class="btn btn-primary" href={routes.config}>zum Anfang</a>
	</p>
</div>
