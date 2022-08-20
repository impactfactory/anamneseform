<script lang="ts">
	import { page } from '$app/stores';

	import { getChapters } from '$lib/data';
	import Title from '$lib/Title.svelte';
	import Forms from '$lib/Forms.svelte';
	import CopyText from '$lib/CopyText.svelte';

	export let freeanswertext;

	let chapters = getChapters($page.url.searchParams);
</script>

<hr />
<pre>
	<br />
	Testfläche<br />
	freeanswertext aus index.svelte: {freeanswertext}<br />
	<br /></pre>
<hr />

<Title title="Anamnese-Formular" />

<p class="prose">
	Bitte füllen Sie dieses Formular vor Ihrem ersten Besuch aus. Wir freuen uns Sie bald zu sehen.
</p>

<Forms {chapters} bind:freeanswertext />

<CopyText {freeanswertext} />

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
