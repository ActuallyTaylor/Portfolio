<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte";
    import LeftAlignedDescriptionSection from "$lib/components/PageSections/LeftAlignedDescriptionSection.svelte";
    import VideoSection from "$lib/components/PageSections/VideoSection.svelte";
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte";

    import { works } from "$lib/data";
    import { Project } from "$lib/models/Project";

    let { data: project } = $props();
</script>

<svelte:head>
    <title>{project.name} - Project</title>
    <meta name="description" content="A proactive AI Assitant for the future" />

    <script
        src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
        data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
    ></script>
</svelte:head>

<span>
    <ProjectPageHeader name={project.name} subtitle="A proactive AI Assitant for the future" />

    <DescriptionSection title="What was Impel?">
        <span slot="description">
            Impel was an AI assitant that I worked on for a couple of months
            with <a
                class="alwaysColoredLinkForATag"
                href="https://github.com/impel-intelligence"
                >Impel Intelligence</a>.
            The idea of Impel was to create an AI that could run completely
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

    <VideoSection
        title={"Full Natural Language Search"}
        localPath={"videos/Search.mp4"}
    >
        <span slot="description">
            Impel supported full natural language search for every piece of content it ingested. If there is a concept you generally knew, adding some keywords or vagually explaining it would be enough for Impel to find the content you wanted.
            <br>
            This was implemented using a custom <a class="alwaysColoredLinkForATag" href="https://github.com/impel-intelligence/MagnitudeDB">Vector Database</a> backed by <a class="alwaysColoredLinkForATag" href="https://github.com/impel-intelligence/SwiftFaiss">Faiss</a> along with some clever content tagging and chunking.
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

    <VideoSection title={"Record Meetings"} localPath={"videos/Meeting.mp4"}>
        <span slot="description">
            Impel was able to detect when you were in a meeting and would
            automatically record and transcribe meetings. This gave you an
            automatic note taker, no more worrying about taking notes or
            starting a recording.
        </span>
    </VideoSection>

    <VideoSection title={"Connect to everything"} localPath={"videos/Connected.mp4"}>
        <span slot="description">
            Since Impel's search was focused on finding exactly what you needed, it was able to search across a plethora of connected services. Any documents in Google Drive, Notion and more were available to Impel's vector datbaase. This allowed you to have on central serach for all of your knowledge.
        </span>
    </VideoSection>

</span>
