<script>

</script>

<style>
    .loader {
        width: 25px;
        height: 25px;
        border: 2px solid #faa815;
        border-bottom-color: #ffe2ad;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>

<div class="col-start-3 row-start-4 col-span-2 row-span-full place-items-center">
    <div class="w-full h-full flex center">
        <span class="loader"></span>
    </div>
</div>