import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_N1ABseeZ.mjs';
import 'kleur/colors';
import { $ as $$Button, a as $$BaseLayout } from '../../chunks/Button_D_WPeyx3.mjs';
import { $ as $$Paginator } from '../../chunks/Paginator_d7spSZ9u.mjs';
import { $ as $$PostPreview } from '../../chunks/PostPreview_DIo20BWM.mjs';
import 'clsx';
import { g as getAllPosts, s as sortMDByDate, a as getUniqueTags } from '../../chunks/post_DUubBTvN.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://andre-rivera.netlify.com/");
const prerender = true;
const getStaticPaths = async ({ paginate }) => {
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts);
  const uniqueTags = getUniqueTags(allPosts);
  return paginate(allPostsByDate, { pageSize: 10, props: { uniqueTags } });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page, uniqueTags } = Astro2.props;
  const meta = {
    description: "Posts",
    title: "Blog"
  };
  const paginationProps = {
    ...page.url.prev && {
      prevUrl: {
        text: `\u2190 Previous Posts`,
        url: page.url.prev
      }
    },
    ...page.url.next && {
      nextUrl: {
        text: `Next Posts \u2192`,
        url: page.url.next
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "style": "button" }, { "icon-before": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"> <path fill="currentColor" d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1z"></path> </svg>` })} <h1 class="mb-6 mt-5 text-2xl font-bold">Blog</h1> ${page.data.length === 0 && renderTemplate`<p>No posts yet.</p>`} ${page.data.length > 0 && renderTemplate`<div class="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8"> <section aria-label="Blog posts list"> <ul class="flex flex-col gap-y-4 text-start"> ${page.data.map((p) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": p, "withDesc": true })}`)} </ul> ${renderComponent($$result2, "Pagination", $$Paginator, { ...paginationProps })} </section> ${!!uniqueTags.length && renderTemplate`<aside> <h2 class="mb-4 flex items-center text-lg font-semibold"> <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none" stroke="none"></path> <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"></path> <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"></path> <path d="M6 9h-.01"></path> </svg>
Tags
</h2> <ul class="text-bgColor flex flex-wrap gap-2"> ${uniqueTags.map((tag) => renderTemplate`<li> ${renderComponent($$result2, "Button", $$Button, { "title": tag, "href": `/tags/${tag}/`, "style": "pill" })} </li>`)} </ul> <span class="mt-4 block sm:text-end"> <a aria-label="View all blog categories" class="" href="/tags/" data-astro-prefetch>
View all →
</a> </span> </aside>`} </div>`} <a href="https://github.com/srleom/astro-theme-resume.git" class="mt-16 inline-flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span> </span> <p class="font-medium">Get free template</p> </a> </div> ` })}`;
}, "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/blog/[...page].astro", void 0);

const $$file = "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/blog/[...page].astro";
const $$url = "/blog/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
