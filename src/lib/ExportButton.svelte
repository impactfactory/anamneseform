<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="pt-10">
	<button class="btn" href="/export{$page.url.search}">Export</button>
	<button class="btn" href="mailto:">Link senden</button>
</div>
