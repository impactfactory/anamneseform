<script lang="ts">
	import {fields} from '$lib/data/fields';
	let start: number = fields.app.states.start;
	let end : number = fields.app.states.end;
    let grouping: number = fields.app.states.grouping;

    function next(x: number,y: number){ 
        start = x + grouping;
        end = y + grouping;
    }

    function back(x: number,y: number){ 
        fields.app.states.start = x - grouping;
        end = y - grouping;
    }
</script>

<div class="pt-3">
    <a class="btn btn-primary" href="#" on:click={back(start,end)}>zurück</a>
    <a class="btn btn-primary" href="#" on:click={next(start,end)}>weiter</a>
</div>