<script lang="ts">
    import { onMount } from 'svelte';
    import PageNavigation from "$lib/components/ProjectPage/ProjectPageNav.svelte"
    import BlogPageHeader from "$lib/components/ProjectPage/BlogPageHeader.svelte"
    import SvelteMarkdown from 'svelte-markdown'

    export let data;
    let blog = data.blog;
    const source = blog.content

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

<div class="blogBody">  
    <PageNavigation id={`blog/${blog.slug}`} name={blog.title}/>
    <BlogPageHeader name={blog.title} subtitle={blog.description} headerColor={blog.hex}/>
    <SvelteMarkdown {source}/>
</div>