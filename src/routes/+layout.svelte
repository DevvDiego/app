<script>
    export const prerender = true;
</script>


<nav>
    <ul>
        <li>
            item
        </li>
        <li>
            item
        </li>
    </ul>
</nav>

<slot />

<style>
    nav{
        padding: 8px;

        height: 70px;
        width: 100%;

        background-color: goldenrod;
        color: black;
    }

    nav ul{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
    }

    ul li{
        text-decoration: none;
        list-style: none;
        background-color: rgb(194, 147, 28);
        padding: 4px 8px;
        border-radius: 4px;
    }
</style>