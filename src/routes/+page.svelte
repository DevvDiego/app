<script>
    export let counter = 0;
</script>

<h1>
    Counter: {counter}
</h1>

<button on:click={ () => {counter++} }>
    add
</button>

<button on:click={ () => {counter--} }>
    sub
</button>