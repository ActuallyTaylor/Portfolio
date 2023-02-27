<svelte:head>
    <link rel="icon" href="/favicon.png" />
    <title>Zachary Lineman</title>
    <meta
        name="description"
        content="My personal website, showcasing my interests, projects and blog."
    />
</svelte:head>

<slot />

<style global>
    .HorizontalStack {
        display: flex;
        align-items: flex-start;
        justify-content: left;
    }

    .HorizontallyCentered {
        display: flex;
        justify-content: center;
    }

    .VerticallyCentered {
        display: flex;
        align-items: center;
    }

    .verticalLine {
        position: relative;
        top: 23px;
        left: 30px;
        border-left: 3px solid #505050;
        border-radius: 3px;
        height: 32px;
    }

    :root {
        --primaryFontColor: #000000;
        --secondaryFontColor: #505050;
        --backgroundColor: #f8fbff;
        --blogBackgroundColor: #fff;

        --navBarBackgroundColor: #fff;

        --shapePrimaryFontColor: #000000;
        --shapeSecondaryFontColor: #393939;

        --visitedLink: #85beef;
        --link: #85efca;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --primaryFontColor: #eeeeee;
            --secondaryFontColor: #c3c3c3;
            --backgroundColor: #1e1e1e;
            --blogBackgroundColor: #2b2b2b;
            --navBarBackgroundColor: #2b2b2b;
        }
    }

    body {
        background-color: var(--backgroundColor);
        color: var(--primaryFontColor);
        max-width: 1000px;
        margin: auto auto;
        font-family: Montserrat, Arial, Helvetica, sans-serif;
        margin-bottom: 200px;
    }

    @media screen and (max-width: 600px) {
        body {
            margin: 10px 10px;
        }
    }

    section {
        margin-bottom: 25px;
    }

    h1 {
        color: var(--primaryFontColor);
        margin-bottom: 5px;
    }

    h2 {
        color: var(--secondaryFontColor);
        margin-bottom: 5px;
    }

    h4 {
        color: var(--secondaryFontColor);
        font-weight: 500;
        margin-bottom: 5px;
    }

    p {
        color: var(--primaryFontColor);
    }

    a {
        color: var(--link);
    }

    a:visited {
        color: var(--visitedLink);
    }

    .appstoreButton {
        height: 3em;
        width: auto;
    }
</style>
