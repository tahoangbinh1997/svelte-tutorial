<script lang="ts">
  let input: any;

  export const focusField = () => {
    input.focus();
  }
</script>

<input type="text" bind:this={input}>
