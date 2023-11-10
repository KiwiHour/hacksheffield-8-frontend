<script lang="ts">
    import TodoItem, { type ITodoItem } from '$lib/api-interfaces/TodoItem';
    import type { PageData } from './$types';

	// Regular vars
	export let data: PageData;
	let displayJumpscare = false;
	let huhWeird = false;

	// Binded vars
	let todoName: ITodoItem["name"];

	async function addTodo() {
		let todoItem = new TodoItem()
		await todoItem.add(todoName);

		// After addition
		todoName = "";
		location.reload();
	}

	async function deleteTodo(id: ITodoItem["id"]) {
		let todoItem = new TodoItem()
		await todoItem.delete(id)

		// After deletion
		location.reload();
	}
</script>

<main>

	{#each data.dummyData as onePieceOfInformation}
		<div class="one-piece">
			{JSON.stringify(onePieceOfInformation)}
			<input type="button" value="Del" on:click={() => deleteTodo(onePieceOfInformation.id)}>
		</div>
	{/each}

	<div id="new-todo">
		<input type="text" placeholder="Name" bind:value={todoName}>
		<input type="button" value="Add todo" on:click={addTodo}>
	</div>
	
	{#if !displayJumpscare}
		<input type="button" value="don't click me" on:click={() => {huhWeird = true; setTimeout(() => {displayJumpscare=true;huhWeird=false}, Math.random()*4000+3000)}}>
	{/if}

	{#if huhWeird}
		huh... weird. nothing happened
	{/if}

	{#if displayJumpscare}
		<img src="https://media.tenor.com/u4x8IHSNnqkAAAAi/fnaf-jump-scare.gif" alt="jumpscare... bitch!" />
		<audio autoplay id="playAudio">
			<source src="/jumpscare.mp3">
		</audio>

		{setTimeout(() => displayJumpscare = false, 875).toString().slice(0,0)}
	{/if}

</main>