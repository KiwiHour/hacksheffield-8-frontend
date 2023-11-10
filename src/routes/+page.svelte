<script lang="ts">
    import { onMount } from 'svelte';


	export let data;

	let dummyData = data.dummyData;
	let displayJumpscare = false;

	onMount(() => setTimeout(() => displayJumpscare = true, 2500))

</script>

<main>
	{#each dummyData as onePieceOfInformation}
		<div class="one-piece">
			{JSON.stringify(onePieceOfInformation)}
		</div>
	{/each}

	{#if displayJumpscare}
		<img src="https://media.tenor.com/u4x8IHSNnqkAAAAi/fnaf-jump-scare.gif" alt="jumpscare... bitch!" />
		<audio autoplay src="/jumpscare.mp3"></audio>
		{setTimeout(() => displayJumpscare = false, 475).toString().slice(0,0)}
	{/if}
</main>