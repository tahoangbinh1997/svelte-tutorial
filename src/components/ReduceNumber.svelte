<script lang="ts">
  export let myName
  let numbers: Array<number> = [];

  const addNumber: Function = () => {
    numbers = [...numbers, numbers.length + 1]
  }

  $: factorial =numbers.reduce((total, current) => total ? total * current : current, 0);
</script>

<p>{numbers.join(" * ")} = {factorial}</p>

<p>{myName}</p>

<button on:click="{() => addNumber()}">
  Add number to array number
</button>
