<script lang="ts">

  import HoverElement from "./HoverElement.svelte";
</script>

{#each Array(3) as item, index}
  {#key index}
    <HoverElement let:hovering={active}>
      <div class:active>
        {#if active}
          <p>I am being hovered upon.</p>
        {:else}
          <p>Hover over me!</p>
        {/if}
      </div>
    </HoverElement>
  {/key}
{/each}



<style>
	div {
		padding: 1em;
		margin: 0 0 1em 0;
		background-color: #eee;
	}

	.active {
		background-color: #ff3e00;
		color: white;
    transition: 0.3s;
	}
</style>
