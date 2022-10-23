<script lang="ts">
	//import { answers } from '$lib/stores';
	import ProsaList from './Snippets/ProsaList.svelte';
	let value: string;
</script>

<h3 class="pb-0 mb-0">Details zum Symptom Brustschmerzen</h3>

<!-- Question 2_1_1 -->
<p>
	{#if $answers.answer2_1_1 || $answers.answer2_1_2}
		<span>Missempfindungen: </span>
		{#if $answers.answer2_1_1.length}
			<ProsaList value={$answers.answer2_1_1} />.
		{/if}
		{#if $answers.answer2_1_2}
			{#if $answers.answer2_1_1}&nbsp;{/if}
			{$answers.answer2_1_2}.
		{/if}
	{/if}

	<!-- Question 2_1_2 -->
	{#if $answers.answer2_1_3 || $answers.answer2_1_4}
		<span> Lokalisierung: </span>
		{#if $answers.answer2_1_3.length}
			<ProsaList value={$answers.answer2_1_3} />.
		{/if}
		{#if $answers.answer2_1_4}
			{#if $answers.answer2_1_3}&nbsp;{/if}
			{$answers.answer2_1_4}.
		{/if}
	{/if}

	<!-- Question 2_1_3-->
	{#if $answers.answer2_1_5}
		<span> Ausbreitung: </span>
		{#if $answers.answer2_1_5.length}
			{$answers.answer2_1_5}.
		{/if}
	{/if}

	<!-- Question 2_2_1-->
	{#if $answers.answer2_2_1}
		<span>Tritt auf bei: </span>
		{#if $answers.answer2_2_1.length}
			<ProsaList value={$answers.answer2_2_1} />.
		{/if}
		{#if $answers.answer2_2_3}
			&nbsp;Typische Belastung: {$answers.answer2_2_3}.
		{/if}
	{/if}

	<!-- Question 2_2_2-->
	{#if $answers.answer2_2_4}
		<span> Häufigkeit: </span>
		{$answers.answer2_2_4}.
	{/if}

	<!-- Question 2_2_3-->
	{#if $answers.answer2_2_6 || $answers.answer2_2_7}
		<span> Bekannt seit: </span>
		{#if $answers.answer2_2_6}
			{$answers.answer2_2_6}
		{/if}
		{#if $answers.answer2_2_7}
			{$answers.answer2_2_7}
		{/if}
	{/if}

	<!-- Question 2_3_1-->
	{#if $answers.answer2_3_1}
		<span> Zunahme: </span>{$answers.answer2_3_1}
	{/if}

	<!-- Question 2_3_2-->
	{#if $answers.answer2_3_3}
		<span> Dauer: </span>{$answers.answer2_3_3}.
	{/if}

	<!-- Question 2_3_3-->
	{#if $answers.answer2_3_5}
		<span> Kommt am Anfang der Belastung und verschwindet dann wieder: </span>
		{$answers.answer2_3_5}.
	{/if}

	<!-- Question 2_4_1-->
	{#if $answers.answer2_4_1}
		<span> Reaktion Nitrospray/Kapseln: </span>
		{$answers.answer2_4_1}.
	{/if}

	<!-- Question 2_4_2-->
	{#if $answers.answer2_4_2}
		<span> Beschwerden schon vorher da und wieder für länger verschwunden: </span>
		{$answers.answer2_4_2}.
	{/if}

	<!-- Question 2_4_2-->
	{#if $answers.answer2_4_2 == 'ja'}
		Verschwunden: {$answers.answer2_4_3}

		{#if $answers.answer2_4_3 == 'ja, durch eine andere Massnahme'}
			: {$answers.answer2_4_4}{/if}.
	{/if}

	<!-- Question 2_4_3-->
	{#if $answers.answer2_4_5 || $answers.answer2_4_6}
		<span> Letzter Zeitpunkt der Beschwerden: </span>{$answers.answer2_4_5}
		{#if $answers.answer2_4_6}
			{$answers.answer2_4_6}
		{/if}.
	{/if}
</p>
