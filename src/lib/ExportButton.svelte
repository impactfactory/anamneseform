<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="col-12 py-4">
	<a class="btn btn-primary" href="/export{$page.url.search}">Export</a>
	<a class="btn btn-primary" href="mailto:">E-Mail Senden</a>
</div>
