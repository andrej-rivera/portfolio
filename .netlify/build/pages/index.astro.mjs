import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, a as renderComponent } from '../chunks/astro/server_N1ABseeZ.mjs';
import 'kleur/colors';
import { c as cn, $ as $$Button, a as $$BaseLayout } from '../chunks/Button_CUEUfXwz.mjs';
import 'clsx';
import '../chunks/_astro_content_E-xlmXan.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_D86pnK7L.mjs';
import { $ as $$PostPreview } from '../chunks/PostPreview_BF06Ku8H.mjs';
import { g as getAllPosts, s as sortMDByDate } from '../chunks/post_BpbKNpDv.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("https://andre-rivera.netlify.com/");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn(className, "flex flex-col gap-y-5 md:flex-row md:gap-y-0"), "class")}> <div class="text-xl font-semibold md:w-1/3"> <h2>${title}</h2> </div> <div class="flex flex-col gap-y-3 md:w-2/3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/Section.astro", void 0);

const $$Astro$4 = createAstro("https://andre-rivera.netlify.com/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    as: Tag = "div",
    class: className,
    href,
    heading,
    subheading,
    date,
    imagePath,
    altText,
    imageClass
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/about-astro.png": () => Promise.resolve().then(() => aboutAstro),"/src/assets/coming-soon.png": () => import('../chunks/coming-soon_v7m9RxX3.mjs')});
  if (imagePath) {
    if (!images[imagePath])
      throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  }
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "relative rounded-2xl border border-border bg-primary-foreground px-5 py-3",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ), "href": href }, { "default": ($$result2) => renderTemplate`${imagePath && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": images[imagePath](), "alt": altText, "class": cn("mb-3 md:absolute md:mb-0", imageClass), "loading": "eager" })}`}${maybeRenderHead()}<div class="flex flex-col gap-y-1.5"> <div class="flex flex-col gap-y-0.5"> <h1 class="text-lg font-medium">${heading}</h1> <h2 class="text-muted-foreground">${subheading}</h2> <h2 class="text-muted-foreground">${date}</h2> </div> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/Card.astro", void 0);

const $$Astro$3 = createAstro("https://andre-rivera.netlify.com/");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    as: Tag = "a",
    class: className,
    href,
    heading,
    subheading,
    imagePath,
    altText
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/about-astro.png": () => Promise.resolve().then(() => aboutAstro),"/src/assets/coming-soon.png": () => import('../chunks/coming-soon_v7m9RxX3.mjs')});
  if (!images[imagePath])
    throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "flex flex-col gap-y-3 rounded-2xl border border-border bg-primary-foreground ",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ), "href": href }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": images[imagePath](), "alt": altText, "class": "h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover", "loading": "eager" })} ${maybeRenderHead()}<div class="flex flex-col gap-y-0.5 px-5 py-4"> <h1 class="text-lg font-medium">${heading}</h1> <h2 class="text-muted-foreground">${subheading}</h2> </div> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/ProjectCard.astro", void 0);

const $$Astro$2 = createAstro("https://andre-rivera.netlify.com/");
const $$Label = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Label;
  const { class: className, as: Tag = "div", title, href, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "flex flex-row items-center justify-center gap-x-2",
    href && "hover:opacity-75 transition-all"
  ), "href": href, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["icon"])} ${maybeRenderHead()}<p>${title}</p> ` })}`;
}, "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/Label.astro", void 0);

const $$Astro$1 = createAstro("https://andre-rivera.netlify.com/");
const $$SkillLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SkillLayout;
  const { title, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-2 md:flex-row md:gap-x-5 md:gap-y-0"> <h3 class="w-1/5 font-medium">${title}</h3> <div class="flex w-4/5 flex-row flex-wrap gap-x-4 gap-y-2"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "as": "button", "title": skill, "style": "pill" })}`)} </div> </div>`;
}, "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/SkillLayout.astro", void 0);

const astro = new Proxy({"src":"/_astro/about-astro.0znnbM0P.png","width":249,"height":450,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/assets/about-astro.png";
							}
							
							return target[name];
						}
					});

const aboutAstro = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: astro
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://andre-rivera.netlify.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const frontend = ["HTML", "CSS", "JavaScript", "Astro"];
  const backend = ["Java", "Python", "C", "C#", "C++", "SQL"];
  const others = ["Unity", "Unreal Engine 5", "OpenFrameworks"];
  const MAX_POSTS = 10;
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title: "Home" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col gap-y-10"> <section class="flex flex-col items-center gap-y-7"> ${renderComponent($$result2, "Image", $$Image, { "src": astro, "alt": "profile photo", "class": "h-28 w-auto rounded-full bg-[#FFBE98] p-2", "loading": "eager" })} <div class="flex flex-col items-center gap-y-4"> <h1 class="text-3xl font-bold">Andre Rivera</h1> <a href="https://github.com/andrej-rivera" class="flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span> </span> <p class="font-medium">My GitHub</p> </a> <div class="flex flex-wrap justify-center gap-x-7 gap-y-3"> ${renderComponent($$result2, "Label", $$Label, { "title": "San Jose State University" }, { "icon": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M4.615 20q-.69 0-1.152-.462Q3 19.075 3 18.385v-9.77q0-.69.463-1.152Q3.925 7 4.615 7H9V5.615q0-.69.463-1.152Q9.925 4 10.615 4h2.77q.69 0 1.153.463q.462.462.462 1.152V7h4.385q.69 0 1.152.463q.463.462.463 1.152v9.77q0 .69-.462 1.152q-.463.463-1.153.463zm0-1h14.77q.23 0 .423-.192q.192-.193.192-.423v-9.77q0-.23-.192-.423Q19.615 8 19.385 8H4.615q-.23 0-.423.192Q4 8.385 4 8.615v9.77q0 .23.192.423q.193.192.423.192M10 7h4V5.615q0-.23-.192-.423Q13.615 5 13.385 5h-2.77q-.23 0-.423.192q-.192.193-.192.423zM4 19V8z"></path></svg>` })} ${renderComponent($$result2, "Label", $$Label, { "title": "San Jose" }, { "icon": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M12.003 11.73q.668 0 1.14-.475q.472-.475.472-1.143t-.475-1.14q-.476-.472-1.143-.472t-1.14.476q-.472.475-.472 1.143t.475 1.14q.476.472 1.143.472M12 19.677q2.82-2.454 4.458-4.991q1.638-2.538 1.638-4.39q0-2.744-1.737-4.53T12 3.981q-2.621 0-4.359 1.785t-1.737 4.53q0 1.852 1.638 4.39q1.639 2.537 4.458 4.99m0 1.343q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814m0-10.904"></path></svg>` })} ${renderComponent($$result2, "Label", $$Label, { "title": "Connect on Linkedin", "as": "a", "href": "https://www.linkedin.com/in/andrej-rivera/", "target": "_blank" }, { "icon": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="h-5 w-5 text-foreground/75"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg>` })} </div> </div> </section> ${renderComponent($$result2, "Section", $$Section, { "title": "About" }, { "default": ($$result3) => renderTemplate` <p class="text-muted-foreground">
Hello! I'm Andre, a 4th-year pursuing a Bachelor's in Computer Science at San Jose State University.
				I enjoy creating COOL things! 
				In the past, I've taught as an assistant for CS classes and have developed multiple fun games that I've published here. 
				The development process for a few of my projects can also be found on my blog for those that are interested!
</p> ` })} ${allPostsByDate.length > 0 && renderTemplate`${renderComponent($$result2, "Section", $$Section, { "title": "Posts" }, { "default": ($$result3) => renderTemplate` <ul class="flex flex-col gap-y-2"> ${allPostsByDate.map((p) => renderTemplate`<li class="flex flex-col gap-x-2 sm:flex-row"> ${renderComponent($$result3, "PostPreview", $$PostPreview, { "post": p })} </li>`)} </ul> ` })}`} ${renderComponent($$result2, "Section", $$Section, { "title": "Experience" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "heading": "Learning Assistant", "subheading": "Peer Connections @ SJSU", "date": "Jan 2022 - May 2024", "imagePath": "/src/assets/about-astro.png", "altText": "SJSU", "imageClass": "h-12 w-auto md:-left-16" }, { "default": ($$result4) => renderTemplate` <ul class="ml-4 list-disc text-muted-foreground"> <li> Coordinated with faculty to help facilitate class of 180 students in lecture setting </li> <li> Participated in Train to Teach Science course to learn effective ways of breaking down and communicating confusing course material to students </li> <li> Co-led labs of 30 students with lab instructors and decide course material relating to Data Structures and Algorithms with faculty </li> </ul> ` })} ${renderComponent($$result3, "Card", $$Card, { "heading": "Engineering Camp Instructor", "subheading": "Engineering 4 Kids", "date": "Jun 2023 - Aug 2023", "imagePath": "/src/assets/about-astro.png", "altText": "E4K", "imageClass": "h-12 w-auto md:-left-16" }, { "default": ($$result4) => renderTemplate` <ul class="ml-4 list-disc text-muted-foreground"> <li> Instructed classrooms of up to 30 students from pre-k to grade 3 about engineering disciplines </li> <li> Resolved conflicts with parents about payment and coursework issues </li> </ul> ` })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Education" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "heading": "Bachelor of Science - Computer Science", "subheading": "San Jose State University", "date": "Dec 2022 - May 2025", "imagePath": "/src/assets/about-astro.png", "altText": "SJSU", "imageClass": "h-12 w-auto md:-left-16" }, { "default": ($$result4) => renderTemplate` <ul class="ml-4 list-disc text-muted-foreground"> <li><b>GPA: 3.89/4.00</b> </li> <li>Minoring in <b>Geology</b> and <b>Math</b></li> <li><b>Relevant Course Work:</b> Data Structures and Algorithms, Object Oriented Design, 
						Operating Systems, Database Systems, Artificial Intelligence, Game Design </li> </ul> ` })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Projects" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col gap-y-3 sm:flex-row sm:gap-x-3 sm:gap-y-0"> ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://www.google.com", "heading": "Consectetur", "subheading": "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "imagePath": "/src/assets/coming-soon.png", "altText": "Example", "class": "w-full sm:w-1/2" })} ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "as": "div", "heading": "Coming soon...", "subheading": "", "imagePath": "/src/assets/coming-soon.png", "altText": "Lorem, ipsum dolor sit", "class": "w-full sm:w-1/2" })} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Skills" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Frontend", "skills": frontend })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Backend", "skills": backend })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Others", "skills": others })} ` })} </div> <a href="https://github.com/srleom/astro-theme-resume.git" class="mt-16 flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span> </span> <p class="font-medium">Get free template</p> </a> ` })}`;
}, "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/index.astro", void 0);

const $$file = "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
