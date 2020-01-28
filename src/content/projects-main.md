## Design & Color System

Writing clean and maintainable CSS is still one of the most vexing parts of front-end development. A decade ago, CSS frameworks like [Bootstrap](https://getbootstrap.com/) were a big step forward in helping developers create cleaner user interfaces with more reusable components. On the down side, anyone who has tried to customize out-of-the box themes and components knows how frustrating it can be to fight with a framework when trying to override inherited styles and behaviors. As creating a unique visual style becomes even more of a marketing imperative for brands and digital products, new design solutions are required.

One up-and-coming solution to the customization and maintainability problem is [TailwindCSS](https://tailwindcss.com/) — a "utility-first" framework that is designed on the principle of [composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance). In brief,

> Instead of opinionated predesigned components, Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML. If you're sick of fighting the framework, overriding unwanted styles, and battling specificity wars, Tailwind was made for you.

Importantly, Tailwind is made to be customized. Using JavaScript for configuration, you can start with Tailwind's intelligent defaults and adjust them to generate whatever set of utility classes makes sense for your project. 

To support my web development work, I have been using Tailwind to gradually implement a full-fledged design system. Currently, this system includes size and layout classes based on [proportional relationships](https://programmingdesignsystems.com/layout/a-short-history-of-geometric-composition/index.html) and color classes based on the [HSL model](https://en.wikipedia.org/wiki/HSL_and_HSV) and the [12-hue color circle](https://personal.utdallas.edu/~melacy/pages/2D_Design/Itten_ColorContrasts/IttenColorContrasts.html). My next step is to create visual documentation for this set of custom utility classes. Finally, I plan to create some prototypes for visual styles and basic UI components that can be reused across projects.


## Static Site Generator/Bundler

*Check back soon for more info...*
