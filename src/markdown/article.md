*With its invention of component framework as compiler, its use of efficient, idiomatic syntax, its native handling of reactive state in stores, and its Vite-driven meta framework, [Svelte](https://svelte.dev) has innovated far into the future of web development.*

<a href="https://svelte.dev" style="position: relative; left: -40%"><img src="/images/svelte.webp" alt="Svelte" style="width: 152%"/></a>

## Svelte drives devs towards smaller, faster apps.

The future of the web is fast, lean, and increasingly mobile. Although better ways to access and deploy to the web continue to proliferate, app size needs to remain small.

Svelte, at its core, is an idiomatic web component language that compiles to JavaScript without diffing. With no need to ship a virtual DOM, Svelte apps weigh far less than other modern frameworks.

<img src="/images/bar-graph.svg" alt="App Sizes Bar Graph" />

This translates directly to performance. [User tests](https://procoders.tech/blog/svelte-vs-vue-frameworks-comparison/) show Svelte apps to run 30% faster than comparable React and Vue apps.

The tradeoff? Currently, Svelte apps' compiled size scales linearly with the amount of source code. While this isn't necessarily a problem, because of Sveltekit's [inbuilt code-splitting](https://www.sitepoint.com/a-beginners-guide-to-sveltekit/), it is a concern the Svelte team is reportedly working on for Svelte 4.0, and they may even have found a way to make the JavaScript output *smaller* than the source code.

## Svelte != boilerplate.

If you've worked on any sort of complex application, you know how many tens of thousands of lines of code you might write before it's complete. While Svelte can't magic away this problem, one of its biggest innovations is in slicing down the sheer amount of boilerplate that React, Vue, and Angular ask of their devs.

Take a look at this partial component, written in React:

<iframe src="https://codesandbox.io/embed/inspiring-flower-ozuqzw?codemirror=1&fontsize=14&hidenavigation=1&module=%2FApp.js&theme=dark&view=split"
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

This isn't an isolated case. On average, Svelte saves about a third of the boilerplate compared to React and Vue.

The sheer amount of effort the developers at Svelte have put into minimizing code and making it as human-readable as possible results in more than just convenience:  at the end of the day, [Svelte is faster to ship](https://vercel.com/blog/the-future-of-svelte-an-interview-with-rich-harris), which is better for any production environment. 

As the web continues to evolve as a primary mode of human communication, developers' time will become more valuable. Efficient web languages like Svelte, along with no- or low-code solutions, will prevail.

## Svelte helps more people learn to code.

Maybe we don't know much about the future of the web, but we do know an awful lot about its history. In the past few years, accessing and creating the web has become easier than ever, with no- and low-code solutions prevailing.

Svelte positions itself as an easy next step for those wanting to jump from web builders into more customizable solutions. With familiarity of HTML, CSS (or a streamlined styling like Tailwind), and a basic grasp of JavaScript, anyone can jump on the [Svelte REPL](https://svelte.dev/tutorial/basics) and start learning.

(If you loved the Svelte tutorial, rest assured that the team plans to make a similar interactive learning tool for the [Sveltekit](https://kit.svelte.dev) meta framework.)

That's not just great for new devs. Plenty of seasoned devs have talked about how easy Svelte is to pick up. I found myself converting several detailed React components on Day One of learning the language. All this makes hiring and onboarding easier than ever for teams who want to make the switch.

Lowering the barriers to entry is great for any industry, and in the world of web dev, the future looks bright for people with coding *and* non-coding backgrounds to make manifest their digital ideas. More languages and frameworks will take up the mantle Svelte has elegantly expressed, making sure that, in addition to being effective tools, they are efficient, usable, and well-documented.

### What about you?