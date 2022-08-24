<script lang="ts">
	import { getChapters } from '$lib/data';
	import Title from '$lib/Title.svelte';
	import Forms from '$lib/Forms.svelte';

	export let freeanswertext = '';
	export let selected = 'empty';

	let chapters = getChapters();
</script>

<Title title="Anamnese-Formular" />

<p class="prose pb-8">
	Bitte füllen Sie dieses Formular vor Ihrem ersten Besuch aus. Wir freuen uns Sie bald zu sehen.
</p>

<hr />

<Forms {chapters} bind:freeanswertext bind:selected />

<!--
Flow:


app.html
v
_layout
v
index <- data.js
- title
- forms
- - switch
- - questions
- - - select
- - - - textarea
- - - radio
- - - checkboy
- copytext
- - rendered text
- - copyclipboard.js
v
Clipboard
v
Mail
v
Arzt!

-->
