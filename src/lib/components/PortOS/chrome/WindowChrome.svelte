<script lang="ts">
    import WindowButton from "./WindowButton.svelte";
    import WindowChromeLines from "./WindowChromeLines.svelte";

    export let windowName: string;

    function closeWindoow() {
        console.log("Close Window")
    }

    function expandWindow() {
        console.log("Expand Window")
    }
</script>

<style>
    .WindowChrome {        
        display: flex;
        justify-content: center;
        align-items: center;


        height: 44px;

        background-color: #EEEEEE;

        box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 0.2);

        margin: 10px;
        margin-top: 0px;


    }

    .WindowChrome h1 {
        font-family: Rubik, Arial, Helvetica, sans-serif;
        text-transform: uppercase;
        white-space: nowrap;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0px;
        margin-top: auto;
        margin-bottom: auto;
        
        font-size: 1.3em;
    }
</style>

<div class="WindowChrome">
    <WindowChromeLines width={"10%"}></WindowChromeLines>
    <WindowButton callback={closeWindoow}>
        X
    </WindowButton>
    <WindowChromeLines></WindowChromeLines>
    <h1>{windowName}</h1>
    <WindowChromeLines></WindowChromeLines>
    <WindowButton callback={expandWindow}>
        E
    </WindowButton>
    <WindowChromeLines width={"10%"}></WindowChromeLines>
</div>
