import { writable } from 'svelte/store';

function createCountStore() {
  const { set, subscribe, update } = writable(0);

  return {
    subscribe,
    countIncrement: () => update(n => n + 1),
    countDecrement: () => update(n => n - 1),
    countReset: () => set(0),
  };
}

export const count = createCountStore();
