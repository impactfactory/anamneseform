<script lang="ts">
	import Exit from '$lib/Exit.svelte';
	import CheckboxGroup from '$lib/inputs/CheckboxGroup.svelte';
	import SelectGroup from '$lib/inputs/SelectGroup.svelte';
	import StepsButtons from '$lib/StepsButtons.svelte';
	import { answers } from '$lib/stores';
	import YouAreHere from '$lib/YouAreHere.svelte';
	import { fade } from 'svelte/transition';

	let chapterName: string = 'Beinödeme';
	let prevPage: string;
	let nextPage: string = '9-2';

	//backwards navigational logic
	if ($answers.answer0.includes('8')) {
		prevPage = '8-3';
	} else {
		if ($answers.answer0.includes('7')) {
			prevPage = '7-3';
		} else {
			if ($answers.answer0.includes('6')) {
				prevPage = '6-3';
			} else {
				if ($answers.answer0.includes('5')) {
					prevPage = '5-3';
				} else {
					if ($answers.answer0.includes('4')) {
						prevPage = '4-2';
					} else {
						if ($answers.answer0.includes('3')) {
							prevPage = '3-3';
						} else {
							if ($answers.answer0.includes('2')) {
								prevPage = '2-4';
							} else {
								if ($answers.answer0.includes('1')) {
									prevPage = '1-3';
								} else {
									prevPage = '0-0';
								}
							}
						}
					}
				}
			}
		}
	}

	let selectLabel: string;
	let selectOptions: string[];
	let selectPlaceholder: string;
	let selectValue: string;
	let selectCustomText: string;
	let selectName: string;
	let selectHasCustom: boolean;

	let checkboxLabel: string;
	let checkboxGroup: string;
	let boxes: string[];
	let checkboxCustomText: string;
	let checkboxHasCustom: boolean;
	let custom: string;
</script>

<Exit />

<YouAreHere {chapterName} />

<div in:fade={{ duration: 1000 }}>
	<SelectGroup
		selectName="1"
		selectLabel="Seit wann haben Sie das Ödem?"
		selectOptions={['seit letzter Woche', 'seit letztem Monat', 'seit letztem Jahr', 'seit Jahren']}
		selectPlaceholder="Bitte beschreiben Sie, seit wann Sie es haben:"
		bind:selectValue={$answers.answer9_1_1}
		bind:selectCustomText={$answers.answer9_1_2}
		selectHasCustom={true}
	/>

	<CheckboxGroup
		checkboxLabel="Was ist geschwollen?"
		boxes={['das linke Bein', 'das rechte Bein', 'der linke Fuss', 'der rechte Fuss']}
		bind:checkboxGroup={$answers.answer9_1_3}
		bind:checkboxCustomText={$answers.answer9_1_4}
		checkboxPlaceholder=""
		checkboxHasCustom={false}
		custom=""
	/>

	<CheckboxGroup
		checkboxLabel="Wann tritt das Ödem auf?"
		boxes={['immer an heissen Tagen', 'gelegentlich an heissen Tagen', 'xx', 'x']}
		bind:checkboxGroup={$answers.answer9_1_4}
		bind:checkboxCustomText={$answers.answer9_1_5}
		checkboxPlaceholder="Bitte beschreiben Sie, wann das Ödem auftritt:"
		checkboxHasCustom={true}
		custom=""
	/>
</div>

<StepsButtons {prevPage} {nextPage} />
