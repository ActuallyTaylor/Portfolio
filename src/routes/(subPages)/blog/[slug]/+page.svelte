<script lang="ts">
    import { onMount } from 'svelte'
    import PageNavigation from "$lib/components/ProjectPage/ProjectPageNav.svelte"
    import SvelteMarkdown, { type Renderers } from 'svelte-markdown'
    import ListItem from '$lib/components/MarkdownRenderers/ListItem.svelte'

    export let data
    let blog = data.blog
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
  <title>{blog.title} - Blog</title>
  <meta name="description" content="{blog.description}">
  <link rel="stylesheet" href="/assets/css/blog.css"/>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-dark.min.css">

  <script
  src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
  data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
  ></script>
</svelte:head>

<style>
    .header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .title {
      padding: 0px;
      margin-top: 20px;
      font-weight: 700;
    }

    .dateAndReadingTime {
      font-weight: 600;
      margin-top: 5px;
      padding: 0px;
    }

    hr {
        border-width: 0px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    hr::before {
      content: "\2022\2022\2022";
      letter-spacing: 1.25em;
      margin-left: 1.25em;
      font-size: 1.1em;
    }
</style>

<div>
    <PageNavigation id={`blog/${blog.slug}`} name={blog.title}/>
    <div class="header">
      <h1 class="title">{blog.title}</h1>
      <h3 class="dateAndReadingTime">{blog.date.toLocaleDateString("lookup", {weekday: "long", year: "numeric", day: "numeric", month: "long"})}  •  {blog.readingTime}</h3>
      <hr/>
    </div>

    <SvelteMarkdown {source} renderers={renderers}/>
</div>
