<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte"
    import GallerySection from "$lib/components/PageSections/GallerySection.svelte"
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte"
    import ProjectPageNav from "$lib/components/ProjectPage/ProjectPageNav.svelte"

    import { inter, wonder } from "$lib/data"
    import { Project } from "$lib/models/Project"

    const id = "wonderspace"
    export let project: Project = interests.find((obj: Project) => {
        return obj.id == id
    }) ?? new Project("undefined", "undefined", "undefined", "undefined")

    export let paths = wonderPhotos
</script>
<svelte:head>
  <title>{project.name} - Project</title>
  <meta name="description" content="Modern Art Museum">

  <script
  src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
  data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
  ></script>
</svelte:head>
<span>
    <ProjectPageNav id={id} name={project.name.replaceAll("<br>", "")}/>
    <ProjectPageHeader name={project.name.replaceAll("<br>", "")} subtitle="Modern Art Museum"/>

    <DescriptionSection title={undefined}>
        <span slot="description">
            <a href="https://philadelphia.wonderspaces.com">Wonderspaces Philadelphia</a> is a really cool art installation in center Philly. It is a really nice place to just explore and see the different exhibits.
        </span>
    </DescriptionSection>
    <GallerySection title={"Photos"} imagePaths={paths}>

    </GallerySection>
</span>
