<script lang="ts">
    export let title: string | undefined;
    export let youtubeEmbedID: string | undefined = undefined;
    export let localPath: string | undefined = undefined;
</script>

<div class="video">
    {#if title}
        <h2>{title}</h2>
    {/if}
    {#if youtubeEmbedID}
        <div class="videoWrapper">
            <iframe
                title="{title} video"
                width="560"
                height="349"
                src="https://www.youtube-nocookie.com/embed/{youtubeEmbedID}?rel=0;showinfo=0&autoplay=0&loop=0&controls=0&hd=1"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </div>
    {/if}
    {#if localPath}
        <video width="560" height="349" controls>
            <source src={localPath} type="video/mp4" />
            Your browser does not support the video tag.
            <track kind="captions" />
        </video>
    {/if}
    <p>
        <slot name="description"></slot>
    </p>

    <slot name="extras"></slot>
</div>

<style>
    .video {
        margin-bottom: 20px;
    }

    .videoWrapper {
        position: relative;
        margin: 2em;
        padding-bottom: 56.25%;
        height: 0;
    }

    .videoWrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
