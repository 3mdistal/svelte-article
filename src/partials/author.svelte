<script>
    export let imageURL
    export let imageAlt
    export let author
    export let twitterHandle
    export let twitterURL
</script>

<p class="gray">Posted by</p>
<div class="author">
    <img src={imageURL} alt={imageAlt} />
    <div class="author-name">
        <p class="strong">{author}</p>
        <a class="gray" title="Twitter" href={twitterURL}>
            {twitterHandle}
        </a>
    </div>
</div>

<style>
    .gray {
        color: rgb(136, 136, 136);
    }

    p {
        font-size: 14px;
        margin: 0;
    }

    .strong {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        font-size: 14px;
        margin: 0;
    }

    .author-name {
        display: flex;
        flex-direction: column;
    }

    .author {
        display: flex;
        align-items: center;
        column-gap: 12px;
    }

    img {
        border-radius: 50%;
        height: 34px;
        width: 34px;
    }
</style>
