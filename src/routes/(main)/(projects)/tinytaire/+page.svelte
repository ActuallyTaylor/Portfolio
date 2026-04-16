<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte"
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte"

    import { Project } from "$lib/models/Project"
    import RightAlignedDescriptionSection from "$lib/components/PageSections/RightAlignedDescriptionSection.svelte";
    import LeftAlignedDescriptionSection from "$lib/components/PageSections/LeftAlignedDescriptionSection.svelte";
    import ImageSection from "$lib/components/PageSections/ImageSection.svelte";

    let { data: project } = $props();
</script>

<svelte:head>
    <title>{project.name} - Project</title>
    <meta name="description" content="Tiny solitaire for a cute console.">

    <script
            src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
            data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
    ></script>
</svelte:head>

<span>
    <ProjectPageHeader name={project.name} subtitle="Tiny solitaire for a cute console."/>

    <DescriptionSection title={undefined}>
        <span slot="description">
            Tinytaire is a solitaire game written for the <a href="https://play.date/">Playdate console</a>.
            I decided to write Tinytaire after wanting a fun project to test out Embedded Swift. I am a big fan of
            solitaire, and used to play it with my Popi (grandfather) all the time.
        </span>
    </DescriptionSection>

    <RightAlignedDescriptionSection title={"Launcher Card"} path={"assets/images/tinytaire/launcher-card.png"}>
        <span slot="description">
            The launcher card was one of the last things that I worked on for Tinytaire. It turns out, trying to display
            a solitaire game in such a small space is a difficult task. I ended up using a background of cards, with the name of overtop.
            <br/>
            <br/>
            The image was actually created using the game itself, and a screenshot was taken using the Playdate Simulator.
        </span>
    </RightAlignedDescriptionSection>

    <LeftAlignedDescriptionSection title={"Animations"} path={"assets/images/tinytaire/animations.gif"}>
        <span slot="description">
            Animations are a big part of making a game feel alive. I spent a lot of time working on card holding animations,
            invalid placement animations and many other small animations.
        </span>
    </LeftAlignedDescriptionSection>

    <RightAlignedDescriptionSection title={"Backgrounds"} path={"assets/images/tinytaire/backgrounds.gif"}>
        <span slot="description">
            To add a little bit of fun to the game, I converted a couple of famous images into dithered table backgrounds.
            These can be
        </span>
    </RightAlignedDescriptionSection>

</span>
