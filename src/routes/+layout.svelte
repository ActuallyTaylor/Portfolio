<svelte:head>
    <link rel="icon" href="/favicon.png" />
</svelte:head>

<slot />

<style global>
    .HorizontalStack {
        display: flex;
        align-items: flex-start;
        justify-content: left;
    }

    .VerticalStack {
        display: block;
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
            margin: 20px 20px;
        }
    }

    section {
        margin-bottom: 25px;
    }

    h1 {
        color: var(--red);
        margin-bottom: 5px;

    }

    h2 {
        color: var(--lily);
        margin-bottom: 5px;
    }

    h3 {
        color: var(--sea);
    }

    h4 {
        color: var(--blue);
        margin-bottom: 5px;
        font-weight: 500;
    }

    h5 {
        color: var(--violet);
    }

    h6 {
        color: var(--green);
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
