<script lang="ts">
	import { fade } from 'svelte/transition';
	export let fields: any[];
    let start = 0;
	let end = 3;
    let grouping = 3; 
    

    function next(x: number,y: number){ 
        start = x + grouping;
        end = y + grouping;
    }

    function back(x: number,y: number){ 
        start = x - grouping;
        end = y - grouping;
    }

</script>
{#if fields.app.state == 'questions'}
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
{/if}