<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function sayHelloWorld () {
    dispatch('textMessage', {
      text: 'hello'
    })
  }
</script>

<button on:click={sayHelloWorld}>
  Click me to say hello world
</button>