<script lang="ts">
    import { onMount } from 'svelte';


	// export let data;

	// let dummyData = data.dummyData;
	let displayJumpscare = false;
	let playJumpscare = false;
	let huhWeird = false;

</script>

<main>

	<!-- {#each dummyData as onePieceOfInformation}
		<div class="one-piece">
			{JSON.stringify(onePieceOfInformation)}
		</div>
	{/each} -->

	<input type="button" value="click me" on:click={() => {huhWeird = true; setTimeout(() => {displayJumpscare=true;playJumpscare=true;huhWeird=false}, Math.random()*4000+3000)}}>

	{#if huhWeird}
		huh... weird. nothing happened
	{/if}

	{#if displayJumpscare}
		<img src="https://media.tenor.com/u4x8IHSNnqkAAAAi/fnaf-jump-scare.gif" alt="jumpscare... bitch!" />
		{setTimeout(() => displayJumpscare = false, 875).toString().slice(0,0)}
		{setTimeout(() => playJumpscare = false, 1000).toString().slice(0,0)}
	{/if}

	{#if playJumpscare}
		<audio autoplay loop  id="playAudio">
			<source src="/jumpscare.mp3">
		</audio>
	{/if}
</main>