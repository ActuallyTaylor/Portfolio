<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte";
    import LeftAlignedDescriptionSection from "$lib/components/PageSections/LeftAlignedDescriptionSection.svelte";
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte";
    import ProjectPageNav from "$lib/components/ProjectPage/ProjectPageNav.svelte";

    import { Data } from "$lib/data";
    import { Project } from "$lib/models/Project";

    const id = "jellycuts"
    export let project: Project = Data.works.find((obj: Project) => {
        return obj.id == id
    }) ?? new Project("undefined", "undefined", "undefined", "undefined")
</script>
<span>
    <ProjectPageNav id={id} name={project.name}/>
    <ProjectPageHeader projectID={id} name={project.name} subtitle="Supercharge your Shortcuts" headerColor="#EECAFF"/>

    <DescriptionSection title="What is Jellycuts?">
        <span slot="description">
            Jellycuts is an IDE for iOS shortcuts that allows you to create complex shortcuts quickly and easily. You can create a shortcut in the Jelly language, a full programming language for iOS Shortcuts. Jellycuts then takes your code and converts it into shortcuts that are runnable in the shortcuts app.
        </span>
    </DescriptionSection>

    <LeftAlignedDescriptionSection title="iOS App" path="/assets/images/jellycuts/Screenshot.png">
        <span slot="description">
            Jellycuts offers both an iOS and iPad OS app! These apps can be used to directly intereact with Shortcuts on iOS and iPadOS devices. It uses both SwiftUI and UIKit as UI framework, and my custom text editor <a href='https://github.com/ActuallyZach/Firefly'>Firefly</a>. The iOS app has been in development for almost 3 years with 2 years on the app store and 11 months in testflight.
        </span>
        <span slot="extras">
            <a href="https://apps.apple.com/us/app/jellycuts/id1522625245" target="_blank">
                <img alt="iOS AppStore Badge" srcset="/assets/badges/appBadge.png 1x, /assets/badges/appBadge@2x.png 2x" class="appstoreButton" />
            </a>
        </span>
    </LeftAlignedDescriptionSection>
</span>