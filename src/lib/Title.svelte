<script lang="ts">
	export let title: string;
</script>

<h1 class="text-xl">
	{title}
</h1>

<svelte:head>
	<title>Homepage - {title}</title>
</svelte:head>
