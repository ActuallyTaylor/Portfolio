<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte";
    import LeftAlignedDescriptionSection from "$lib/components/PageSections/LeftAlignedDescriptionSection.svelte";
    import VideoSection from "$lib/components/PageSections/VideoSection.svelte";
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte";

    import { works } from "$lib/data";
    import { Project } from "$lib/models/Project";

    const id = "impel";
    export let project: Project =
        works.find((obj: Project) => {
            return obj.id == id;
        }) ?? new Project("undefined", "undefined", "undefined", "undefined");
</script>

<svelte:head>
    <title>{project.name} - Project</title>
    <meta name="description" content="An AI Assitant for the future" />

    <script
        src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
        data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
    ></script>
</svelte:head>

<span>
    <ProjectPageHeader name={project.name} subtitle="Impel, AI Assistant" />

    <DescriptionSection title="What was Impel?">
        <span slot="description">
            Impel was an AI assitant that I worked on for a couple of months
            with <a
                class="alwaysColoredLinkForATag"
                href="https://github.com/impel-intelligence"
                >Impel Intelligence</a
            >. The idea of Impel was to create an AI that could run completely
            on-device and interprete what you were doing in real-time. This
            proccessing was done through a combination of a text-classifciation
            model that I trained and some good old custom detection code.
        </span>
    </DescriptionSection>

    <VideoSection
        title={"Document Summary"}
        localPath={"videos/PrivateTutor.mp4"}
    >
        <span slot="description">
            Summarizing documents and research papers was one of the most
            important features of impel. It allows the user to summarize an
            entire article and then chat with the document to get a better
            understanding of what is going on. This brought together the
            benefits of AI being able to summarize documents, as well as explain
            them in any way needed.
        </span>
    </VideoSection>

    <VideoSection title={"Meetings Feature"} localPath={"videos/Meeting.mp4"}>
        <span slot="description">
            Impel was able to detect when you were in a meeting and would
            automatically record and transcribe meetings. This gave you an
            automatic note taker, no more worrying about taking notes or
            starting a recording.
        </span>
    </VideoSection>

    <VideoSection title={"Video Summary"} localPath={"videos/VideoSummary.mp4"}>
        <span slot="description">
            Like document summary, video summary allowed you to summarize any
            Youtube video in seconds. In under 30 seconds I could summarize the
            entire two hour WWDC keynote and give you a quick rundown of what
            was released
        </span>
    </VideoSection>

    <!--
        <span slot="extras">
            <a
                href="https://apps.apple.com/us/app/jellycuts/id1522625245"
                target="_blank"
            >
                <img
                    alt="iOS AppStore Badge"
                    srcset="/assets/badges/appBadge.png 1x, /assets/badges/appBadge@2x.png 2x"
                    class="appstoreButton"
                />
            </a>
        </span> -->
</span>
