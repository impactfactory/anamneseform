<script lang="ts">
	import '../tailwind.css';

	import { onMount } from 'svelte';

	onMount(async () => {
		const colorscheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const body = document.querySelector('body');
		console.log(body);

		if (colorscheme) {
			body.setAttribute('data-theme', 'dark');
			console.log('Dark Mode');
		}

		if (!colorscheme) {
			body.setAttribute('data-theme', 'autumn');
			console.log('Light Mode');
		}
	});
</script>

<div class="prose pb-32">
	<slot />
</div>

<style>
	:root {
		--bodycolor: #333;
		--bordercolor: #bbb;
		--primary: 129, 5, 12;
		--inputbg: #fff;
	}

	/* Prosa */
	:global(p),
	:global(ul),
	:global(ol),
	:global(#txt),
	:global(textarea) {
		color: var(--bodycolor);
	}

	/* Template Rendered Text */
	:global(#txt) {
		/*font-size: 14px;*/
		overflow-y: scroll;
		max-height: 180px;
	}

	:global(#txt):focus {
		outline-color: rgb(var(--primary), 0.4);
	}
	:global(#txt::selection),
	:global(#txt::selection span) {
		background: rgb(var(--primary), 0.2);
	}

	:global(#txt span) {
		font-weight: 600;
	}

	/* Input Fields */
	:global(.selectgroup) {
		margin-top: 0.75rem;
	}

	:global(.selectgroup select) {
		background: var(--inputbg) !important;
		color: var(--bodycolor);
		border-color: var(--bordercolor) !important;
		font-weight: normal !important;
	}

	:global(.selectgroup .label-text) {
		font-weight: bold;
	}

	:global([type='checkbox']),
	:global([type='radio']) {
		background: var(--inputbg);
		border-color: var(--bordercolor) !important;
	}

	:global(textarea) {
		background: var(--inputbg) !important;
		border-color: var(--bordercolor) !important;
		margin-top: 0.75rem;
		width: 100%;
	}

	:global(.checkboxgroup),
	:global(.radiogroup) {
		margin-top: 1.25rem;
	}

	:global(.checkboxgroup legend),
	:global(.radiogroup legend) {
		color: var(--bodycolor);
		font-size: 18px;
		font-weight: bold;
		padding-bottom: 0.5rem;
	}

	:global(.checkboxgroup .label-text),
	:global(.radiogroup .label-text) {
		margin-left: 2rem;
	}

	:global(.checkboxgroup .label-text),
	:global(.radiogroup .label-text) {
		margin-left: 2rem;
	}

	:global(.chapteropener) {
		font-weight: bold;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--bodycolor: #ededed;
			--bordercolor: #ededed;
			--inputbg: #ededed;
		}

		:global(p),
		:global(li) {
			color: var(--bodycolor);
		}
		:global(.selectgroup select) {
			background: var(--inputbg) !important;
			border-color: var(--bordercolor);
			color: #333;
		}

		:global(.selectgroup .label-text) {
			color: var(--bodycolor);
		}

		:global([type='checkbox']),
		:global([type='radio']) {
			background: var(--inputbg);
			border-color: var(--bordercolor) !important;
		}

		:global(textarea) {
			background: var(--inputbg) !important;
			border-color: var(--bordercolor) !important;
		}

		:global(.checkboxgroup legend),
		:global(.radiogroup legend) {
			color: var(--bodycolor);
		}
		:global(textarea),
		:global(#txt) {
			color: #333;
		}
	}
</style>
