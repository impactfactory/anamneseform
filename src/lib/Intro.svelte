<script lang="ts">
	import StepsButtons from "$lib/StepsButtons.svelte";

	export let state: string;

</script>

{#if state == 'intro'}
<div class="intro">
<h2 class="font-semibold">Willkommen!</h2>

<p>
	Erstellen Sie mit unserer Online-Anamnese einen Text, den Sie unseren Ärzten zukommen lassen
	können.
</p>

<p>
	Je detailierter unsere Ärzte wissen, welche Symptome Sie erfahren, desto besser und effizienter
	können Sie Ihnen helfen.
</p>

<p>
	Ihr Arzt wird diesen als Grundlage für Ihre erste Konsultation bei uns nutzen und Ihnen weitere
	Fragen stellen.
</p>

<StepsButtons bind:state/>

<!-- 
<div class="pt-3">
	<button class="btn btn-primary" on:click={showConfig}>weiter</button>
</div>

<StepsButtons bind:state={state} />
-->
</div>
{/if}


