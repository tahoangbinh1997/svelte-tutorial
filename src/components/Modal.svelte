<script lang="ts">
	import { fade } from 'svelte/transition';
	import { clickOutside } from "../common/click-outside";

	let showModal: boolean = false;
</script>

<button on:click={() => (showModal = true)}>Show Modal</button>
{#if showModal}
  <div transition:fade={{duration: 200}}>
    <div class="layout-blur"/>
    <div class="box" use:clickOutside on:outclick={() => (showModal = false)}>
      Click outside me!
    </div>
  </div>
{/if}

<style type="text/scss">
  .layout-blur {
    position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
    background-color: rgba(0,0,0,0.5);
  }
	.box {
		--width: 100px;
		--height: 100px;
		position: fixed;
		width: var(--width);
		height: var(--height);
		left: calc(50% - var(--width) / 2);
		top: calc(50% - var(--height) / 2);
		display: flex;
		align-items: center;
		padding: 8px;
		border-radius: 4px;
		background-color: #ff3e00;
		color: #fff;
		text-align: center;
		font-weight: bold;
	}
</style>
