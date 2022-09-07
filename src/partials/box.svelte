<script>
    import Author from "./author.svelte";

    export let title
    export let author
    export let imageURL
    export let imageAlt
    export let twitterHandle
    export let twitterURL
    export let gradient="red"
    export let link
</script>

<a href={link} class="box">
    <div class="image-holder">
        <slot name="image" />
    </div>
    <div class="text-holder {gradient}">
        <h3>{title}</h3>
        <div>
            <Author {twitterHandle} {twitterURL} {author} {imageURL} {imageAlt} />
        </div>
    </div>
</a>

<style>
    .box {
        width: 300px;
        height: 400px;
        border: 1px solid rgb(50, 50, 50);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        overflow: hidden;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        text-decoration: none;
    }

    .box:hover {
        transform: scale(1.04);
    }

    .image-holder {
        object-fit: cover;
        height: 60%;
        overflow: hidden;
        width: 100%;
    }

    .text-holder {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: left;
        text-align: left;
        height: 40%;
        width: 300px;
        padding: 1em 0em 1em 2em;
        border-top: 1px solid rgb(50, 50, 50);
    }
    .red {
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
        background-size: 120% 100%;
        background-position-x: 50%;
    }

    .green {
        background-image: linear-gradient(rgb(0, 0, 0) 0px, transparent 100%),
            linear-gradient(
                90deg,
                rgba(80, 227, 194, 0.2) 0px,
                rgba(0, 112, 243, 0.2) 100%
            ),
            linear-gradient(
                to right,
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0.1) 10%,
                rgba(255, 255, 255, 0.1) 90%,
                rgba(255, 255, 255, 0)
            );
        background-size: 120% 100%;
        background-position-x: 50%;
    }

    .blue {
        background-image: linear-gradient(rgb(0, 0, 0) 0px, transparent 100%),
            linear-gradient(
                90deg,
                rgba(0, 112, 243, 0.2) 0px,
                rgba(248, 28, 229, 0.2) 100%
            ),
            linear-gradient(
                to right,
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0.1) 10%,
                rgba(255, 255, 255, 0.1) 90%,
                rgba(255, 255, 255, 0)
            );
        background-size: 120% 100%;
        background-position-x: 50%;
    }

    .name {
        color: rgb(160, 160, 160);
        font-weight: 300;
        font-size: 14px;
    }

    h3 {
        margin: 0 2em 0 0;
    }

    @media screen and (max-width: 600px) {
        h3 {
            font-size: 16px;
            margin: 0 4em 0 0;
        }

        .text-holder {
            padding-left: 4em;
        }
    }
</style>
