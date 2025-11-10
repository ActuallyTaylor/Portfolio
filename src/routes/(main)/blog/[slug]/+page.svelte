<script lang="ts">
    import { onMount } from 'svelte'
    import Header from "$lib/components/Header.svelte"
    import SvelteMarkdown, { type Renderers } from 'svelte-markdown'
    import ListItem from '$lib/components/MarkdownRenderers/ListItem.svelte'
    import type { BlogEntry } from '$lib/models/BlogEntry.js';

    let props = $props();
    let blog: BlogEntry = props.data;
    
    const source = blog.content

    const renderers: Renderers = {
        "listitem": ListItem
    }

    onMount(() => {
        let hljsScript = document.createElement('script')
        hljsScript.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"
        document.head.append(hljsScript)

        hljsScript.onload = function() {
            hljs.highlightAll()
        }
    })
</script>

<svelte:head>
    <title>{blog.title}</title>
    <meta name="description" content="{blog.description}">

    <link rel="stylesheet" href="/assets/css/blog.css"/>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-dark.min.css">

    {#if blog.series == "wonderWeb"}
        <link rel="icon" href="/wwwfavicon.png" />
    {/if}

    <script
    src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
    data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
    ></script>

    <!-- Open Graph Begin -->
    <meta property="og:title" content={blog.title}>
    <meta property="og:url" content="https://actuallytaylor.com/blog/{blog.slug}">
    <meta property="og:description" content={blog.description}>
    <meta property="og:type" content="article">
    {#if blog.series == "wonderfulWeb" }
    <meta property="og:image" content="https://actuallytaylor.com/wonderfulopengraph.png">
    <meta property="og:image:width" content="1820.44">
    <meta property="og:image:height" content="1024">
    {:else }
    <meta property="og:image" content="https://actuallytaylor.com/opengraph.png">
    <meta property="og:image:width" content="1280">
    <meta property="og:image:height" content="720">
    {/if }
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

    .dateAndReadingTime {
      color: var(--subtext2);
      font-weight: 600;
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
    <h1 class="title">{blog.title}</h1>
    <h3 class="dateAndReadingTime">{blog.date.toLocaleDateString("lookup", {weekday: "long", year: "numeric", day: "numeric", month: "long"})}  •  {blog.readingTime}</h3>
</section>

<hr/>

<section>
    <div class="alwaysUnderlinedLink">
        <SvelteMarkdown {source} renderers={renderers}/>
    </div>
</section>
