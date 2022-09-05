<script lang="ts">
  import { onInterval } from '../common/utils';

  export let callback;
  export let interval: number = 1000;

  onInterval(callback, interval);
</script>

<p>
  This component executes a callback every {interval} milliseconds
</p>
