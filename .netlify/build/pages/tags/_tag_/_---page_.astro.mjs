import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_N1ABseeZ.mjs';
import 'kleur/colors';
import { $ as $$Paginator } from '../../../chunks/Paginator_d7spSZ9u.mjs';
import { $ as $$PostPreview } from '../../../chunks/PostPreview_BF06Ku8H.mjs';
import { $ as $$Button, a as $$BaseLayout } from '../../../chunks/Button_CUEUfXwz.mjs';
import 'clsx';
import { g as getAllPosts, s as sortMDByDate, a as getUniqueTags } from '../../../chunks/post_BpbKNpDv.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://andre-rivera.netlify.com/");
const prerender = true;
const getStaticPaths = async ({ paginate }) => {
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts);
  const uniqueTags = getUniqueTags(allPostsByDate);
  return uniqueTags.flatMap((tag) => {
    const filterPosts = allPostsByDate.filter((post) => post.data.tags.includes(tag));
    return paginate(filterPosts, {
      pageSize: 10,
      params: { tag }
    });
  });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const { tag } = Astro2.params;
  const meta = {
    description: `View all posts with the tag - ${tag}`,
    title: `Tag: ${tag}`
  };
  const paginationProps = {
    ...page.url.prev && {
      prevUrl: {
        text: `\u2190 Previous Tags`,
        url: page.url.prev
      }
    },
    ...page.url.next && {
      nextUrl: {
        text: `Next Tags \u2192`,
        url: page.url.next
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full"> ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/blog", "style": "button" }, { "icon-before": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"> <path fill="currentColor" d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1z"></path> </svg>` })} <h1 class="mb-6 mt-5 flex items-end gap-x-2 text-2xl font-bold">
Tags:
<span class="text-xl">#${tag}</span> </h1> <section aria-label="Blog post list"> <ul class="flex flex-col gap-y-3 text-start"> ${page.data.map((p) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreview, { "as": "h2", "post": p, "withDesc": true })}`)} </ul> ${renderComponent($$result2, "Pagination", $$Paginator, { ...paginationProps })} </section> <a href="https://github.com/srleom/astro-theme-resume.git" class="mt-16 inline-flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span> </span> <p class="font-medium">Get free template</p> </a> </div> ` })}`;
}, "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/tags/[tag]/[...page].astro", void 0);

const $$file = "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/tags/[tag]/[...page].astro";
const $$url = "/tags/[tag]/[...page]";

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
