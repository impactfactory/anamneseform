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

<button class="btn glass ">Button</button>
<button class="btn btn-info btn-outline">Info</button>
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
<article class="prose p-4">
	<h1>Garlic bread with cheese: What the science tells us</h1>
	<p>
		For years parents have espoused the health benefits of eating garlic bread with cheese to their
		children, with the food earning such an iconic status in our culture that kids will often dress
		up as warm, cheesy loaf for Halloween.
	</p>
	<p>
		But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
		springing up around the country.
	</p>
	<!-- ... -->
</article>
