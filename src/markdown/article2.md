## <span class="ripple">Svelte treats motion as a first-class citizen.</span>

The web keeps getting more visual, but with that comes a tradeoff: prettier animations often make for heavier, clunkier, non-cross-compatible sites. 

We all know how much of a pain it is to add and remove elements from the DOM with transitions, sometimes even using `setTimeout()` to prevent the element from blinking out of existence before the animation can play. And using heavy animation libraries can have unintended consequences.

When transitions and animations are [built into the framework](https://svelte.dev/tutorial/transition) itself, however, and that framework compiles to native web languages, motion feels _good_. In Svelte, simple fades are two words of code in the DOM element: `transition: fade`. Want to defer animations to sequence them one after another? There’s a [native way to do it](https://svelte.dev/tutorial/deferred-transitions).

For anything Svelte hasn’t already imagined, you can either use its fantastic CSS and JS animation support to write your own animation, import a 3rd-party library like [Motion One](https://motion.dev) (which works great with Svelte), or wait until 4.0, where the devs have talked about wanting to upgrade animations even more. Imagine a future web where motion *just works*.

<a href="https://motion.dev"><img src="/images/motion-one.jpeg" alt="Motion One" /></a>

## Sveltekit offers flexibility from a single codebase.

Rich Harris, the creator of Svelte, terms Sveltekit apps as *transitional apps* in a [talk for Jamstack Conference](https://www.youtube.com/watch?v=860d8usGC0o) in late 2021:

<div class="quote-flex">
<a class="info-flex" href="https://twitter.com/Rich_Harris?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
  <img class="circle" src="/images/rich-harris.jpg" />
  <div class="name-flex">
    <p class="name">Rich Harris</p>
    <p class="role">Svelte Founder</p>
  </div>
</a>
<blockquote class="blockquote">Transitional apps sample elements from both traditional and modern architecture. The term is borrowed from interior design’s framing of <em>transitional design</em>. Transitional apps are, like multi-page apps, server-side rendered for fast initial loads, resilient since they work without JS by default, and provide a consistent experience with accessibility features built in. But like a single-page application, they also have a single codebase, fast navigation, persistent elements, and client-side state management.</blockquote>
</div>

In the future, no one wants to maintain multiple codebases for the same project. Sveltekit, through its [intuitive adapter system](https://kit.svelte.dev/docs/adapters), offers a *build once, deploy anywhere* approach. By default `adapter-auto` configures your project to deploy on major Edge platforms like [Vercel](https://vercel.com/guides/deploying-svelte-with-vercel), [Netlify](https://docs.netlify.com/integrations/frameworks/sveltekit/), and [Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/), but you can manually set the adapter to force static site generation or a node server.

The Svelte team is also hard at work on ways to change adapters per route, making sites particularly resilient and helping with error boundaries. In addition to the community building plenty of adapters, you are also free to roll your own, adapting your codebase to just about any environment.

The [svelte-add](https://github.com/svelte-add/svelte-add) CLI is another great resource for those looking for more external customizations in their Sveltekit apps, such as Tailwind, Imagetools, 3D, Jest, and even [Tauri](https://tauri.app). Tauri is an especially exciting integration, being an Electron alternative built in Rust without the obnoxiously large V8 overhead shipped in production. Svelte and Tauri seem like a match made in heaven, and together they could allow devs to ship leaner apps to every major desktop platform from a single Svelte codebase.

## Sveltekit is edge-first.

Edge delivery is the present and future of the web. Running your app in closer physical proximity to your users allows for faster load times, better SSR performance, and advanced middleware functionality such as authentication, localization, A/B testing, and dynamic display of any other content by region.

Getting your [entire Sveltekit app to deploy on an edge network](https://www.netlify.com/blog/sveltekit-with-netlify-edge-functions/) like Vercel, Netlify, or Cloudflare Pages is as easy as changing adapter settings to `edge: true` in your Svelte config file. Beyond that, there may be specific changes per platform to research, but there’s not too much hassle.

Sveltekit’s entire architecture—its ability to mix and match hydrated and static pages, and its easily configurable adapters—makes it ideal for edge networks, and in the near future, we’ll see more and more frameworks move toward dead simple edge deployment.

## Svelte is open-source software supported ethically.

It’s no secret there’s a problem with open source. The unpaid labor in OSS often gets used most widely across modern web development. Even when OSS can fundraise or find sponsors, that money is [sometimes misallocated](https://www.theregister.com/2021/05/12/babel_money_woes/) by communities that weren’t designed from the ground up to accept capital.

What open source developers need, more than anything, is the time and space to work on their projects. Recently, [Vercel hired Rich Harris](https://vercel.com/blog/vercel-welcomes-rich-harris-creator-of-svelte) to work on Svelte full-time and Steph Dietz in their DevRel team to advocate for the software. No shadowy deals or requirements that Svelte be Vercel’s property—just a company wanting to support a technology that’s helping them (and everyone else).

<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">SvelteKit is progressing. Join <a href="https://twitter.com/Rich_Harris?ref_src=twsrc%5Etfw">@Rich_Harris</a> for Friday&#39;s keynote at Svelte Summit.<br><br>Try the latest SvelteKit changes on Vercel today in under a minute.<a href="https://t.co/HLWlX9ki2Y">https://t.co/HLWlX9ki2Y</a> <a href="https://t.co/lKnSG1Cevs">pic.twitter.com/lKnSG1Cevs</a></p>&mdash; Vercel (@vercel) <a href="https://twitter.com/vercel/status/1567387370294755329?ref_src=twsrc%5Etfw">September 7, 2022</a></blockquote> 

Though there’s a long road to travel in figuring out how best ethically to support OSS, hiring devs to work full time on their passion projects has to be a step in the right direction. Collaboration, not competition, is the future of the web.

## Svelte templates a greener web.

The improvements Svelte makes over the other front-end frameworks don’t just make it better for devs and users. It’s also better for our world.

As of mid-2020, the Internet was responsible for [4% of greenhouse gas emissions](https://theshiftproject.org/en/article/unsustainable-use-online-video/) per year, and that number has only risen, especially with increased use of blockchain technologies.

Simply put, data transfers cost electricity. Where that electricity comes from depends on who you’ve chosen to host your website and how that site is deployed. Servers that run constantly use significantly more energy than serverless deployment.

Sveltekit, through its native serverless style and tiny bundle size, makes for greener sites. It’s simple enough to use [Website Carbon Calculator](https://www.websitecarbon.com) to compare Svelte sites with similar sites made with other frameworks. The results speak for themselves: Svelte, being smaller, scores better on eco-footprint.

<div><a href="https://www.websitecarbon.com" target="_blank"><img src="/images/website-carbon.jpg" alt="Website Carbon Calculator"/></a></div>

Sure, we’d like to see all hosting companies move toward renewable energy, but in the meantime, we as devs can think about how we contribute to the planet’s well-being. Apart from planting trees to offset a website’s carbon emissions, a shift to smaller website sizes would be one of the best ways to move toward a greener web.

## Get started with Svelte.

- [Sveltekit on Vercel](https://vercel.com/solutions/svelte)

- [Svelte Tutorial](https://svelte.dev/tutorial/basics)

- [Join the Svelte Discord](https://discord.gg/4TVdc4RRps)
  
- [Svelte Sirens: A Svelte Society for women, non-binary people, & allies](https://sveltesirens.dev)