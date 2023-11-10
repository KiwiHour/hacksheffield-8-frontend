<script lang="ts">

    import type { PageData } from './$types';

	export let data: PageData;
	let dummyData = data.dummyData;
	let displayJumpscare = false;
	let huhWeird = false;

</script>

<main>

	{#each dummyData as onePieceOfInformation}
		<div class="one-piece">
			{JSON.stringify(onePieceOfInformation)}
		</div>
	{/each}
	
	{#if !displayJumpscare}
		<input type="button" value="click me" on:click={() => {huhWeird = true; setTimeout(() => {displayJumpscare=true;huhWeird=false}, Math.random()*4000+3000)}}>
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