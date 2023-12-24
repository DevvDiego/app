<script>
    let counter = 1;
</script>

<h1>Counter: {counter}</h1>

<button on:click={ () => {counter++} }>
    add
</button>

<button on:click={ () => {counter--} }>
    decrease
</button>