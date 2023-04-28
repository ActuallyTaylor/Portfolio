<script lang="ts">
    import { onMount } from 'svelte';
    import PageNavigation from "$lib/components/ProjectPage/ProjectPageNav.svelte"
    import SvelteMarkdown, { type Renderers } from 'svelte-markdown'
    import ListItem from '$lib/components/MarkdownRenderers/ListItem.svelte';

    export let data;
    let blog = data.blog;
    const source = blog.content
    const renderers: Renderers = {
        "listitem": ListItem
    }

    onMount(() => {
        let hljsScript = document.createElement('script');
        hljsScript.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"
        document.head.append(hljsScript);

        hljsScript.onload = function() {
            hljs.highlightAll();
        }
    })
</script>

<svelte:head>
  <title>{blog.title} - Blog</title>
  <meta name="description" content="{blog.description}">
  <link rel="stylesheet" href="/assets/css/blog.css"/>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-dark.min.css">
</svelte:head>

<style>
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>

<div>  
    <PageNavigation id={`blog/${blog.slug}`} name={blog.title}/>
    <div class="header">
        <h1 class="headerTitle">{blog.title}</h1>
        <h2 class="headerTitle">{blog.description}</h2>    
    </div>

    <SvelteMarkdown {source} renderers={renderers}/>
</div>