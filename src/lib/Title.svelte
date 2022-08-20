<script lang="ts">
	export let title: string;
</script>

<h1 class="text-4xl font-semibold pb-10">
	{title}
</h1>

<svelte:head>
	<title>Homepage - {title}</title>
</svelte:head>
