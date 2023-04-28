<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte";
    import GallerySection from "$lib/components/PageSections/GallerySection.svelte";
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte";
    import ProjectPageNav from "$lib/components/ProjectPage/ProjectPageNav.svelte";

    import { Data } from "$lib/data";
    import { Project } from "$lib/models/Project";

    const id = "miscinfrared"
    export let project: Project = Data.interests.find((obj: Project) => {
        return obj.id == id
    }) ?? new Project("undefined", "undefined", "undefined", "undefined")

    export let paths = Data.miscInfraredPhotos
</script>
<svelte:head>
  <title>{project.name} - Project</title>
  <meta name="description" content="Random Infrared Photography">
</svelte:head>

<span>
    <ProjectPageNav id={id} name={project.name.replaceAll("<br>", "")}/>
    <ProjectPageHeader projectID={id} name={project.name.replaceAll("<br>", "")} subtitle="Random Infrared Photography" headerColor="#FFB6EF"/>

    <DescriptionSection title={undefined}>
        <span slot="description">
            This is just a collection of some random objects that I photographed in infrared.
        </span>
    </DescriptionSection>
    <GallerySection title={"Photos"} imagePaths={paths}>

    </GallerySection>
</span>