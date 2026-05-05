<script lang="ts">
    import type { OpenGraph } from '$lib/models/OpenGraph'
	import { page } from '$app/state';

    interface Props {
        title?: string
        description?: string
        openGraph?: OpenGraph // Open Graph is optional, so svelte does not complain when we use OpenGraphMeta without an open graph object.
    }

    // Create a default opengraph object if none is provided.
    let { openGraph, title, description }: Props = $props();

    let resolvedOpenGraph = $derived(openGraph ?? {
        image: "https://actuallytaylor.com/opengraph.png",
        imageAlt: "",
        title: title ?? "Taylor Lineman",
        description: description ?? "Taylor Lineman's personal website",
        url: page.url.toString(),
        contentType: "website",
        imageWidth: 1200,
        imageHeight: 630
    });
</script>

<!-- Open Graph Begin -->
<meta property="og:title" content={resolvedOpenGraph.title}>
<meta property="og:url" content={resolvedOpenGraph.url}>
<meta property="og:type" content={resolvedOpenGraph.contentType}>
<meta property="og:image" content={resolvedOpenGraph.image}>
<meta property="og:image:width" content={resolvedOpenGraph.imageWidth.toString()}>
<meta property="og:image:height" content={resolvedOpenGraph.imageHeight.toString()}>
<!-- Open Graph End -->
