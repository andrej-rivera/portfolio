import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute, e as renderSlot } from '../../chunks/astro/server_N1ABseeZ.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../../chunks/_astro_assets_D86pnK7L.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_DPzgHGWE.mjs';
import 'clsx';
import '../../chunks/_astro_content_E-xlmXan.mjs';
import { $ as $$Button, a as $$BaseLayout } from '../../chunks/Button_CUEUfXwz.mjs';
import { g as getAllPosts } from '../../chunks/post_BpbKNpDv.mjs';
export { renderers } from '../../renderers.mjs';

function diveChildren(item, depth) {
  if (depth === 1 || !item.subheadings.length) {
    return item.subheadings;
  } else {
    return diveChildren(item.subheadings[item.subheadings.length - 1], depth - 1);
  }
}
function generateToc(headings) {
  const bodyHeadings = [...headings.filter(({ depth }) => depth > 1)];
  const toc = [];
  bodyHeadings.forEach((h) => {
    const heading = { ...h, subheadings: [] };
    if (heading.depth === 2) {
      toc.push(heading);
    } else {
      const lastItemInToc = toc[toc.length - 1];
      if (heading.depth < lastItemInToc.depth) {
        throw new Error(`Orphan heading found: ${heading.text}.`);
      }
      const gap = heading.depth - lastItemInToc.depth;
      const target = diveChildren(lastItemInToc, gap);
      target.push(heading);
    }
  });
  return toc;
}

const $$Astro$4 = createAstro("https://andre-rivera.netlify.com/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    content: { data, render }
  } = Astro2.props;
  const { remarkPluginFrontmatter } = await render();
  const dateTimeOptions = {
    month: "long"
  };
  return renderTemplate`${data.coverImage && renderTemplate`${maybeRenderHead()}<div class="aspect-h-9 aspect-w-16 mb-6">${renderComponent($$result, "Image", $$Image, { "alt": data.coverImage.alt, "class": "rounded-2xl object-cover", "fetchpriority": "high", "loading": "eager", "src": data.coverImage.src })}</div>`}${data.draft ? renderTemplate`<span class="text-red-500">(Draft)</span>` : null}<div class="flex flex-wrap items-center gap-x-3 gap-y-2"> <p class="text-xs"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": data.publishDate, "dateTimeOptions": dateTimeOptions })} /${" "} ${remarkPluginFrontmatter.minutesRead} </p> </div> <h1 class="mt-2 text-3xl font-medium sm:mb-1"> ${data.title} </h1> ${!!data.tags?.length && renderTemplate`<div class="mt-3 flex flex-row items-center gap-x-1"> <svg aria-hidden="true" class="me-1 inline-block h-6 w-6" fill="none" focusable="false" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"></path> <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"></path> <path d="M6 9h-.01"></path> </svg> ${data.tags.map((tag, i) => renderTemplate`<div> <a${addAttribute(`View more blogs with the tag ${tag}`, "aria-label")} class="inline-block before:content-['#'] hover:underline hover:underline-offset-4" data-pagefind-filter="tag"${addAttribute(`/tags/${tag}/`, "href")}> ${tag} </a> ${i < data.tags.length - 1 && ", "} </div>`)} </div>`} ${data.updatedDate && renderTemplate`<p class="mt-6 text-base">
Last Updated:
${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "ms-1", "date": data.updatedDate, "dateTimeOptions": dateTimeOptions })} </p>`}`;
}, "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/blog/Hero.astro", void 0);

const $$Astro$3 = createAstro("https://andre-rivera.netlify.com/");
const $$TOCHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TOCHeading;
  const {
    heading: { depth, slug, subheadings, text }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`${depth > 2 ? "ms-2" : ""}`, "class")}> <a${addAttribute(`Scroll to section: ${text}`, "aria-label")}${addAttribute(`block line-clamp-2  ${depth <= 2 ? "mt-2" : "mt-1 text-sm"} text-foreground/75 transition-all hover:text-foreground`, "class")}${addAttribute(`#${slug}`, "href")}>${text}</a> ${!!subheadings.length && renderTemplate`<ul> ${subheadings.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li>`;
}, "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/blog/TOCHeading.astro", void 0);

const $$Astro$2 = createAstro("https://andre-rivera.netlify.com/");
const $$TOC = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TOC;
  const { headings } = Astro2.props;
  const toc = generateToc(headings);
  return renderTemplate`${maybeRenderHead()}<aside class="sticky top-20 order-2 -me-28 hidden basis-60 lg:flex lg:flex-col"> <h2 class="font-semibold">TABLE OF CONTENTS</h2> <ul class="text-card-foreground"> ${toc.map((heading) => renderTemplate`${renderComponent($$result, "TOCHeading", $$TOCHeading, { "heading": heading })}`)} </ul> </aside>`;
}, "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/blog/TOC.astro", void 0);

const $$Astro$1 = createAstro("https://andre-rivera.netlify.com/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { post } = Astro2.props;
  const {
    data: { description, ogImage, publishDate, title, updatedDate },
    slug
  } = post;
  const socialImage = ogImage ?? `/og-image/${slug}.png`;
  const articleDate = updatedDate?.toISOString() ?? publishDate.toISOString();
  const { headings } = await post.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { articleDate, description, ogImage: socialImage, title } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/blog", "style": "button" }, { "icon-before": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"> <path fill="currentColor" d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1z"></path> </svg>` })} <div class="mt-8 gap-x-10 lg:flex lg:items-start"> ${!!headings.length && renderTemplate`${renderComponent($$result2, "TOC", $$TOC, { "headings": headings })}`} <article class="flex-grow break-words" data-pagefind-body> <div id="blog-hero">${renderComponent($$result2, "BlogHero", $$Hero, { "content": post })}</div> <div class="prose prose-base prose-zinc mt-12 text-muted-foreground dark:prose-invert prose-headings:font-medium prose-headings:text-foreground prose-headings:before:absolute prose-headings:before:-ms-4 prose-th:before:content-none"> ${renderSlot($$result2, $$slots["default"])} </div> </article> </div> <button aria-label="Back to Top" class="z-90 fixed bottom-8 end-4 flex h-8 w-8 translate-y-28 items-center justify-center rounded-full border-2 border-transparent bg-primary-foreground text-3xl opacity-0 transition-all duration-300 hover:border-border/75 data-[show=true]:translate-y-0 data-[show=true]:opacity-100 sm:end-8 sm:h-12 sm:w-12" data-show="false" id="to-top-btn"><svg aria-hidden="true" class="h-4 w-4" fill="none" focusable="false" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M4.5 15.75l7.5-7.5 7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> </div> ` })} `;
}, "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://andre-rivera.netlify.com/");
const prerender = true;
const getStaticPaths = async () => {
  const blogEntries = await getAllPosts();
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "PostLayout", $$BlogPost, { "post": entry }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
