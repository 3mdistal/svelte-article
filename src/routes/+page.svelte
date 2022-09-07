<script>
    import Article from "../markdown/article.md";
    import Author from "../partials/author.svelte";
    import Date from "../partials/date.svelte";
</script>

<svelte:head>
    <title>How Svelte Is Changing the Future of the Web</title>
</svelte:head>

<main>
    <header>
        <div class="header-container">
            <Date />
            <h1>How Svelte Is Changing the Future of the Web</h1>
        </div>
    </header>
    <article>
        <div class="article-container">
            <Article />
        </div>
        <div class="author-container">
            <Author />
        </div>
    </article>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;600;700&display=swap");

    :global(*) {
        font-family: "Inter", sans-serif;
        color: white;
    }

    :global(body) {
        background-color: black;
    }

    :global(h1, h2) {
        font-family: "Inter", sans-serif;
        font-weight: 700;
    }

    :global(h1) {
        font-size: 80px;
        line-height: 1;
        margin-top: 32px;
        margin-bottom: 0px;
    }

    :global(h2) {
        font-size: 32px;
    }

    :global(p) {
        font-family: Inter, sans-serif;
        font-size: 18px;
        font-weight: 300;
        line-height: 24px;
    }

    :global(.article-container > p:first-of-type) {
        margin-top: 0;
    }

    :global(a) {
        color: rgb(50, 145, 255);
    }

    :global(code) {
        font-family: 'Menlo', 'Monaco', 'Courier New', Courier, monospace;
        color: rgb(121, 255, 225);
        font-size: .9em;
    }

    :global(code)::before {
        content: '`';
    }

    :global(code)::after {
        content: '`';
    }

    :global(img) {
        width: 100%;
        border-radius: 20px;
        margin: 24px 0;
    }

    :global(blockquote) {
        font-family: Inter, sans-serif;
        line-height: 1.4;
    }
    
    article {
        display: flex;
        max-width: 1248px;
        margin: 0 auto;
    }

    .article-container {
        margin: 0 auto;
        width: 66.67%;
        padding: 84px 84px 84px 24px;
    }

    .author-container {
        border-left: 0.25px solid rgb(50, 50, 50);
        width: 33.33%;
        padding: 84px 40px 40px;
        display: flex;
        flex-direction: column;
        row-gap: 24px;
    }

    header {
        border-bottom: 0.25px solid rgb(50, 50, 50);
        display: flex;
        justify-content: center;
        padding: 80px 24px 96px 24px;
        background-image: linear-gradient(rgb(0, 0, 0) 0px, transparent 100%),
            linear-gradient(
                90deg,
                rgba(235, 54, 127, 0.2) 0px,
                rgba(121, 40, 202, 0.2) 100%
            ),
            linear-gradient(
                to right,
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0.1) 10%,
                rgba(255, 255, 255, 0.1) 90%,
                rgba(255, 255, 255, 0)
            );
        background-size: 100% 140%;
        background-position-y: 0%;
    }

    .header-container {
        width: 1200px;
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    }

    :global(.ripple) {
        display: block;
        animation: ripple 5s linear alternate infinite, shrink 3s linear alternate infinite;
    }

    @media screen and (max-width: 960px) {
        article {
            flex-direction: column-reverse;
        }

        header {
            padding: 24px 24px 48px 24px;
        }

        h1 {
            font-size: 32px;
        }

        :global(p) {
            font-size: 16px;
        }

        .author-container {
            border-left: none;
            border-bottom: 0.25px solid rgb(50, 50, 50);
            padding: 24px 24px 20px;
            width: auto;
        }

        .article-container {
            padding: 24px;
            width: auto;
        }
    }

    @keyframes ripple {
        from {color: rgb(121, 255, 225)}
        to {color: white}
    }

    @keyframes shrink {
        from {transform: scale(1)}
        to {transform: scale(.98)}
    }
</style>