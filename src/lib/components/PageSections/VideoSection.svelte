<script lang="ts">
    export let title: string | undefined
    export let youtubeEmbedID: string
</script>

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

<div class="video">
    {#if title != undefined }
    <h2>{title}</h2>
    {/if}
    <div class="videoWrapper">
        <iframe title="{title} video" width="560" height="349" src="https://www.youtube-nocookie.com/embed/{youtubeEmbedID}?rel=0;showinfo=0&autoplay=0&loop=0&controls=0&hd=1" frameborder="0" allowfullscreen></iframe>
    </div>

    <slot name="extras">

    </slot>
</div>
