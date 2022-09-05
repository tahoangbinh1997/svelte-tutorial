<script lang="ts">
	export let name;
	export let classHello;
	export let address;
	let count: number = 0;

	const title: string = "Chao ngay moi <strong>Ta Hoang Binh</strong>";

	function incrementCount() {
		count += 1;
	}
    $: double = (count * 2) % 3
</script>

<p>{@html title}</p>
<p>{name}</p>
<p>{classHello}</p>
<p>{address}</p>
<button on:click={incrementCount}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p>Count double is {double}</p>