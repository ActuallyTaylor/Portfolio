<script lang="ts">
    import { each } from "svelte/internal";


    export let title: string | undefined
    export let imagePaths: string[]

    export let selectedPhoto: string = imagePaths[0]

    function clickedPhoto(path: string) {
        selectedPhoto = path
    }
</script>

<style>
.description {
    margin-bottom: 20px;
}

.selectedPhotoContainer {
    display: flex;
    justify-content: center;
    margin: 20px;
}

.selectedPhoto {
    max-height: 500px;
    max-width: 100%;
}

.photoBottomScroll {
    display: flex;
    overflow-y: scroll;
}

.bottomBarPhoto {
    height: 100px;
    width: 100px;
    object-fit: cover;
    margin-right: 10px; 
}

.bottomBarButton {
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
</style>

<div class="description">
    {#if title != undefined }
    <h2>{title}</h2>
    {/if}
    <div class="selectedPhotoContainer">
        <img class="selectedPhoto" src="{selectedPhoto}" alt="{selectedPhoto}"/>
    </div>
    <div class="photoBottomScroll">
        {#each imagePaths as path}
        <button class="bottomBarButton" id="{path}" on:click={() => clickedPhoto(path)}>
            <img class="bottomBarPhoto" src="{path}" alt="{path}"/>
        </button>
        {/each}
    </div>
    <slot name="extras">

    </slot>
</div>
