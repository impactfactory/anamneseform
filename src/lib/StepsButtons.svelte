<script lang="ts">
    export let state: string;
    export let backButton: string;
    export let start = 0;
	export let end = 2;
    export let grouping = 2; 

    function showConfig() {
		state = 'config';
        start = 0;
        end = 2;
	}
    function showGenerator() {
		state = 'generator';
	}

    function showIntro() {
		state = 'intro';
	}

    function showQuestions() {
		state = 'questions';
	}

    
//Questions Navi
    function next(x: number,y: number){ 
        start = x + grouping;
        end = y + grouping;
    }

    function back(x: number,y: number){ 
        start = x - grouping;
        end = y - grouping;
    }
</script>


<div class="pt-3">
    {#if state == 'intro'}
	    <button class="btn btn-primary" on:click={showConfig}>weiter</button>
    {:else if state == 'config'}
        <button class="btn btn-primary" on:click={showIntro}>zurück</button>
	    <button class="btn btn-primary" on:click={showQuestions}>weiter</button>
    {:else if state == 'questions'}
        <button class="btn btn-primary" on:click={showConfig}>Anfang</button> 
        {#if backButton == 'show'}
            <button class="btn btn-primary" on:click={back(start,end)}>zurück</button>
        {/if}
        <button class="btn btn-primary" on:click={next(start,end)}>weiter</button>
        <button class="btn btn-primary" on:click={showGenerator}>Zusammenfassung</button>
    {:else if state == 'generator'}
        <button class="btn btn-primary" on:click={showConfig}>Anfang</button>
    {/if}
</div>