<script lang="ts">
    import Gallery from '$lib/components/Gallery.svelte';

    export let data;
    export let items = data.photos;
</script>

<style>
    .fullscreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
    }

    .fullscreen img {
        max-width: 100%;
        max-height: 100%;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
</style>

<section class="alwaysUnderlinedLink">
    <h1>📸 Gallery</h1>
    <p>
        Welcome to the (Super official) Taylor Lineman Gallery!
        Jokes out of the way, this is a small gallery of some of my favorite photos.
        These photos were taken on a mix of cameras.
    </p>
    <h2>Cameras</h2>
    <ul>
        <li><a href="https://en.wikipedia.org/wiki/Nikon_Z50">Nikon Z50</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Nikon_D3200">Nikon D3200</a></li>
    </ul>
</section>

<section class="alwaysUnderlinedLink">
    <Gallery photos={items}/>
</section>


<section>
    <h2>Events</h2>
    <h3>Roe v Wade Protests (June 27th 2022)</h3>
    <p>
        The decision to overturn Roe v. Wade on June 24th 2022 affected millions of people across the country.
        The decision had protected the lives and wellbeing of all people with uteruses for 49 years.
        The original decision to protected the privacy and life of all people with uteruses and provided a constitutional safe place for them to make decisions about their own bodies.
    </p>
    <p>
        On June 27th 2022 me and my partner decided that we were going to travel into Washington DC to join the people protesting the overturning of Roe v. Wade. We made signs in preparation and then drove into DC for the day.
        We joined a group of people who were already protesting out front of the Supreme Court. We spent the day out in front of the Supreme Court with the rest of the protesters hearing others share their stories.
    </p>
</section>

