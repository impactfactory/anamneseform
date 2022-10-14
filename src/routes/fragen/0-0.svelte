<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { fade } from 'svelte/transition';
	import { answers, chapters } from '$lib/stores';
	import { beforeUpdate } from 'svelte';

	let startPage: string = '/';
	let prevPage: string = 'noShow';
	let nextPage: string;

	//check initial chapters choice
	beforeUpdate(() => {
		if ($answers.answer0 == '') {
			nextPage = 'disabled';
		}
		if ($answers.answer0.includes('1')) {
			nextPage = '1-1';
		} else {
			if ($answers.answer0.includes('2')) {
				nextPage = '2-1';
			} else {
				if ($answers.answer0.includes('3')) {
					nextPage = '3-1';
				} else {
					if ($answers.answer0.includes('4')) {
						nextPage = '4-1';
					} else {
						if ($answers.answer0.includes('5')) {
							nextPage = '5-1';
						} else {
							if ($answers.answer0.includes('6')) {
								nextPage = '6-1';
							} else {
								if ($answers.answer0.includes('7')) {
									nextPage = '7-1';
								} else {
									if ($answers.answer0.includes('8')) {
										nextPage = '8-1';
									} else {
										if ($answers.answer0.includes('9')) {
											nextPage = '9-1';
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
</script>

<Exit />

<h2 class="font-medium">Welche Symptome erfahren Sie?</h2>

<div in:fade={{ duration: 1000 }}>
	<fieldset class="checkboxgroup">
		<legend>Wählen Sie bitte die Symptome aus, welche Ihrer Erfahrung entsprechen</legend>

		{#each Object.values($chapters) as chapterName, index}
			<div class="form-control">
				<label class="cursor-pointer" for={chapterName}>
					<input
						type="checkbox"
						class=" checkbox checkbox-sm"
						name={chapterName}
						value={index + 1}
						bind:group={$answers.answer0}
					/>
					<span class="label-text">{chapterName}</span>
				</label>
			</div>
		{/each}
	</fieldset>
</div>

{$answers.answer0}

<StepsButtons {prevPage} {nextPage} {startPage} />
