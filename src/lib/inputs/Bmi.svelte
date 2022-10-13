<script lang="ts">
	import { answers } from '$lib/stores';
	export let weight: number;
	export let height: number;
	export let pulse: number;
	export let pressure_sys: number;
	export let pressure_dia: number;
	export let gender: string;
</script>

<fieldset class="mt-4">
	<legend class="font-bold">Bitte geben Sie die Ihnen bekannten Körpermasse an</legend>

	<label for="weight" class="label">
		<span class="label-text">Gewicht in kg</span>
	</label>
	<input name="weight" type="number" class="number" bind:value={weight} />

	<label for="height" class="label">
		<span class="label-text">Grösse in cm</span>
	</label>
	<input name="height" type="number" class="number" bind:value={height} />

	<label for="pulse" class="label">
		<span class="label-text">Puls in Ruhe (z.B. "70")</span>
	</label>
	<input name="pulse" type="text" class="number" bind:value={pulse} />

	<label for="sys" class="label">
		<span class="label-text">Blutdruck systolisch (z.B. "120/70")</span>
	</label>
	<input name="sys" type="text" class="number" bind:value={pressure_sys} />

	<label for="dia" class="label">
		<span class="label-text">Blutdruck diastolisch</span>
	</label>
	<input name="dia" type="text" class="number" bind:value={pressure_dia} />

	<div class="form-control pt-2">
		<label>
			<input type="radio" class="radio radio-sm" bind:group={gender} value="weiblich" />
			<span class="label-text ml-2">weiblich</span>
		</label>
	</div>
	<div class="form-control">
		<label>
			<input type="radio" class="radio radio-sm" bind:group={gender} value="männlich" />
			<span class="label-text ml-2">männlich</span>
		</label>
	</div>
</fieldset>

<!-- 
<h3>Ihr BMI (Body Mass Index / Gewicht durch Grösse im Quadrat)</h3>
<p>
	<strong>
		Ihr BMI: {Math.round((weight / (height * height)) * 10000)} / Stufe:
		{#if Math.round((weight / (height * height)) * 10000) <= 18.5}
			untergewichtig
		{:else if Math.round((weight / (height * height)) * 10000) <= 24.9}
			Normalgewicht
		{:else if Math.round((weight / (height * height)) * 10000) <= 29.9}
			übergewichtig
		{:else if Math.round((weight / (height * height)) * 10000) <= 34.9}
			Adipositas Grad 1
		{:else if Math.round((weight / (height * height)) * 10000) <= 39.9}
			Adipositas Grad 2
		{:else if Math.round((weight / (height * height)) * 10000) >= 40}
			Adipositas Grad 3
		{/if}
	</strong>
</p>
<h3>Ihr WHtR (Taille-zu-Grüsse-Verhältnis)</h3>
<p><strong>{parseFloat((taille / height).toFixed(2))}</strong></p>
<h3>Ihr WHR (Taille-zu-Hüfte-Verhältnis)</h3>
<p><strong>{parseFloat((taille / hip).toFixed(2))}</strong></p>
-->
