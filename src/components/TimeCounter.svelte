<script lang="ts">
  import Timer from "./Timer.svelte";

  let open: boolean = false;
  let seconds: number = 0;
  let minutes: number = 0;

  const toggle: Function = () => (open = !open);
  const handleTick: Function = () => {
    if (seconds === 60) {
      seconds = 1;
      minutes += 1;
    } else {
      seconds += 1;
    }
  };
  
</script>

<div>
  <button on:click={() => toggle()}>{open ? 'Close' : 'Open'} timer</button>
  <p>
    The Timer component has been open for {minutes ? `${minutes} minutes` : ''} {seconds} {seconds === 1 ? 'second' : 'seconds'}
  </p>
  {#if open}
    <Timer callback={handleTick} interval={200}/>
  {/if}
</div>
