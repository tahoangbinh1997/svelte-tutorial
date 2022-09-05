import { onDestroy } from "svelte";

export const onInterval = (callback: Function, milliseconds: number) => {
  const interval: any = setInterval(callback, milliseconds);

  onDestroy(() => {
    clearInterval(interval);
  });
}