<script>
	import Exit from '$lib/Exit.svelte';

	let ExitButton = false;
</script>

<Exit {ExitButton} />

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

<a class="my-4 btn btn-primary text-white" href="/fragen/1-0">Beginnen</a>
