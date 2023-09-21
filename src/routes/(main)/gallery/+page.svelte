<script lang="ts">
    import Gallery from "$lib/components/Gallery.svelte"
    import { roevwadePhotos, ritinfraredPhotos, miscInfraredPhotos, wonderPhotos } from "$lib/data"
</script>

<style>
    hr {
        border: 1px solid var(--subtext2);
        margin-top: 20px;
    }

    hr::before {
        content: "";
    }

    .singlePhoto {
        max-width: 100%;
        max-height: 500px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        margin-bottom: 10px;
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
<hr/>

<section class="alwaysUnderlinedLink">
    <h2>Roe v Wade Protests (June 27th 2022)</h2>
    <p>
        The decision to overturn Roe v. Wade on June 24th 2022 affected millions of people across the country.
        The decision had protected the lives and wellbeing of all people with uteruses for 49 years.
        The original decision to protected the privacy and life of all people with uteruses and provided a constitutional safe place for them to make decisions about their own bodies.
    </p>
    <p>
        On June 27th 2022 me and my partner decided that we were going to travel into Washington DC to join the people protesting the overturning of Roe v. Wade. We made signs in preparation and then drove into DC for the day.
        We joined a group of people who were already protesting out front of the Supreme Court. We spent the day out in front of the Supreme Court with the rest of the protesters hearing others share their stories.
    </p>
    <Gallery photos={roevwadePhotos}/>
</section>
<hr/>

<section class="alwaysUnderlinedLink">
    <h2>RIT Infrared Photos</h2>
    <p>
        These are a bunch of photos taken using a Nikon D3200 and an infrared filter. I just recently got really interested in infrared photography,
        so I am still learning the best ways to composite and edit infrared photographs. Right now I am using <a href="https://www.darktable.org">Darktable</a>
        to edit all of my photos.
    </p>
    <p>
        Some of my favorite photos in this set were actually a mistake. My favorite photos here show what I like to call ghost people. These ghost people are a
        result of the long exposure time needed for infrared on an unconverted camera.
    </p>
    <Gallery photos={ritinfraredPhotos}/>
</section>
<hr/>

<section class="alwaysUnderlinedLink">
    <h2>Wonder Art Gallery Photos</h2>
    <p>
        <a href="https://philadelphia.wonderspaces.com">Wonderspaces Philadelphia</a> is a really cool art installation in center Philly. It is a really nice place to just explore and see the different exhibits.
    </p>
    <Gallery photos={wonderPhotos}/>
</section>

<hr/>

<section class="alwaysUnderlinedLink">
    <h2>Misc Infrared Photos</h2>
    <p>
        This is just a collection of some random objects that I photographed in infrared.
    </p>
    <img class="singlePhoto" src={miscInfraredPhotos[0].replace('compressed', 'gallery')} alt="">
    <img class="singlePhoto" src={miscInfraredPhotos[1].replace('compressed', 'gallery')} alt="">
</section>
