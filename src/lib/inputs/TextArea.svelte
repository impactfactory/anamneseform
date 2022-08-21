<script lang="ts">
	//export let question = [] as any[];
	//export let chapters = [] as any[];

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

<!-- 
<pre>Freeanswertext aus TextArea.svelte: {freeanswertext}
	Placeholder aus TextArea.svelte: {placeholder}<br />
</pre>
-->
