<script lang="ts">
  import { count } from "../store/count.js"

  export let cats;
</script>

<b>
  The store count is {$count}
</b>
<ul>
  {#each cats as cat, index}
    <li>{cat.id}: - {cat.name}</li>
  {/each}
</ul>