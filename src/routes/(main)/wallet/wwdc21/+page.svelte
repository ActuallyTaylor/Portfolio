<script lang="ts">
    import { goto } from "$app/navigation"

    let name: string;

    function downloadPass() {
        goto("https://actuallyhome.herokuapp.com/API/wallet/wwdc21/create?name=" + name)
    }
</script>

<style>
    .form {
        display: block;
    }

    .form button {
        background-color: var(--crust);
        color: var(--primary);
        font-family: inherit;
        font-size: inherit;
        margin-right: 6px;
        margin-bottom: 6px;
        padding: 10px;
        border: solid var(--black) 1px;
        border-radius: 6px;
        outline: none;
    }

    .form input {
        background-color: var(--crust);
        color: var(--primary);
        font-family: inherit;
        font-size: inherit;
        margin-right: 6px;
        margin-bottom: 6px;
        padding: 10px;
        border: solid var(--black) 1px;
        border-radius: 6px;
        outline: none;
    }

    .form p {
        margin-top: 5px;
        margin-right: 10px;
    }
</style>

<svelte:head>
  <title>WWDC21 Wallet Pass</title>
  <meta name="description" content="An unofficial Apple Wallet pass for WWDC21!">

  <script
  src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
  data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
  ></script>
</svelte:head>

<h1>WWDC21 Wallet Pass Maker!</h1>
<p>This pass maker will let you make an unofficial Apple wallet pass for the WWWDC21 event!</p>

<div class="form">
    <div class="HorizontalStack VerticallyCentered">
        <p>Your Name </p>
        <input autocomplete="name" id="name" type="text" name="name" bind:value={name}>
    </div>
    <br>
    <button on:click={downloadPass}>Create Pass</button>
</div>
