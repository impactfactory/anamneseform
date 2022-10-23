<script lang="ts">
	import { fade } from 'svelte/transition';
    import { fields } from '$lib/data/fields';
	//export let questions: any[];
	let start: number = 0;
	let end: number = 3;
    let grouping: number = 3;

    function next(x: number,y: number){ 
        start = x + grouping;
        end = y + grouping;
    }

    function back(x: number,y: number){ 
        start = x - grouping;
        end = y - grouping;
    }

</script>

<div class="questions">
	{#each fields.chapters as chapter}
		{#if fields.selectedChapters.includes(chapter.name)}
			{#if chapter.questions}
            {#each chapter.questions.slice(start,end) as q}
            <div in:fade={{ duration: 1000 }}>
                <svelte:component this={q.type} bind:value={q.value} {...q} />
            </div>
        {/each}
			{/if}
		{/if}
	{/each}
</div>



<div class="pt-3">
    <a class="btn btn-primary" href="#" on:click={back(start,end)}>zurück</a>
    <a class="btn btn-primary" href="#" on:click={next(start,end)}>weiter</a>
</div>