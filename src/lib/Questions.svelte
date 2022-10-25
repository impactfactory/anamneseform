<script lang="ts">
	import { fade } from 'svelte/transition';
	import StepsButtons from '$lib/StepsButtons.svelte';
	export let fields: any[];
    export let state: string;
    export let start: number;
    export let end: number;
    let backButton: string;

    function showGenerator() {
		state = 'generator';
	}

    function BackButton(x:number){
        if (x == 0) { backButton = 'noShow'}
        else { backButton = 'show'}
    }

    

</script>


{#if state == 'questions'}
    <div class="questions">
        {#each fields.chapters as chapter, i}
            {#if fields.selectedChapters.includes(chapter.name)}
                {#if chapter.questions}
                    {#each chapter.questions.slice(start,end) as q}
                        <div in:fade={{ duration: 1000 }}>
                            <svelte:component this={q.type} bind:value={q.value} {...q} />  
                        </div>
                        {BackButton(start) || ''}                   
                    {/each}
                {/if}
                {i == fields.selectedChapters.length - 1 && end > chapter.questions.length + 1 ? showGenerator() : '' }
            {/if}
        {/each}
    </div>
    <StepsButtons bind:state bind:start bind:end {backButton}/>
    <pre>
        {JSON.stringify(fields, null, 2)}
    </pre>
{/if}
