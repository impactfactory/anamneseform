<script lang="ts">
	import { answers } from '$lib/stores';
	export let weight: number;
	export let height: number;
	export let taille: number;
	export let hip: number;
	export let gender: string;
</script>

<fieldset>
	<legend>Bitte geben Sie ihr Gewicht und Grösse an</legend>

	<legend>Bitte geben Sie ihr Geschlecht an</legend>
	<div class="form-control">
		<label>
			<input type="radio" class="radio radio-sm" bind:group={gender} value="weiblich" />
			<span class="label-text">weiblich</span>
		</label>
	</div>
	<div class="form-control">
		<label>
			<input type="radio" class="radio radio-sm" bind:group={gender} value="männlich" />
			<span class="label-text">männlich</span>
		</label>
	</div>

	<label for="weight" class="label">
		<span class="label-text">Gewicht in kg</span>
	</label>
	<input name="weight" type="number" class="number" bind:value={weight} />
	<span>kg</span>

	<label for="height" class="label">
		<span class="label-text">Grösse in cm</span>
	</label>
	<input name="height" type="number" class="number" bind:value={height} />
	<span>cm</span>

	<label for="taille" class="label">
		<span class="label-text">Taille in cm</span>
	</label>
	<input name="taille" type="number" class="number" bind:value={taille} />
	<span>cm</span>

	<label for="hip" class="label">
		<span class="label-text">Hüfte in cm</span>
	</label>
	<input name="hip" type="number" class="number" bind:value={hip} />
	<span>cm</span>
</fieldset>

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
