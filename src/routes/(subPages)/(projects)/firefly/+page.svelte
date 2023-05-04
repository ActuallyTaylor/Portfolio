<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte"
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte"
    import ProjectPageNav from "$lib/components/ProjectPage/ProjectPageNav.svelte"

    import { Data } from "$lib/data"
    import { Project } from "$lib/models/Project"

    const id = "firefly"
    export let project: Project = Data.works.find((obj: Project) => {
        return obj.id == id
    }) ?? new Project("undefined", "undefined", "undefined", "undefined")
</script>
<svelte:head>
  <title>{project.name} - Project</title>
  <meta name="description" content="An open source Swift, UIKit and SwiftUI syntax highlighter.">
</svelte:head>
<span>
    <ProjectPageNav id={id} name={project.name}/>
    <ProjectPageHeader projectID={id} name={project.name} subtitle="Highlight the world" headerColor="#D1FFCA"/>

    <DescriptionSection title={undefined}>
        <span slot="description">
            Firefly is a pure swift Syntax highlighter for iOS. It was created to be a fast and native solution to a problem that did not have many good solutions. 
            The project is open sourced so that anyone can help improve it and make it the best syntax highlighter for iOS.
        </span>
        <span slot="extras">
        </span>
    </DescriptionSection>

    <DescriptionSection title={"Why Make Firefly?"}>
        <span slot="description">
            When I started working on Jellycuts, there was no good solution for an iOS based syntax highlighter. 
            There were solutions that existed, such as <a href="https://github.com/twostraws/Sourceful">Sourceful</a> by Paul Hudson and <a href="https://github.com/raspu/Highlightr">Highlightr</a>. 
            Both of these had drawbacks when it came to loading large files and adding custom languages. Because of this, I took the opportunity to create a modern syntax highlighter for both SwiftUI and UIKit.
            
        </span>
        <span slot="extras">
            <a href="https://github.com/ActuallyZach/Firefly" target="_blank">
                <img alt="Firefly Github" srcset="/assets/badges/GithubBadge.png 1x, /assets/badges/GithubBadge@2x.png 2x" class="appstoreButton" />
            </a>        
        </span>
    </DescriptionSection>
</span>