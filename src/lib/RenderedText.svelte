<script lang="ts">
	import Palpitation from '$lib/templates/Palpitation.svelte';

	export let chapter = [] as any[];
	//export let questions = [] as any[];
	//export let selected;
</script>

Template ist {chapter.component}. Frage ist {chapter.label}

<svelte:component this={chapter.component} />

<br />
<br />

<!--
forEach chapter

	if chapter enabled 
	
	Ich habe #mehrmals täglich# Herzrasen, welches #ca. 1-2 Minuten# anhält. Es beginnt #plötzlich# und hört #langsam abklingend# auf. 
	
	Ich erfahre folgende Dymptome dabei: Schwindel, Brustenge, Luftprobleme.

	Ich kenne dieses Herzrasen #schon Jahre#

	if auslösen ja:

	Ich kann es auslösen mit #Alkohol trinken#  

	if beenden ja:

	und ich kann es beenden mit #Schlafen legen#

	if Behandlung: ja

	Mein Herzrasen wurde bereits mit Mediakemnetn behandelt.

	if behandlung nein

	men Herzrasen wurde nie behandelt.

	next chapter...







-->
