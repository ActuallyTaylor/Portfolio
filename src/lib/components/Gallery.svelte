<script lang="ts">
    import { Photo } from "$lib/models/Photo";
    import { onMount } from 'svelte';

    export let photos: Photo[]
    export let selectedPhoto: Photo = photos[0]

    let isFullscreen = false;

    function clickedPhoto(photo: Photo) {
        selectedPhoto = photo
    }

    function nextPhoto() {
        let index = photos.indexOf(selectedPhoto)

        if (index < photos.length - 1) {
            clickedPhoto(photos[index + 1])
        }
    }

    function previousPhoto() {
        let index = photos.indexOf(selectedPhoto)
        if (index > 0) {
            clickedPhoto(photos[index - 1])
        }
    }
</script>

<style>
    .mainPhoto {
        max-width: 100%;
        max-height: 500px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
    }

    .mainPhotoContainer {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .photoGalleryContainer {
        position: relative;
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 800px) {
         .photoGalleryContainer {
            margin-left: 50px;
            margin-right: 50px;
         }
      }

    .photoGallery {
        list-style: none;
        display: flex;
        flex-wrap: nowrap;
        overflow: scroll;
        align-items: center;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        padding: 20px;
        gap: 10px;
        padding: 0px;
    }

    .photoGallery li {
        margin: 0px;
        padding: 0px;
        position: relative;
    }

    .advanceButton {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }

    .photoGalleryListItem button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }

    .photoGalleryListItem img {
        scroll-snap-align: start;
        object-fit: cover;
        border-radius: 7px;
        height: 100px;
        width: 100px;
    }
    .selected {
        border: solid var(--link) 2px;
    }

    .notSelected {
        border: solid transparent 2px;
    }
</style>

<div class="photoGalleryContainer">
    <ul class="photoGallery">
        {#each photos as path}
        <li class="photoGalleryListItem">
            <button on:click={() => clickedPhoto(path)}>
                <img class="{selectedPhoto == path ? 'selected' : 'notSelected'}" id={path.gallery_path} src={path.gallery_path} alt={path.caption} loading="lazy">
            </button>
        </li>
        {/each}
    </ul>

    <button class="advanceButton" style="left: -50px;" on:click={previousPhoto}>
        <img src="/assets/element/ChevronLeft.svg" alt="Next" height="50px"/>
    </button>
    <button class="advanceButton" style="right: -50px;" on:click={nextPhoto}>
        <img src="/assets/element/ChevronRight.svg" alt="Next" height="50px"/>
    </button>
</div>

<div class="mainPhotoContainer">
    <img class="mainPhoto" src={selectedPhoto.large_path} alt={selectedPhoto.caption}>
</div>

