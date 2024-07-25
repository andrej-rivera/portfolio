import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_N1ABseeZ.mjs';
import { a as getImage } from './_astro_assets_D86pnK7L.mjs';
import 'clsx';

const Astro__Z12uPms = new Proxy({"src":"/_astro/image.DrQuGJLy.png","width":1080,"height":598,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-2/image.png";
							}
							
							return target[name];
						}
					});

const Astro__1cUpiu = new Proxy({"src":"/_astro/image-1.3M45BhBO.png","width":1076,"height":610,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-2/image-1.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z12uPms, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image-1\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image-1.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1cUpiu, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<p><a href=\"../devlog-1\">It’s been around a week since I last wrote about my video game prototype.</a> I’m proud to announce that it has reached a (mostly) finished state! I’ll be going over a short overview of what the game is about and what the general gameplay is like.</p>\n<h2 id=\"a-slimes-small-adventure\"><a href=\"https://adinhh20.itch.io/a-slimes-small-adventure\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">A Slime’s Small Adventure</a></h2>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\r\nIn <em>A Slime’s Small Adventure</em>, you play as the Slime. A squishy, blobby creature that is neither solid nor liquid. In an unfamiliar environment, your goal is to explore and to escape into the outside world. Solve puzzles, jump over pits, and climb obstacles as you roll around.</p>\n<h3 id=\"controls-and-gameplay\">Controls and Gameplay</h3>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image-1.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\r\nThe Slime can move left and right using the AD or arrow keys. It can also jump using the spacebar key. Successive jumps with proper timing allows you jump higher. A known bug in the game lets you jump on walls which makes the parkor a lot more forgiving.</p>\n<p>At its current state, <em>A Slime’s Small Adventure</em> contains a single level that will only take a few minutes to complete. Nevertheless, these few minutes highlight the core gameplay mechanics of jumping, solving puzzles, and creative problem-solving.</p>\n<p>The game can be played here:</p>\n<p><a href=\"https://adinhh20.itch.io/a-slimes-small-adventure\" rel=\"nofollow, noopener, noreferrer\" target=\"_blank\">https://adinhh20.itch.io/a-slimes-small-adventure</a></p>\n<h3 id=\"other-comments\">Other Comments</h3>\n<p>Because of the limited timeframe given to work on the game, there are quite a few features that I would’ve liked to implement if I had the time to.</p>\n<p>The first feature would have been the splitting mechanic, where you could split your slime into two or into fours. The main idea behind this mechanic was that you’d be able to control your different slimes by selecting them on the numberkeys. This would open up more complex puzzles to be made (eg: sit on a button and then split to get through a door).</p>\n<p>Another feature that would’ve been nice to implement would’ve been physics-based puzzles. As of now, the only puzzle in the game are buttons which open doors. Not too much of a puzzle but it could be expanded on in future levels.</p>\n<p>This last tidbit isn’t really a feature but I really would’ve wanted more time to make more levels. Right now, there is only one level in the game and while I do think that it serves a good introduction to the game mechanics, it’s not really that hard.</p>\n<p>Despite these shortcomings, I’m happy with the result of the game. I could’ve polished the art a bit more and made custom screens for restarting and completing the game but it’s good enough.</p>\n<h4 id=\"update\">Update!</h4>\n<p>The final build of the game is out and the dev log can be found <a href=\"../devlog-1\">here</a>.</p>\n<h3 id=\"credits\">Credits</h3>\n<p>Andre Rivera - Artist, Designer</p>\n<p>Anh Dinh - Programmer, Producer</p>\n<p>Background music - Fun Cute Simple Song by Seth_Makes_Sounds from <a href=\"HTTPS://FREESOUND.ORG/PEOPLE/SETH_MAKES_SOUNDS/SOUNDS/701610/\">HTTPS://FREESOUND.ORG/PEOPLE/SETH_MAKES_SOUNDS/SOUNDS/701610/</a></p>\n<p>Jumping sound - Slimejump by Zuzek06 from <a href=\"HTTPS://FREESOUND.ORG/PEOPLE/ZUZEK06/SOUNDS/353250/\">HTTPS://FREESOUND.ORG/PEOPLE/ZUZEK06/SOUNDS/353250/</a></p>");
	

				const frontmatter = {"title":"A Slime's Small Adventure - A Finished Prototype","description":"The prototype build of a Slime's Small Adventure is complete!","publishDate":"30 October 2023","coverImage":{"src":"./image.png","alt":"A Finished Prototype!"},"tags":["slime","game"],"minutesRead":"3 min read"};
				const file = "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-2/index.md";
				const url = undefined;
				function rawContent() {
					return "[It's been around a week since I last wrote about my video game prototype.](../devlog-1) I'm proud to announce that it has reached a (mostly) finished state! I'll be going over a short overview of what the game is about and what the general gameplay is like.\r\n## [A Slime's Small Adventure](https://adinhh20.itch.io/a-slimes-small-adventure)\r\n![Alt text](image.png)\r\nIn *A Slime's Small Adventure*, you play as the Slime. A squishy, blobby creature that is neither solid nor liquid. In an unfamiliar environment, your goal is to explore and to escape into the outside world. Solve puzzles, jump over pits, and climb obstacles as you roll around.\r\n\r\n### Controls and Gameplay\r\n![Alt text](image-1.png)\r\nThe Slime can move left and right using the AD or arrow keys. It can also jump using the spacebar key. Successive jumps with proper timing allows you jump higher. A known bug in the game lets you jump on walls which makes the parkor a lot more forgiving.\r\n\r\nAt its current state, *A Slime's Small Adventure* contains a single level that will only take a few minutes to complete. Nevertheless, these few minutes highlight the core gameplay mechanics of jumping, solving puzzles, and creative problem-solving.\r\n\r\nThe game can be played here:\r\n\r\n[https://adinhh20.itch.io/a-slimes-small-adventure](https://adinhh20.itch.io/a-slimes-small-adventure)\r\n\r\n### Other Comments\r\nBecause of the limited timeframe given to work on the game, there are quite a few features that I would've liked to implement if I had the time to. \r\n\r\nThe first feature would have been the splitting mechanic, where you could split your slime into two or into fours. The main idea behind this mechanic was that you'd be able to control your different slimes by selecting them on the numberkeys. This would open up more complex puzzles to be made (eg: sit on a button and then split to get through a door).\r\n\r\nAnother feature that would've been nice to implement would've been physics-based puzzles. As of now, the only puzzle in the game are buttons which open doors. Not too much of a puzzle but it could be expanded on in future levels.\r\n\r\nThis last tidbit isn't really a feature but I really would've wanted more time to make more levels. Right now, there is only one level in the game and while I do think that it serves a good introduction to the game mechanics, it's not really that hard.\r\n\r\nDespite these shortcomings, I'm happy with the result of the game. I could've polished the art a bit more and made custom screens for restarting and completing the game but it's good enough.\r\n\r\n#### Update!\r\nThe final build of the game is out and the dev log can be found [here](../devlog-1).\r\n\r\n### Credits\r\nAndre Rivera - Artist, Designer\r\n\r\nAnh Dinh - Programmer, Producer\r\n\r\nBackground music - Fun Cute Simple Song by Seth_Makes_Sounds from HTTPS://FREESOUND.ORG/PEOPLE/SETH_MAKES_SOUNDS/SOUNDS/701610/\r\n\r\nJumping sound - Slimejump by Zuzek06 from HTTPS://FREESOUND.ORG/PEOPLE/ZUZEK06/SOUNDS/353250/\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"a-slimes-small-adventure","text":"A Slime’s Small Adventure"},{"depth":3,"slug":"controls-and-gameplay","text":"Controls and Gameplay"},{"depth":3,"slug":"other-comments","text":"Other Comments"},{"depth":4,"slug":"update","text":"Update!"},{"depth":3,"slug":"credits","text":"Credits"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
