<script lang="ts">
	export let chapters = [] as any[];
</script>

{#each chapters as chapter}
	{chapter.label},
{/each}

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
