<script>
    import Author from "./author.svelte";
    import Box from "./box.svelte";
</script>

<div class="wrapper">
    <h2>You might also like...</h2>
    <div class="flex">
        <Box
            gradient="red"
            link="https://vercel.com/blog/mongodb-and-vercel-from-idea-to-global-fullstack-app-in-seconds"
            title="MongoDB and Vercel: from idea to global fullstack app in seconds"
            author="Guillermo Rauch"
            imageURL="https://vercel.com/api/www/avatar/?u=rauchg&s=72"
            imageAlt="Guillermo Rauch"
            twitterHandle="@rauchg"
            twitterURL="https://twitter.com/rauchg"
        >
            <img
                slot="image"
                src="https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F6exSxUUfWsznMVolTNZbdJ%2F7b3557a09624b4c588b3058ddd093292%2Fmongodb-9.png&w=3840&q=75"
                alt="MongoDB at Vercel"
            />
        </Box>
        <Box
            gradient="green"
            title="Monorepos are changing how teams build software"
            link="https://vercel.com/blog/monorepos-are-changing-how-teams-build-software"
            author="Lee Robinson"
            imageURL="https://vercel.com/api/www/avatar/?u=leerob&s=72"
            imageAlt="Lee Robinson"
            twitterHandle="@leerob"
            twitterURL="https://twitter.com/leeerob"
        >
            <img
                slot="image"
                src="https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F24aSzieWqKuYynvIPQdTbx%2Fbc6df424037e10d3b2032b1a1b4e75d5%2Fdark-arch.png&w=1920&q=75"
                alt="Monorepos"
            />
        </Box>
        <Box
            gradient="blue"
            link="/webpack"
            title="The Strange Evolution of Webpack"
            author="Alice Alexandra Moore"
            imageURL="/images/author-photo.jpg"
            imageAlt="Alice Alexandra Moore"
            twitterHandle="@tempoimmaterial"
            twitterURL="https://twitter.com/tempoimmaterial"
        >
            <img slot="image" src="/images/webpack.jpeg" alt="Webpack" />
        </Box>
    </div>
</div>

<style>
    h2 {
        margin-bottom: 64px;
    }

    .wrapper {
        padding: 6em;
    }

    @media screen and (max-width: 960px) {
        .wrapper {
            padding-left: 24px;
            padding-right: 24px;
        }
    }

    .flex {
        display: flex;
        column-gap: 48px;
        row-gap: 48px;
        flex-wrap: wrap;
    }

    img {
        border-radius: 0;
        height: 100%;
    }
</style>
