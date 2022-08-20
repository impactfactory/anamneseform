<script lang="ts">
	//export let question = [] as any[];
	//export let chapters = [] as any[];

	export let freeanswertext = '';
	export let id = '';
	export let placeholder = '';
</script>

<textarea
	name="freetext{id}"
	class="textarea textarea-bordered"
	bind:value={freeanswertext}
	{placeholder}
/>

<p>
	Freeanswertext aus TextArea.svelte: {freeanswertext}<br />
	Placeholder aus TextArea.svelte: {placeholder}<br />
</p>
