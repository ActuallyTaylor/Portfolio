<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte"
    import GallerySection from "$lib/components/PageSections/GallerySection.svelte"
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte"
    import ProjectPageNav from "$lib/components/ProjectPage/ProjectPageNav.svelte"

    import { ritinfraredPhotos, interests } from "$lib/data"
    import { Project } from "$lib/models/Project"

    const id = "ritinfrared"
    export let project: Project = interests.find((obj: Project) => {
        return obj.id == id
    }) ?? new Project("undefined", "undefined", "undefined", "undefined")

    export let paths = ritinfraredPhotos
</script>
<svelte:head>
  <title>{project.name} - Project</title>
  <meta name="description" content="Infrared Photography">

  <script
  src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
  data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
  ></script>
</svelte:head>
<span>
    <ProjectPageNav id={id} name={project.name.replaceAll("<br>", "")}/>
    <ProjectPageHeader name={project.name} subtitle="Infrared Photography"/>

    <DescriptionSection title={undefined}>
        <span slot="description">
            These are a bunch of photos taken using a Nikon D3200 and an infrared filter. I just recently got really interested in infrared photography,
            so I am still learning the best ways to composite and edit infrared photographs. Right now I am using <a href="https://www.darktable.org">Darktable</a>
            to edit all of my photos.
        </span>
    </DescriptionSection>
    <DescriptionSection title={undefined}>
        <span slot="description">
            Some of my favorite photos in this set were actually a mistake. My favorite photos here show what I like to call ghost people. These ghost people are a
            result of the long exposure time needed for infrared on an unconverted camera.
        </span>
    </DescriptionSection>
    <GallerySection title={"Photos"} imagePaths={paths}>

    </GallerySection>
</span>
