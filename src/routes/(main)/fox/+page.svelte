<script>
    import { onMount } from 'svelte';
    import OpenGraphMeta from "$lib/components/OpenGraphMeta.svelte";
    
    var imageURL = ""

    async function newFox() {
        var api = "https://randomfox.ca/floof/"

        var response = await fetch(api)
        const result = await response.json();

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        imageURL = result['image']
    }

	onMount(() => {
        newFox()
    });
</script>

<svelte:head>
    <OpenGraphMeta title="Fox" description="Random images of foxes." />
</svelte:head>

<h1>Fox 🦊</h1>
<p>The result of a 15 minute hackathon in my SWEN-440 class. We had to use an un-authenticated API from the <a href="https://github.com/public-api-lists/public-api-lists">public-api-lists</a> GitHub page.</p>

<div class="container">
    <button on:click={ newFox }>
        Get a new 🦊
    </button>
    <img id="fox" alt="A random a fox." src={imageURL}>
</div>

<style>
    .container {
        display: flex;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button {
        background-color: transparent;
        border: 1px solid black;
    }

    img {
        max-width: 90%;
        max-height: 50vh;
        box-shadow: 0px 0px 20px #00000084;
        border-radius: 10px;
    }

    a {
        text-decoration: underline;
    }
</style>
