<script lang="ts">
	import Test1 from './components/Test1.svelte';
	import ReduceNumber from './components/ReduceNumber.svelte';
	import Login from './components/Login.svelte';
	import Cat from './components/Cat.svelte';
	import Async from './components/Async.svelte';
	import Parent from './components/Parent.svelte';
	import NumberRange from './components/NumberRange.svelte';
	import InnerHtml from './components/InnerHtml.svelte';
	import Video from './components/Video.svelte';
	import InputField from './components/InputField.svelte';
	import GetImage from './components/GetImage.svelte';
	import TimeCounter from './components/TimeCounter.svelte';
	import MiniChat from './components/MiniChat.svelte';
	import CountStore from './components/CountStore.svelte';
	import TransitionFade from './components/TransitionFade.svelte';
	import TextAnimation from './components/TextAnimation.svelte';
	import TextAnimationSlide from './components/TextAnimationSlide.svelte';
	import TodoList from './components/TodoList.svelte';
	import Modal from './components/Modal.svelte';
import ElementHoverList from './components/ElementHoverList.svelte';
import FolderContainer from './components/Folder/FolderContainer.svelte';
import BackgroundTransition from './components/BackgroundTransition.svelte';
import Parallax from './components/Parallax.svelte';

	export let name: string;
	export const src = 'favicon.png';
	const studentInfo: any = {
		name: 'Ta Hoang Binh',
		classHello: 'AT12E',
		address: 'Hoang Xa, Lien Mac, Bac Tu Liem, Ha Noi',
	}
	let cats: Array<Object> = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];

	let followText: string = '';
	let inputField: any;

	function textHelloWorld(event) {
		alert(event.detail.text);
	}
</script>

<!-- <main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<img src={src} alt="Svelte" />
	<Test1 {...studentInfo}/>
	<ReduceNumber myName="Ta Hoang Binh"/>
	<Login/>
	<Cat cats={cats}/>
	<Async/>
	<Parent on:textMessage={textHelloWorld}/>
	<input type=text bind:value={followText}>
	{followText}
	<NumberRange/>
	<InnerHtml/>
	<Video/>
	<InputField bind:this={inputField}/>
	<button on:click={() => inputField.focusField()}>Click to focus field</button>
	<GetImage/>
	<TimeCounter/>
	<CountStore/>
	<TransitionFade/>
	<TextAnimation/>
	<TextAnimationSlide/>
	<TodoList/>
	<Modal/>
	<ElementHoverList/>
	<FolderContainer/>
</main> -->
<!-- <BackgroundTransition/> -->
<!-- <MiniChat/> -->
<Parallax/>

<style type="text/scss">
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
			h1 {
				color:  blue;
			}
		}
	}
</style>