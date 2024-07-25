import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_N1ABseeZ.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Andre/Desktop/Website/test/molecular-meteorite/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.dy9ns.js","pattern":"^\\/_astro\\/ec\\.dy9ns\\.js$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.dy9ns.js","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/scripts.ts","pathname":"/_astro/ec.dy9ns.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.v6sg1.css","pattern":"^\\/_astro\\/ec\\.v6sg1\\.css$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.v6sg1.css","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/styles.ts","pathname":"/_astro/ec.v6sg1.css","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.Btj2Fk7i.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.Btj2Fk7i.css"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.Btj2Fk7i.css"}],"routeData":{"route":"/tools","isIndex":true,"type":"page","pattern":"^\\/tools\\/?$","segments":[[{"content":"tools","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tools/index.astro","pathname":"/tools","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.Btj2Fk7i.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://andre-rivera.netlify.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/tags/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/tools/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/utils/post.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/utils/index.ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/Button.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/SkillLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/layouts/BlogPost.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tools/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/Card.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/FormattedDate.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/blog/Hero.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/blog/PostPreview.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/Label.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/ProjectCard.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/Section.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/ToolSection.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/components/blog/TOC.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro-expressive-code/routes/scripts@_@ts":"pages/_astro/ec.dy9ns.js.astro.mjs","\u0000@astro-page:node_modules/astro-expressive-code/routes/styles@_@ts":"pages/_astro/ec.v6sg1.css.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro":"pages/tags/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/tools/index@_@astro":"pages/tools.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CU7ynrR9.mjs","C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/index.md?astroContentCollectionEntry=true":"chunks/index_BhsNd9bw.mjs","C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-2/index.md?astroContentCollectionEntry=true":"chunks/index_tNmOAp6F.mjs","C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-3/index.md?astroContentCollectionEntry=true":"chunks/index_D7mzuoVC.mjs","C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/index.md?astroPropagatedAssets":"chunks/index_C5maT3Ne.mjs","C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-2/index.md?astroPropagatedAssets":"chunks/index_IHsyPI-3.mjs","C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-3/index.md?astroPropagatedAssets":"chunks/index_Dhq1g57O.mjs","C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/assets/coming-soon.png":"chunks/coming-soon_v7m9RxX3.mjs","C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/index.md":"chunks/index_BIBoebtr.mjs","C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-2/index.md":"chunks/index_CFIjFpUT.mjs","C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-3/index.md":"chunks/index_BEJbROqg.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Cle9tR6y.js","/astro/hoisted.js?q=1":"_astro/hoisted.BkSZLX8a.js","astro:scripts/page.js":"_astro/page.DFwqf4PB.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about-astro.0znnbM0P.png","/_astro/coming-soon.C8u-V5zm.png","/_astro/image.DrQuGJLy.png","/_astro/image.LyCIHM5w.png","/_astro/image.BOl7uQup.png","/_astro/image-1.3M45BhBO.png","/_astro/image-5.TRAQtFRU.png","/_astro/move_slide.BY0Eu0UF.gif","/_astro/merge.BM0G6K1m.gif","/_astro/image-1.CMJ1UWfn.png","/_astro/image-9.CM0UdTDe.png","/_astro/slime.y-rGkEUP.gif","/_astro/image-7.ecPBiSdH.png","/_astro/move_good.DhVhopbh.gif","/_astro/image-3.BEhZfOjs.png","/_astro/image-2.D2_o8CHc.png","/_astro/image-6.C9CrQzQC.png","/_astro/image-1.DXqdTDpP.png","/_astro/image-3.CCycIl5E.png","/_astro/tilegif.BUhkPoA2.gif","/_astro/IrES3LKIGO.LUCKyOGu.gif","/_astro/camera.C4dq8Oht.gif","/_astro/_slug_.Btj2Fk7i.css","/social-card.png","/favicon/android-chrome-192x192.png","/favicon/android-chrome-512x512.png","/favicon/apple-touch-icon.png","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon.ico","/favicon/site.webmanifest","/fonts/Satoshi-Variable.ttf","/fonts/Satoshi-VariableItalic.ttf","/_astro/hoisted.BkSZLX8a.js","/_astro/hoisted.Cle9tR6y.js","/_astro/page.DFwqf4PB.js","/images/image.png","/_astro/page.DFwqf4PB.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
