<script lang="ts">
	import Switch from '$lib/Switch.svelte';
	import Title from '$lib/Title.svelte';
	import { slide } from 'svelte/transition';

	let chapterStates = [
		{ enabled: true, title: 'Chapter One', type: 'radio' },
		{ enabled: false, title: 'Chapter Two', type: 'checkbox' },
		{ enabled: false, title: 'Chapter Three', type: 'checkbox' }
	];
</script>

<Title title="Hallo Welt" />
{#each chapterStates as state}
	<div>
		<Switch bind:enabled={state.enabled} title={state.title} />
		{#if state.enabled}
			<div transition:slide>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim eaque fugiat sit magnam
					deserunt omnis reprehenderit quasi ex ullam quidem quo quisquam dolores eius, sunt vero
					dolorum. Totam, labore.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, iusto odit. Asperiores hic
					architecto molestias velit est fuga reiciendis soluta quaerat officiis ad, earum minus
					expedita consequuntur consectetur omnis quis laudantium. Nostrum molestiae quibusdam omnis
					voluptatum dolores asperiores eligendi dolor eaque! Amet blanditiis voluptas, ipsa
					officiis at enim eius culpa?
				</p>
			</div>
		{/if}
	</div>
{/each}
