<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { fade } from 'svelte/transition';
	import { answers } from '$lib/stores';
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

		<div class="form-control">
			<label class="cursor-pointer">
				<input
					type="checkbox"
					class=" checkbox checkbox-sm"
					value="1"
					bind:group={$answers.answer0}
				/>
				<span class="label-text">Herzrasen</span>
			</label>
		</div>
		<div class="form-control">
			<label class="cursor-pointer">
				<input
					type="checkbox"
					class=" checkbox checkbox-sm"
					value="2"
					bind:group={$answers.answer0}
				/>
				<span class="label-text">Herzstolpern</span>
			</label>
		</div>
		<div class="form-control">
			<label class="cursor-pointer">
				<input
					type="checkbox"
					class=" checkbox checkbox-sm"
					value="3"
					bind:group={$answers.answer0}
				/>
				<span class="label-text">unregelmässigen Herzschlag</span>
			</label>
		</div>
		<div class="form-control">
			<label class="cursor-pointer">
				<input
					type="checkbox"
					class=" checkbox checkbox-sm"
					value="4"
					bind:group={$answers.answer0}
				/>
				<span class="label-text">ungewöhnlich starken Herzschlag</span>
			</label>
		</div>
		<div class="form-control">
			<label class="cursor-pointer">
				<input
					type="checkbox"
					class=" checkbox checkbox-sm"
					value="5"
					bind:group={$answers.answer0}
				/>
				<span class="label-text">anderes</span>
			</label>
		</div>
	</fieldset>
</div>

<StepsButtons {prevPage} {nextPage} {startPage} />
