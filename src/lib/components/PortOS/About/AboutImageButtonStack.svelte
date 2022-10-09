<script lang="ts">
    import AboutContainer from "./AboutContainer.svelte";

    export let name: string
    export let buttonName: string
    export let imagePath: string
    export let buttonCallback: () => void
</script>

<style>
.container {
    position: relative
}
button {
    position: absolute;
    bottom: 15px;
    right: 15px;

    background-color: #D9D9D9;
    border: 1px solid;
    border-color: #4E5253;

    width: 110px;
    height: 45px;

    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.2);
}

h1 {
    margin-top: 0px;
    margin-bottom: 10px;
}
</style>

<AboutContainer width={"250px"} height={"fit-content"}>
    <div class="container">
        <h1>{name}</h1>
        <img src={imagePath} alt={name} width="84" height="84"/>
        <button on:click={buttonCallback}>
            {buttonName}
        </button>
    </div>
</AboutContainer>