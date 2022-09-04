<script>
import Input from "../components/input.svelte";
import PrimaryButton from "../components/primaryButton.svelte";
import SecondaryButton from "../components/secondaryButton.svelte";

let playerName = '';
let playerNameError = false;
  
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
            body: JSON.stringify({ name: playerName }),
        })
            .then((res) => res.text())
            .then((text) => {
                console.log(text);
            });
    }
}

$: console.log(playerName);
</script>

<style>
  
</style>

<main class="flex flex-col justify-center items-center gap-20">
    <h1 class="font-bold text-[4rem] mt-10 text-myYellow">Rock Paper Scissors</h1>
    <article class="flex flex-col justify-center items-center gap-10">
        <section class="flex flex-col justify-center items-center">
            <p class="text-myYellow">Enter player name:</p>
            <Input placeholder={'Name'} bind:value={playerName} />
            {#if playerNameError}
                <p class="text-red-400">Please enter player name</p>
            {/if}
        </section>
        <section class="flex flex-col justify-center items-center gap-2">
            <PrimaryButton
                buttonText={'Start new game'}
                on:click={startNewGame}
            />
            <p class="text-myYellow">OR</p>
            <SecondaryButton buttonText={'Enter game ID'} />
        </section>
    </article>
</main>
