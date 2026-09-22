<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte"
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte"

    import RightAlignedDescriptionSection from "$lib/components/PageSections/RightAlignedDescriptionSection.svelte";
    import LeftAlignedDescriptionSection from "$lib/components/PageSections/LeftAlignedDescriptionSection.svelte";

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
    <ProjectPageHeader name={project.name} subtitle="A work in progress solitaire game for a tiny console."/>

    <DescriptionSection title={undefined}>
        <span slot="description">
            Tinytaire is a solitaire game written for the <a href="https://play.date/">Playdate console</a>.
            I decided to write Tinytaire after wanting a fun project to test out Embedded Swift. I am a big fan of
            solitaire, and used to play it with my Popi (grandfather) all the time.
        </span>
    </DescriptionSection>

    <DescriptionSection title={"Open Source"}>
        <span slot="description">
            The solitaire engine that powers Tinytaire is currently the only open-source part of Tinytaire.
            The engine was designed to be modular enough that it can be used by any client on any system.
            As embedded swift continues to grow in usefulness, I thought a fun challenge would be to port
            my solitaire engine to as many devices as possible. This is a long term goal of mine, and something
            I will definitely post about.
        </span>
        <span slot="extras">
            <a href="https://github.com/ActuallyTaylor/SolitaireCore" target="_blank">
                <img alt="SolitaireCore on GitHub" srcset="/assets/badges/GithubBadge.png 1x, /assets/badges/GithubBadge@2x.png 2x" class="appstoreButton" />
            </a>

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
