<script lang="ts">
	import '../tailwind.css';
</script>

<div class="prose text-black">
	<slot />
</div>

<style lang="postcss">
	label {
		@apply block;
	}

	.btn {
		@apply btn-primary;
	}

	option {
		fon-weight: 400 !important;
	}
</style>
