<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";
import type { ProjectPageData } from "$lib/interfaces/ProjectPageData";
    import type { Project } from "$lib/models/Project";


    export let data: ProjectPageData;
    export let project: Project = data.project;
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/cssLibrary.css" />
    <link rel="stylesheet" href="/css/index.css" />
</svelte:head>

<h1>{project.name}</h1>
<h2>{project.subtitle}</h2>