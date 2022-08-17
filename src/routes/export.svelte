<script lang="ts">
	import { page } from '$app/stores';
	const orgParams = $page.url.searchParams;
</script>

<h1>Anamnese Formular</h1>
Datum: {new Date().toDateString()}
<h2 style="color: brown;">Haben Sie Herzrasen</h2>
<div>Patient hat: {orgParams.get('1')}</div>
