<script lang="ts">
	export let text: string;

	function copyText() {
		/* Select text area by id*/
		var Text = document.getElementById('textbox');

		/* Select the text inside text area. */
		Text.select();

		/* Copy selected text into clipboard */
		navigator.clipboard.writeText(Text.value);

		/* Set the copied text as text for 
	  div with id clipboard */
		document.getElementById('clipboard').innerHTML = Text.value;
	}
</script>

<div class="pt-4">
	<p>
		Bitte kopieren Sie folgenden Text. Gehen Sie zur verschlüsslten Mail-Kommunikation mit HIN,
		welche unsere Praxis begonnen hat und schicken Sie uns Ihren Bericht, danke!
	</p>

	<textarea id="textbox" class="textarea textarea-bordered pt-4" />

	<button class="btn" on:click={copyText}>Copy</button>

	<h1>Copied Text:</h1>
	<br />
	<span id="clipboard" />
</div>
