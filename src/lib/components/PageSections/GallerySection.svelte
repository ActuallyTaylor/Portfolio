<script lang="ts">
    export let title: string | undefined
    export let imagePaths: string[]

    export let selectedPhoto: string = imagePaths[0].replace("compressed", "gallery")
    export let originalSelectedPhoto: string = imagePaths[0]

    function clickedPhoto(path: string) {
        originalSelectedPhoto = path
        selectedPhoto = path
        selectedPhoto = selectedPhoto.replace("compressed", "gallery")
    }

    function nextPhoto() {
        let index = imagePaths.indexOf(selectedPhoto.replace("gallery", "compressed"))
        if (index < imagePaths.length - 1) {
            clickedPhoto(imagePaths[index + 1])
        }
    }

    function previousPhoto() {
        let index = imagePaths.indexOf(selectedPhoto.replace("gallery", "compressed"))
        if (index > 0) {
            clickedPhoto(imagePaths[index - 1])
        }
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
    align-items: center;
    position: relative;
}

.selectedPhotoContainer button {
    position: absolute;
    z-index: 10;
    background-color: #ffffff00;
    border: none;
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
    opacity: .5;
    border-radius: 7px;
}

.bottomBarButton img:hover {
    opacity: .75;
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

.selected {
    opacity: 1.0;
    border: solid rgba(0, 0, 255, 0.8) 2px;
}

</style>

<div class="description">
    {#if title != undefined }
    <h2>{title}</h2>
    {/if}
    <div class="selectedPhotoContainer">
        <button style="left: 0px;" on:click={previousPhoto}>
            <img src="/assets/element/ChevronLeft.svg" alt="Next" height="50px"/>
        </button>
        <img class="selectedPhoto" src="{selectedPhoto}" alt="{selectedPhoto}"/>
        <button  style="right: 0px;" on:click={nextPhoto}>
            <img src="/assets/element/ChevronRight.svg" alt="Next" height="50px"/>
        </button>
    </div>
    <div class="photoBottomScroll">
        {#each imagePaths as path}
        <button class="bottomBarButton" id="{path}" on:click={() => clickedPhoto(path)}>
            <img class="bottomBarPhoto" src="{path}" alt="{path}" class:selected="{originalSelectedPhoto == path}"/>
        </button>
        {/each}
    </div>
    <slot name="extras">

    </slot>
</div>
