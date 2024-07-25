import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_N1ABseeZ.mjs';
import { a as getImage } from './_astro_assets_D86pnK7L.mjs';
import 'clsx';

const Astro__11XnhH = new Proxy({"src":"/_astro/tilegif.BUhkPoA2.gif","width":1535,"height":616,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-3/tilegif.gif";
							}
							
							return target[name];
						}
					});

const Astro__Z12uPms = new Proxy({"src":"/_astro/image.BOl7uQup.png","width":1268,"height":497,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-3/image.png";
							}
							
							return target[name];
						}
					});

const Astro__1cUpiu = new Proxy({"src":"/_astro/image-1.DXqdTDpP.png","width":1156,"height":381,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-3/image-1.png";
							}
							
							return target[name];
						}
					});

const Astro__1d3xFR = new Proxy({"src":"/_astro/image-3.BEhZfOjs.png","width":803,"height":604,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-3/image-3.png";
							}
							
							return target[name];
						}
					});

const Astro__1cYtub = new Proxy({"src":"/_astro/image-2.D2_o8CHc.png","width":876,"height":652,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-3/image-2.png";
							}
							
							return target[name];
						}
					});

const Astro__Z2noHKP = new Proxy({"src":"/_astro/camera.C4dq8Oht.gif","width":1219,"height":677,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-3/camera.gif";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "tilegif\\.gif" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "tilegif.gif" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__11XnhH, ...props});
													occurrenceCounter++;
											}
									}
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
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image-3\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image-3.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1d3xFR, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image-2\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image-2.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1cYtub, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "camera\\.gif" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "camera.gif" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z2noHKP, ...props});
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
			const html = await updateImageReferences("<p>Hello again! This blog is a continuation of <a href=\"../devlog-2\"><em>A Slime’s Small Adventure - A Finished Prototype</em></a> and goes over the progress that’s been made on A Slime’s Small Adventure since its prototype. Around a month has passed and development on the game’s second level has been steadily chugging along. The entire workflow process around art and level design has also changed.</p>\n<h2 id=\"the-second-level\">The Second Level</h2>\n<h3 id=\"workflow-change\">Workflow Change</h3>\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;tilegif.gif&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n<p>Before going into the design of the second level, I’ll first go over some workflow changes that I made which allowed me to make Level Two a lot better than Level One.</p>\n<p>The first large change to my workflow that’s helped with level design has been the implementation of Unity’s Rule Tile feature. With this feature, you’re able to add ‘rules’ to the placements of tiles. If a tile satisfies the given rule, it’ll automatically assign the appropriate texture to the tile. At it’s current state, it’s a little tricky to work with because it doesn’t play with regular tiles nicely but it’s substantially increased the speed at which I can create and test levels. What’s also pretty neat about it is that it can automatically rotate the tile that its given which has cut down on the number of tiles that I’ve needed to make.</p>\n<hr>\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n\r\n\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image-1.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n<p>Another change to my workflow is the way that I approach creating the backgrounds to my levels. In the past, I just created backgrounds of a general size and didn’t really care too much about it fitting with the tiles on the level. My new process is as follows:</p>\n<ol>\n<li>Export TileMap to a PNG</li>\n<li>Open Tilemap on Aseprite and erase unnecessary objects</li>\n<li>Draw background using the TileMap as reference.</li>\n<li>Drag Aseprite file onto Unity Scene. Now, every time I save a change on Aseprite, it’s reflected onto Unity!</li>\n</ol>\n<p>With this new strategy, I’m able to create backgrounds that better fit the tiles that the players actually stand on. Some of my inspiration came from how Hollow Knight does things where every piece of scenery is unique and drawn onto the tiles. One big downside about this method of drawing backgrounds is that it takes a <strong>lot</strong> more time than before but for a small project such as this, I think it’s fine.</p>\n<h3 id=\"level-design\">Level Design</h3>\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image-3.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n<p>Now onto the level design! One aspect of Level Two that sets it apart from Level One is its verticality. In this level, I really wanted to make a stage where I could experiment with art and design patterns to try and guide the player to where I want them to go.</p>\n<p>The picture above shows an initial draft of the art for Level Two. One part of this draft that I’d like to highlight is the giant pillar in the center of the level that peeks from behind the background. I’m not really an expert on game design but I feel like it does a good job at conveying the verticality of the map. I also think that it somewhat ‘guides’ the players to either go up or down. When you first start the level, the player moves into a central chamber which highlights the pillar in its entirety and gives player two choices: go up or go down. I don’t know if the pillar actually convey these ideas to a player but I’m proud of my giant pillar because it looks cool.</p>\n<h3 id=\"new-puzzles\">New Puzzles</h3>\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image-2.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n<p>In Level Two, there are two puzzles that a player must complete to finish the level. The first is a basic button puzzle that requires the player to have some finesse in jumping. The second puzzle is a new one, called the Lever Puzzle.</p>\n<p>In this new type of puzzle, it utilizes the concepts of a lever (think seesaw!) and relies on Unity’s Physics engine to work. It’s not a particually hard puzzle to understand since all you need is a basic grasp of how a seesaw works but I feel like it’ll really open up the gateway to more complex puzzles in the future.</p>\n<h3 id=\"new-camera-system\">New Camera System</h3>\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;camera.gif&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n<p>The vertical design of Level Two required some tweaks to the Camera system. With the new camera, it’ll lock onto specific areas of interest when the player gets close enough. It also stops the camera from going outside of the map by allowing it to move independently from the player (stops followng when player approaches a wall). As of now, it’s not the best that it can be but I think it does a good job of guiding players towards places that they need to go.</p>\n<h2 id=\"reflection\">Reflection</h2>\n<p>Overall, the development of Level Two seemed like a lot more work than the previous level but it was very fun! I learned even more about how art is composed and how level design can be used to encourage certain actions to be taken. Even if I don’t continue this game to a third level, I’ll have come out of it with a lot of neat knowledge about game design.</p>");
	

				const frontmatter = {"title":"A Slime's Small Adventure - Final Development and Reflection","description":"A personal reflection on the overall game development process and the changes made for the finished build of A Slime's Small Adventure.","publishDate":"06 December 2023","coverImage":{"src":"./image.png","alt":"The End"},"tags":["slime","game"],"minutesRead":"5 min read"};
				const file = "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-3/index.md";
				const url = undefined;
				function rawContent() {
					return "Hello again! This blog is a continuation of [*A Slime's Small Adventure - A Finished Prototype*](../devlog-2) and goes over the progress that's been made on A Slime's Small Adventure since its prototype. Around a month has passed and development on the game's second level has been steadily chugging along. The entire workflow process around art and level design has also changed.\r\n\r\n## The Second Level\r\n### Workflow Change\r\n![Alt text](tilegif.gif)\r\n\r\nBefore going into the design of the second level, I'll first go over some workflow changes that I made which allowed me to make Level Two a lot better than Level One. \r\n\r\nThe first large change to my workflow that's helped with level design has been the implementation of Unity's Rule Tile feature. With this feature, you're able to add 'rules' to the placements of tiles. If a tile satisfies the given rule, it'll automatically assign the appropriate texture to the tile. At it's current state, it's a little tricky to work with because it doesn't play with regular tiles nicely but it's substantially increased the speed at which I can create and test levels. What's also pretty neat about it is that it can automatically rotate the tile that its given which has cut down on the number of tiles that I've needed to make.\r\n____________\r\n![Alt text](image.png)\r\n![Alt text](image-1.png)\r\n\r\nAnother change to my workflow is the way that I approach creating the backgrounds to my levels. In the past, I just created backgrounds of a general size and didn't really care too much about it fitting with the tiles on the level. My new process is as follows:\r\n\r\n1. Export TileMap to a PNG\r\n2. Open Tilemap on Aseprite and erase unnecessary objects\r\n3. Draw background using the TileMap as reference.\r\n4. Drag Aseprite file onto Unity Scene. Now, every time I save a change on Aseprite, it's reflected onto Unity!\r\n\r\nWith this new strategy, I'm able to create backgrounds that better fit the tiles that the players actually stand on. Some of my inspiration came from how Hollow Knight does things where every piece of scenery is unique and drawn onto the tiles. One big downside about this method of drawing backgrounds is that it takes a **lot** more time than before but for a small project such as this, I think it's fine.\r\n\r\n### Level Design\r\n![Alt text](image-3.png)\r\n\r\nNow onto the level design! One aspect of Level Two that sets it apart from Level One is its verticality. In this level, I really wanted to make a stage where I could experiment with art and design patterns to try and guide the player to where I want them to go. \r\n\r\nThe picture above shows an initial draft of the art for Level Two. One part of this draft that I'd like to highlight is the giant pillar in the center of the level that peeks from behind the background. I'm not really an expert on game design but I feel like it does a good job at conveying the verticality of the map. I also think that it somewhat 'guides' the players to either go up or down. When you first start the level, the player moves into a central chamber which highlights the pillar in its entirety and gives player two choices: go up or go down. I don't know if the pillar actually convey these ideas to a player but I'm proud of my giant pillar because it looks cool. \r\n\r\n### New Puzzles\r\n![Alt text](image-2.png)\r\n\r\nIn Level Two, there are two puzzles that a player must complete to finish the level. The first is a basic button puzzle that requires the player to have some finesse in jumping. The second puzzle is a new one, called the Lever Puzzle.\r\n\r\nIn this new type of puzzle, it utilizes the concepts of a lever (think seesaw!) and relies on Unity's Physics engine to work. It's not a particually hard puzzle to understand since all you need is a basic grasp of how a seesaw works but I feel like it'll really open up the gateway to more complex puzzles in the future.\r\n \r\n### New Camera System\r\n![Alt text](camera.gif)\r\n\r\nThe vertical design of Level Two required some tweaks to the Camera system. With the new camera, it'll lock onto specific areas of interest when the player gets close enough. It also stops the camera from going outside of the map by allowing it to move independently from the player (stops followng when player approaches a wall). As of now, it's not the best that it can be but I think it does a good job of guiding players towards places that they need to go.\r\n\r\n## Reflection\r\nOverall, the development of Level Two seemed like a lot more work than the previous level but it was very fun! I learned even more about how art is composed and how level design can be used to encourage certain actions to be taken. Even if I don't continue this game to a third level, I'll have come out of it with a lot of neat knowledge about game design.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"the-second-level","text":"The Second Level"},{"depth":3,"slug":"workflow-change","text":"Workflow Change"},{"depth":3,"slug":"level-design","text":"Level Design"},{"depth":3,"slug":"new-puzzles","text":"New Puzzles"},{"depth":3,"slug":"new-camera-system","text":"New Camera System"},{"depth":2,"slug":"reflection","text":"Reflection"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
