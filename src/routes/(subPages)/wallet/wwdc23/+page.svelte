<script lang="ts">
    import PageNavigation from "$lib/components/ProjectPage/ProjectPageNav.svelte"
    import { goto } from "$app/navigation";

    let name: string;

    function downloadPass() {
        goto("https://actuallyhome.herokuapp.com/API/wallet/wwdc23/create?name=" + name)
    }
</script>

<style>
    .form {
        display: block;
    }

    .form button {
        background-color: var(--secondaryBase);
        color: var(--primary);
        font-family: inherit;
        font-size: inherit;
        margin-right: 6px;
        margin-bottom: 6px;
        padding: 10px;
        border: none;
        border-radius: 6px;
        outline: none;
    }

    .form input {
        background-color: var(--secondaryBase);
        color: var(--primary);
        font-family: inherit;
        font-size: inherit;
        margin-right: 6px;
        margin-bottom: 6px;
        padding: 10px;
        border: none;
        border-radius: 6px;
        outline: none;
    }

    .form p {
        margin-top: 5px;
        margin-right: 10px;
    }
    
    img {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 600px) {
        img {
            width: 90%;
            margin: 20px;
        }        
    }
</style>

<svelte:head>
  <title>WWDC23 Wallet Pass</title>
  <meta name="description" content="An unofficial Apple Wallet pass for WWDC23!">
</svelte:head>

<PageNavigation id={`wallet/wwdc23`} name="WWDC23 Wallet Pass"/>
<h1>WWDC23 Wallet Pass Maker!</h1>
<p>This pass maker will let you make an unofficial Apple wallet pass for the WWDC23 event! I make these passes every year and they are a ton of fun! Thank you for downloading!</p>

<div class="form">
    <div class="HorizontalStack VerticallyCentered">
        <p>Your Name </p>
        <input autocomplete="name" id="name" type="text" name="name" bind:value={name}>    
    </div>
    <br>
    <button on:click={downloadPass}>Create Pass</button>    
</div>

<h2>What the pass looks like</h2>
<img alt="Screenshot of the WWDC23 Wallet Pass" src="/assets/images/wallet/wwdc23Detail.png"/>

