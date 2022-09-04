<script>
    export let value = '';
    export let placeholder = 'Placeholder';
</script>

<input class="bg-myGray border border-myYellow p-2 w-[250px] text-myYellow focus:border-myYellow focus:outline-myYellow focus:text-myYellow" {placeholder} bind:value />
