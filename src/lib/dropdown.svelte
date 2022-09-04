<script>
    export let selectedMove = '';
    export let alternatives = [];
</script>

<style>
  
</style>

<select placeholder={'test'} class="bg-myGray border border-myYellow text-myYellow p-2 w-[250px] focus:border-myYellow focus:outline-myYellow" bind:value={selectedMove}>
    {#each alternatives as alternative}
    <option value={alternative}>{alternative}</option>
    {/each}
</select>