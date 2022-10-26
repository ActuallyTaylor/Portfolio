<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte";
    import GallerySection from "$lib/components/PageSections/GallerySection.svelte";
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte";
    import ProjectPageNav from "$lib/components/ProjectPage/ProjectPageNav.svelte";

    import { Data } from "$lib/data";
    import { Project } from "$lib/models/Project";

    const id = "roevwade"
    export let project: Project = Data.interests.find((obj: Project) => {
        return obj.id == id
    }) ?? new Project("undefined", "undefined", "undefined", "undefined")

    export let paths = Data.roevwadePhotos
</script>
<svelte:head>
  <title>{project.name} - Project</title>
  <meta name="description" content="Political Photography">
</svelte:head>
<span>
    <ProjectPageNav id={id} name={project.name.replaceAll("<br>", "")}/>
    <ProjectPageHeader projectID={id} name={project.name.replaceAll("<br>", "")} subtitle="Political Photography" headerColor="#FFB6B6"/>

    <DescriptionSection title={undefined}>
        <span slot="description">
            The decision to overturn Roe v. Wade on June 24th 2022 affected millions of people across the country. 
            The decision had protected the lives and wellbeing of all people with uteruses for 49 years. 
            The original decision to protected the privacy and life of all people with uteruses and provided a constitutional safe place for them to make decisions about their own bodies.
        </span>
    </DescriptionSection>
    <DescriptionSection title={"When were the photos taken?"}>
        <span slot="description">
            On June 27th 2022 me and my partner decided that we were going to travel into Washington DC to join the people protesting the overturning of Roe v. Wade. We made signs in preparation and then drove into DC for the day. 
            We joined a group of people who were already protesting out front of the Supreme Court. We spent the day out in front of the Supreme Court with the rest of the protesters hearing others share their stories.
        </span>
    </DescriptionSection>
    <GallerySection title={"Photos"} imagePaths={paths}>

    </GallerySection>
</span>