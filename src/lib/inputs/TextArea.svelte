<script lang="ts">
	export let freeanswertext = '';
	export let id = '';
	export let placeholder = '';
</script>

<textarea
	name="freetext{id}"
	class="textarea textarea-bordered w-full mt-3 focus"
	bind:value={freeanswertext}
	{placeholder}
/>

<!--  für Debugging
<pre>Freeanswertext aus TextArea.svelte: {freeanswertext}
	Placeholder aus TextArea.svelte: {placeholder}<br />
</pre>
-->
