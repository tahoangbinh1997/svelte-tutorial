<script lang="ts">
  interface User {
    loggedIn: Boolean;
  }
  const user: User = { loggedIn: false }

  function toggle() {
    user.loggedIn = !user.loggedIn
  }
</script>

{#if !user.loggedIn}
  <button on:click={toggle}>
    Login
  </button>
{:else}
  <button on:click={toggle}>
    Logout
  </button>
{/if}
