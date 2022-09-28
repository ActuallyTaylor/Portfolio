<script lang="ts">
    import AboutContainer from "./AboutContainer.svelte";

    export let name: string
    export let buttonName: string
    export let imagePath: string
    export let buttonCallback: () => void
</script>
<AboutContainer width={"275px"} height={"150px"}>
    <h1>{name}</h1>
    <img src={imagePath} alt={name} width="84" height="84"/>
    <button on:click={buttonCallback}>
        {buttonName}
    </button>
</AboutContainer>