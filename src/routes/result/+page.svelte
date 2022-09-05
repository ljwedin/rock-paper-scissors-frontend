<script>
import { gameId, playerName } from '$lib/stores.js';
import PrimaryButton from "$lib/primaryButton.svelte";
import { onMount } from 'svelte';

{$gameId}
{$playerName}

let isWinner = '';

async function getResult() {
    await fetch('https://rps-game-backend.herokuapp.com/' + $gameId + '/getGameResult', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: $playerName })
    })
    .then((res) => res.text())
    .then((text) => {
        isWinner = text;
    })
}

onMount(() => {
    getResult();
})
  
</script>

<style>
  
</style>

<main class="flex flex-col justify-center items-center gap-20">
    <h1 class="font-bold text-[4rem] mt-10 text-myYellow">Rock Paper Scissors</h1>
    <article class="flex flex-col justify-center items-center gap-10">
    <h1 class="text-myYellow">Result: {isWinner}</h1>
    <PrimaryButton buttonText={'Update result'} on:click={getResult} />
    </article>
</main>