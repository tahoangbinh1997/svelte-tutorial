<script lang="ts">
  import { count } from "../store/count.js"
</script>

<h1>The count is {$count}</h1>

<button on:click={() => count.countIncrement()}>+</button>
<button on:click={() => count.countDecrement()}>-</button>
<button on:click={() => count.countReset()}>reset</button>
