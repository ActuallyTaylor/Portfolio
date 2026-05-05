<script lang="ts">
    import {onMount} from 'svelte'
    import SvelteMarkdown from '@humanspeak/svelte-markdown'

    let { data } = $props()

    onMount(() => {
        let hljsScript = document.createElement('script')
        hljsScript.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"
        document.head.append(hljsScript)

        hljsScript.onload = function () {
            hljs.highlightAll()
        }
    })
</script>

<svelte:head>
    <title>{data.blog.title}</title>
    <meta name="description" content="{data.blog.description}">

    <link rel="stylesheet" href="/assets/css/blog.css"/>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-dark.min.css">

    {#if data.blog.series == "wonderWeb"}
        <link rel="icon" href="/wwwfavicon.png"/>
    {/if}

    <script
            src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
            data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
    ></script>

    <!-- Open Graph Begin -->
    <meta property="og:title" content={data.blog.title}>
    <meta property="og:url" content="https://actuallytaylor.com/blog/{data.blog.slug}">
    <meta property="og:description" content="{data.blog.description}">
    <meta property="og:type" content="article">
    {#if data.blog.series === "wonderfulWeb" }
        <meta property="og:image" content="https://actuallytaylor.com/wonderfulopengraph.png">
        <meta property="og:image:width" content="1820.44">
        <meta property="og:image:height" content="1024">
        <meta property="og:image:alt" content="Dictionary Entry: Wonderful Web Wednesday, (Noun), Finding beauty in the web every Wednesday.">
    {:else }
        <meta property="og:image" content="{data.openGraph.image}">
        <meta property="og:image:width" content="{data.openGraph.imageWidth.toString()}">
        <meta property="og:image:height" content="{data.openGraph.imageHeight.toString()}">
        <meta property="og:image:alt" content="{data.openGraph.imageAlt}">
    {/if  }
    <!-- Open Graph End -->
</svelte:head>

<style>
    .title {
        font-size: 2em;
        padding: 0px;
        margin-top: 20px;
        font-weight: 700;
        margin-bottom: 0px;
    }

    .description {
        color: var(--subtext2);
        font-weight: 600;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 0px;
    }

    .dateAndReadingTime {
        color: var(--subtext2);
        font-weight: 500;
        margin-top: 10px;
        padding: 0px;
    }

    hr {
        border: 1px solid var(--subtext2);
    }

    hr::before {
        content: "";
    }
</style>

<section class="header">
    <h1 class="title">{data.blog.title}</h1>
    <h2 class="description">{data.blog.description}</h2>
    <h3 class="dateAndReadingTime">{data.blog.date.toLocaleDateString("lookup", {
        weekday: "long",
        year: "numeric",
        day: "numeric",
        month: "long"
    })}  •  {data.blog.readingTime}</h3>
</section>

<hr/>

<section>
    <div class="alwaysUnderlinedLink">
        <SvelteMarkdown source={data.blog.content} />
    </div>
</section>
