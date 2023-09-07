<script lang="ts">
    import { roevwadePhotos, ritinfraredPhotos, miscInfraredPhotos, wonderPhotos } from "$lib/data"
</script>

<style>
    .photoGallery {
        list-style: none;
        display: flex;
        flex-wrap: nowrap;
        overflow: scroll;
        align-items: center;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        padding: 20px;
        gap: 20px;
    }

    .photoGallery li {
        margin: 0px;
        padding: 0px;
        position: relative;
    }

    .photoGallery img {
        margin: 0px;
        padding: 0px;
        scroll-snap-align: center;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .photoOverlay {
        position: absolute;
        top: 90%;
        left: 10%;

        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);

    }
</style>

<section class="alwaysUnderlinedLink">
    <h1>📸 Gallery</h1>
    <p>
        Welcome to the (Super official) Taylor Lineman Gallery!
        Jokes out of the way, this is a small gallery of some of my favorite photos.
        All of these photos were taken by me on a <a href="https://en.wikipedia.org/wiki/Nikon_D3200">Nikon D3200</a>
    </p>
</section>

<section>
    <h2>Roe v Wade Protests</h2>
    <ul class="photoGallery">
        {#each roevwadePhotos as path}
        <li>
            <img id={path} src={path} alt={path} loading="lazy">
            <div class="photoOverlay">
                <button>Download</button>
            </div>
        </li>
        {/each}
     </ul>

</section>

