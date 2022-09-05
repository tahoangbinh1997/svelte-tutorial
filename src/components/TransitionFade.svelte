<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	let visible: boolean = true;
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p in:fly="{{ y: 200, duration: 500 }}" out:fade>
		Fades in and out
	</p>
{/if}