<script lang="ts">
    import { Photo } from "$lib/models/Photo";

    export let fullscreen: string;
    export let photo: Photo;

    function setFullscreen() {
        fullscreen = photo.filename;
    }
</script>

<style>
    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
</style>

<button on:click={setFullscreen}>
    <img width="100%" height="100%" class="photo" src={`/photos/${photo.filename}`} alt={photo.caption}>
</button>