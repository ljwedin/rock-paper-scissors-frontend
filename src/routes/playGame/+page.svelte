<script>
import { gameId, playerName } from '$lib/stores.js';
import PrimaryButton from '$lib/primaryButton.svelte';
import Dropdown from '$lib/dropdown.svelte';
import SecondaryButton from '$lib/secondaryButton.svelte';
import { goto } from '$app/navigation';

{$gameId}
{$playerName}

export let selectedMove = '';
export let alternatives = ['Rock', 'Paper', 'Scissors']

let moveRegistered = false;

async function playMove() {
    await fetch('https://rps-game-backend.herokuapp.com/' + $gameId + '/move', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: $playerName, move: selectedMove })
    })
    .then((res) => res.text())
    .then((text) => {
        if (text === 'Move registered') {
            moveRegistered = true;
        } else {
            console.log(text);
        }
    })
}

function redirect() {
    goto('/result')
}

</script>

<style>
  
</style>

<main class="flex flex-col justify-center items-center gap-20">
    <h1 class="font-bold text-[4rem] mt-10 text-myYellow">Rock Paper Scissors</h1>
    <article class="flex flex-col justify-center items-center gap-10">
        <p class="text-myYellow">Game ID: {$gameId}</p>
        <p class="text-myYellow">Name: {$playerName}</p>
        <selection class="flex flex-col items-center">
            <p class="text-myYellow">Choose your move:</p>
            <Dropdown bind:selectedMove={selectedMove} {alternatives} />
        </selection>
        {#if selectedMove}
        <PrimaryButton buttonText={'Play your move'} on:click={playMove} />
        {/if}
        {#if moveRegistered}
        <SecondaryButton buttonText={'See result'} on:click={redirect} />
        {/if}
    </article>
</main>