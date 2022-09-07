*With its invention of component framework as compiler, its use of efficient, idiomatic syntax, its native handling of reactive state in stores, and its Vite-driven meta framework, [Svelte](https://svelte.dev) has innovated far into the future of web development.*

## Svelte drives devs towards smaller, faster apps.

The future of the web is fast, lean, and increasingly mobile. Although better ways to access and deploy to the web continue to proliferate, app size needs to remain small.

Svelte, at its core, is an idiomatic web component language that compiles to JavaScript without diffing. With no need to ship a virtual DOM, Svelte apps weigh far less than other modern frameworks.

<img src="/images/bar-graph.svg" alt="App Sizes Bar Graph" />

This translates directly to performance. [User tests](https://procoders.tech/blog/svelte-vs-vue-frameworks-comparison/) show Svelte apps to run 30% faster than comparable React and Vue apps.

The tradeoff? Currently, Svelte apps’ compiled size scales linearly with the amount of source code. While this isn’t necessarily a problem, because of Sveltekit’s [inbuilt code-splitting](https://www.sitepoint.com/a-beginners-guide-to-sveltekit/), it is a concern the Svelte team is reportedly working on for Svelte 4.0, and they may even have found a way to make the JavaScript output *smaller* than the source code.

## Svelte != boilerplate.

If you’ve worked on any sort of complex application, you know how many tens of thousands of lines of code you might write before it’s complete. While Svelte can’t magic away this problem, one of its biggest innovations is in slicing down the sheer amount of boilerplate that React, Vue, and Angular ask of their devs.

Take a look at this partial component, written in React:

<iframe src="https://codesandbox.io/embed/inspiring-flower-ozuqzw?codemirror=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark&view=split"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="inspiring-flower-ozuqzw"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

And then in Svelte:

<iframe src="https://codesandbox.io/embed/divine-bush-6vqmgp?codemirror=1&fontsize=14&hidenavigation=1&module=%2FApp.svelte&theme=dark&view=split"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="divine-bush-6vqmgp"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
     options="split"
   ></iframe>

This isn’t an isolated case. On average, Svelte saves about a third of the boilerplate compared to React and Vue.

The sheer amount of effort the developers at Svelte have put into minimizing code and making it as human-readable as possible results in more than just convenience:  at the end of the day, [Svelte is faster to ship](https://vercel.com/blog/the-future-of-svelte-an-interview-with-rich-harris), which is better for any production environment. 

As the web continues to evolve as a primary mode of human communication, developers’ time will become more valuable. Efficient web languages like Svelte, along with no- or low-code solutions, will prevail.

## Svelte helps more people learn to code.

Maybe we don’t know much about the future of the web, but we do know an awful lot about its history. In the past few years, accessing and creating the web has become easier than ever, with no- and low-code solutions prevailing.

Svelte positions itself as an easy next step for those wanting to jump from web builders into more customizable solutions. With familiarity of HTML, CSS (or a streamlined styling like Tailwind), and a basic grasp of JavaScript, anyone can jump on the [Svelte playground](https://svelte.dev/tutorial/basics) and start learning.

(If you loved the Svelte tutorial, rest assured that the team plans to make a similar interactive learning tool for the [Sveltekit](https://kit.svelte.dev) meta framework.)

That’s not just great for new devs. Plenty of seasoned devs have talked about how easy Svelte is to pick up. I found myself converting several detailed React components on Day One of learning the language. All this makes hiring and onboarding easier than ever for teams who want to make the switch.

Lowering the barriers to entry is great for any industry, and in the world of web dev, the future looks bright for people with coding *and* non-coding backgrounds to make manifest their digital ideas. More languages and frameworks will take up the mantle Svelte has elegantly expressed, making sure that, in addition to being effective tools, they are efficient, usable, and well-documented.

## <span class="ripple">Svelte treats motion as a first-class citizen.</span>

The web keeps getting more visual, but with that comes a tradeoff: prettier animations often make for heavier, clunkier, non-cross-compatible sites. 

We all know how much of a pain it is to add and remove elements from the DOM with transitions, sometimes even using `setTimeout()` to prevent the element from blinking out of existence before the animation can play. And using heavy animation libraries can have unintended consequences.

When transitions and animations are [built into the framework](https://svelte.dev/tutorial/transition) itself, however, and that framework compiles to native web languages, motion feels _good_. In Svelte, simple fades are two words of code in the DOM element: `transition: fade`. Want to defer animations to sequence them one after another? There’s a [native way to do it](https://svelte.dev/tutorial/deferred-transitions).

For anything Svelte hasn’t already imagined, you can either use its fantastic CSS and JS animation support to write your own animation, import a 3rd-party library like [Motion One](https://motion.dev) (which works great with Svelte), or wait until 4.0, where the devs have talked about wanting to upgrade animations even more.

Imagine a future web where motion *just works*.

## Sveltekit offers flexibility from a single codebase.

Rich Harris, the creator of Svelte, terms Sveltekit apps as *transitional apps* in a [talk for Jamstack Conference](https://www.youtube.com/watch?v=860d8usGC0o) in late 2021:

<blockquote>Transitional apps sample elements from both traditional and modern architecture. The term is borrowed from interior design’s framing of <em>transitional design</em>. Transitional apps are, like multi-page apps, server-side rendered for fast initial loads, resilient since they work without JS by default, and provide a consistent experience with accessibility features built in. But like a single-page application, they also have a single codebase, fast navigation, persistent elements, and client-side state management.</blockquote>

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

Though there’s a long road to travel in figuring out how best ethically to support OSS, hiring devs to work full time on their passion projects has to be a step in the right direction.

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