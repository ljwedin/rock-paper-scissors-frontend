<script>
import { goto } from '$app/navigation';
import { gameId, playerName } from '$lib/stores.js';

import Input from "$lib/input.svelte";
import PrimaryButton from "$lib/primaryButton.svelte";
import SecondaryButton from "$lib/secondaryButton.svelte";

{$gameId}
{$playerName}

let playerNameError = false;
let gameNotFound = false;
let enterId = false;

function setEnterId() {
    enterId = true;
}
  
async function startNewGame() {
    if (!playerName) {
        playerNameError = true;
        return;
    } else {
        playerNameError = false;

        await fetch('https://rps-game-backend.herokuapp.com/newGame', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: $playerName }),
        })
            .then((res) => res.text())
            .then((text) => {
                if (!text) {
                    gameNotFound = true;
                    console.log('Game not found');
                    return;
                } else {
                    $gameId = text;
                    goto('/playGame');
                }
            });
    }
}

async function joinGame() {
    if (!playerName) {
        playerNameError = true;
        return;
    } else {
        playerNameError = false;

        await fetch('https://rps-game-backend.herokuapp.com/' + $gameId + '/join', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: $playerName })
        })
        .then((res) => res.text())
        .then((text) => {
            console.log(text);
            if (text !== 'Game already has two players' && text !== 'Name already in use by player one') {
                goto('/playGame')
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

</script>

<style>
  
</style>

<main class="flex flex-col justify-center items-center gap-20">
    <h1 class="font-bold text-[4rem] mt-10 text-myYellow">Rock Paper Scissors</h1>
    <article class="flex flex-col justify-center items-center gap-10">
        <section class="flex flex-col justify-center items-center">
            <p class="text-myYellow">Enter player name:</p>
            <Input placeholder={'Name'} bind:value={$playerName} />
            {#if playerNameError}
                <p class="text-red-400">Please enter player name</p>
            {/if}
        </section>
        {#if !enterId}
        <section class="flex flex-col justify-center items-center gap-2">
            {#if gameNotFound}
            <p class="text-red-400">Game not found</p>
            {/if}
            <PrimaryButton
                buttonText={'Start new game'}
                on:click={startNewGame}
            />
            <p class="text-myYellow">OR</p>
            <SecondaryButton buttonText={'Enter game ID'} on:click={setEnterId} />
        </section>
        {:else}
        <section class="flex flex-col justify-center items-center gap-2">
            <Input placeholder={'Game ID'} bind:value={$gameId} />
            <PrimaryButton buttonText={'Join game'} on:click={joinGame} />
        </section>
        {/if}
    </article>
</main>
