<script lang="ts">
    import PageNavigation from "$lib/components/ProjectPage/ProjectPageNav.svelte"
    import BlogPageHeader from "$lib/components/ProjectPage/BlogPageHeader.svelte"
    import SvelteMarkdown from 'svelte-markdown'

    export let data;
    let blog = data.blog;
    const source = blog.content
</script>

<svelte:head>
  <title>{blog.title} - Blog</title>
  <meta name="description" content="{blog.description}">
</svelte:head>

<div class="blogBody">
    <PageNavigation id={`blog/${blog.slug}`} name={blog.title}/>
    <BlogPageHeader name={blog.title} subtitle={blog.description} headerColor={blog.hex}/>
    <SvelteMarkdown {source}/>
</div>