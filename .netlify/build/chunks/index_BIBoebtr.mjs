import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_N1ABseeZ.mjs';
import { a as getImage } from './_astro_assets_D86pnK7L.mjs';
import 'clsx';

const Astro__1cUpiu = new Proxy({"src":"/_astro/image-1.CMJ1UWfn.png","width":380,"height":188,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/image-1.png";
							}
							
							return target[name];
						}
					});

const Astro__1drWP0 = new Proxy({"src":"/_astro/image-9.CM0UdTDe.png","width":141,"height":142,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/image-9.png";
							}
							
							return target[name];
						}
					});

const Astro__ZCYNM7 = new Proxy({"src":"/_astro/slime.y-rGkEUP.gif","width":160,"height":160,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/slime.gif";
							}
							
							return target[name];
						}
					});

const Astro__26tg8o = new Proxy({"src":"/_astro/move_good.DhVhopbh.gif","width":160,"height":160,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/move_good.gif";
							}
							
							return target[name];
						}
					});

const Astro__1JHDct = new Proxy({"src":"/_astro/move_slide.BY0Eu0UF.gif","width":160,"height":160,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/move_slide.gif";
							}
							
							return target[name];
						}
					});

const Astro__1Uq9ew = new Proxy({"src":"/_astro/merge.BM0G6K1m.gif","width":320,"height":160,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/merge.gif";
							}
							
							return target[name];
						}
					});

const Astro__1dbG4f = new Proxy({"src":"/_astro/image-5.TRAQtFRU.png","width":227,"height":195,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/image-5.png";
							}
							
							return target[name];
						}
					});

const Astro__1dfKfV = new Proxy({"src":"/_astro/image-6.C9CrQzQC.png","width":642,"height":361,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/image-6.png";
							}
							
							return target[name];
						}
					});

const Astro__1djOrC = new Proxy({"src":"/_astro/image-7.ecPBiSdH.png","width":1154,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/image-7.png";
							}
							
							return target[name];
						}
					});

const Astro__1d3xFR = new Proxy({"src":"/_astro/image-3.CCycIl5E.png","width":338,"height":340,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/image-3.png";
							}
							
							return target[name];
						}
					});

const Astro__Z1IFEJJ = new Proxy({"src":"/_astro/IrES3LKIGO.LUCKyOGu.gif","width":464,"height":335,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/IrES3LKIGO.gif";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
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
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image-9\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image-9.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1drWP0, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "slime\\.gif" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "slime.gif" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZCYNM7, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "move_good\\.gif" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "move_good.gif" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__26tg8o, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "move_slide\\.gif" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "move_slide.gif" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1JHDct, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "merge\\.gif" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "merge.gif" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1Uq9ew, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image-5\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image-5.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1dbG4f, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image-6\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image-6.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1dfKfV, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "image-7\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "image-7.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1djOrC, ...props});
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
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "IrES3LKIGO\\.gif" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "IrES3LKIGO.gif" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1IFEJJ, ...props});
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
			const html = await updateImageReferences("<p>For the past few weeks, I’ve been creating a game called <em>A Slime’s Small Adventure</em>. During this creation process, I had many first time experiences as a beginner artist and game designer. Before going into this post, it should stated that I am not an artist. Prior to this game, I had zero experience with making pixel art and had no idea how to be artistic <em>at all</em>. My journey going from programmer to artist is detailed here.</p>\n<h2 id=\"the-general-idea\">The General Idea</h2>\n<p>When starting this project, there was nothing but just me (artist) and my partner (programmer) brainstorming ideas for a fun game. After a few minutes of bouncing back and forth, we eventually settled with a platformer game as those are generally the most straightforward to develop. However, that single genre was all we had. We knew we had to create a game in Unity but we were a little lost. What would our main character look like? What about the environment? So many questions, and the biggest of them all: Would I (a first time artist) even be able to draw the ideas that we have?</p>\n<p>It was then that I stumbled upon the amazing idea of making our main character a slime! Formless and easily colored. You may recognize this creature from other games like Dragon Quest or Terraria. With a slime as the main character, I could draw anything and it’d still look like the blob that we know and love. From this single idea, I began drawing and animating. I watched videos from pixel artists and my art evolved rapidly in just a few days.</p>\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image-1.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n\r\n\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image-9.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n<p>I eventually hit a roadblock which was animating ‘realistic’ movement for a slime. If you didn’t know, slimes are very <strong>very</strong> squishy. Sometimes they’re even described as having the properties of both a liquid and a solid. While this is pretty easy to draw as a single photo in pixel art, animating a creature that moves like a liquid is a massive pain.</p>\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;slime.gif&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n\r\n\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;move_good.gif&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n\r\n\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;move_slide.gif&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n\r\n\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;merge.gif&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n<p>And so, another incredible idea came down. What if we made our slime a soft-body object? Rather than animate the slime myself, what if I just have the game engine do it for me?</p>\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image-5.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n<h2 id=\"the-crunch--trimming-of-ideas\">The Crunch (&#x26; trimming of ideas)</h2>\n<p>This single idea of softbodies became a force multiplier for me as an artist. While my programmer focused on getting a rigid object in Unity to become squishy and soft, I could focus my entire attention to everything else art-related. Backgrounds, shading, tilesets, there was so much to do. In fact, there was too much to do. During this crunch time, we had to cut out many ideas that were simply not feasible to do in the time we had.</p>\n<p>Here are some of the many ambitious ideas that we cut out:</p>\n<ul>\n<li>Combat (along with the sub-mechanics of:)\n<ul>\n<li>Enemies</li>\n<li>Health</li>\n</ul>\n</li>\n<li>Splitting\n<ul>\n<li>Multiple Slimes to Control</li>\n<li>Complex Puzzles</li>\n</ul>\n</li>\n<li>Different environments</li>\n<li>Dragon Boss?!?!?!!?</li>\n<li>Stealth</li>\n</ul>\n<p>After these ideas were trimmed, the development of the game went way smoother. The type of game that we eventually settled on was a Puzzle Platformer game where you control a slime and explore. In terms of art requirements, there wasn’t too much. The background, the tileset, and the slime were the main artworks that I focused on. The final results of this artwork is shown below. Compared to when I first started, I’m very proud of the progress that I made.</p>\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image-6.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n\r\n\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image-7.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n\r\n\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;image-3.png&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n<h2 id=\"playtesting\">Playtesting!!!</h2>\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;IrES3LKIGO.gif&#x22;,&#x22;alt&#x22;:&#x22;Alt text&#x22;,&#x22;index&#x22;:0}\">\n<p>At the end of our game development journey, we finished with an alpha build of the game that was actually playable. Despite it’s bugs, the game and the art was pretty well-received by the playtesters. The general playtest process for the game was as follows:</p>\n<ol>\n<li>Game is introduced by designer (no info on mechanics)</li>\n<li>Player plays the game blind</li>\n<li>After finishing the game, the player provides feedback</li>\n</ol>\n<p>To go more in-depth, I’ll be walking through how two of the playtests went.</p>\n<h3 id=\"tester-1\">Tester 1</h3>\n<p>During the first playtest of the game, the player immediately learned how to move and explored the world. At first, they jumped from platform to platform. Then, they realized they could jump infinitely many times in the air and glided through the tutorial stage easily. After the playtest, the player provided the following feedback:</p>\n<ul>\n<li>The art is pleasing to look at.</li>\n<li>The slime could be just a little bit squisher.</li>\n<li>Reduce the number of jumps to just one or two.</li>\n</ul>\n<h3 id=\"tester-2\">Tester 2</h3>\n<p>The second playtest of the game was much different from the first one. In the second playtest, the player did not realize that they could jump an infinite amount of times in the air. So, the player tried to jump across obstacles and kept failing because they thought they had only one jump. After a few minutes, the player developed a strategy where they could use the squishiness of the slime to ‘hook’ onto the sharp edges of the platforms and climb up that way. This moment particularly stood out to me because I realized that the game could further cement that the fluidity of our slime by adding obstacles that could only be solved by using the properties of a squishy object. After the playtest, the player provided the following feedback:</p>\n<ul>\n<li>Jumping again immediately after landing should raise you a little bit higher than before.</li>\n<li>The game should be more forgiving on failing jumps.</li>\n<li>Art is nice.</li>\n</ul>\n<h2 id=\"moving-forward\">Moving Forward</h2>\n<p>The feedback recieved from these playtests were very insightful and it made me realize how different types of people think. While some may catch on to a new mechanic after experimenting one too many times, others may latch on to a single mechanic and never try to deviate from it. Instead, they may try to create strategies from the limitations of following that single action. To make sure that every player understands the mechanics thoroughly and what they can do, I think that I need to work a bit more on the design of the levels. The tutorial of Cuphead comes to mind where you can only progress until you learn how to use a mechanic and combine it with others. I want to make a tutorial that doesn’t tell you what to do and lets you struggle until you figure out how to get through the challenge.</p>\n<p>Moving forward, I think that I’ll also start to implement the ideas that the players suggested. Even though there isn’t much time left to complete this project, the ideas of the players in the playtests weren’t entirely new mechanics but rather improvements on the mechanics that already exist. This means that it shouldn’t be too hard to add their ideas to the project. Off to work!</p>\n<h2 id=\"small-update\">Small Update</h2>\n<p><a href=\"../devlog-2\">The Prototype is out! Check it out in Blog 6!</a></p>");
	

				const frontmatter = {"title":"A Slime's Small Adventure - Creating a Game Prototype","description":"How do you start making games? This post covers the development of a game prototype from nothing.","publishDate":"25 October 2023","coverImage":{"src":"./image.png","alt":"The Beginning"},"tags":["slime","game"],"minutesRead":"6 min read"};
				const file = "C:/Users/Andre/Desktop/Website/test/molecular-meteorite/src/content/post/devlog-1/index.md";
				const url = undefined;
				function rawContent() {
					return "For the past few weeks, I've been creating a game called *A Slime's Small Adventure*. During this creation process, I had many first time experiences as a beginner artist and game designer. Before going into this post, it should stated that I am not an artist. Prior to this game, I had zero experience with making pixel art and had no idea how to be artistic *at all*. My journey going from programmer to artist is detailed here.\r\n\r\n\r\n## The General Idea\r\nWhen starting this project, there was nothing but just me (artist) and my partner (programmer) brainstorming ideas for a fun game. After a few minutes of bouncing back and forth, we eventually settled with a platformer game as those are generally the most straightforward to develop. However, that single genre was all we had. We knew we had to create a game in Unity but we were a little lost. What would our main character look like? What about the environment? So many questions, and the biggest of them all: Would I (a first time artist) even be able to draw the ideas that we have?\r\n\r\nIt was then that I stumbled upon the amazing idea of making our main character a slime! Formless and easily colored. You may recognize this creature from other games like Dragon Quest or Terraria. With a slime as the main character, I could draw anything and it'd still look like the blob that we know and love. From this single idea, I began drawing and animating. I watched videos from pixel artists and my art evolved rapidly in just a few days.\r\n\r\n\r\n![Alt text](image-1.png)\r\n![Alt text](image-9.png)\r\n\r\nI eventually hit a roadblock which was animating 'realistic' movement for a slime. If you didn't know, slimes are very **very** squishy. Sometimes they're even described as having the properties of both a liquid and a solid. While this is pretty easy to draw as a single photo in pixel art, animating a creature that moves like a liquid is a massive pain.\r\n\r\n![Alt text](slime.gif)\r\n![Alt text](move_good.gif)\r\n![Alt text](move_slide.gif) \r\n![Alt text](merge.gif)\r\n\r\nAnd so, another incredible idea came down. What if we made our slime a soft-body object? Rather than animate the slime myself, what if I just have the game engine do it for me? \r\n\r\n![Alt text](image-5.png)\r\n\r\n\r\n## The Crunch (& trimming of ideas)\r\nThis single idea of softbodies became a force multiplier for me as an artist. While my programmer focused on getting a rigid object in Unity to become squishy and soft, I could focus my entire attention to everything else art-related. Backgrounds, shading, tilesets, there was so much to do. In fact, there was too much to do. During this crunch time, we had to cut out many ideas that were simply not feasible to do in the time we had.\r\n\r\nHere are some of the many ambitious ideas that we cut out:\r\n- Combat (along with the sub-mechanics of:)\r\n  - Enemies\r\n  - Health\r\n- Splitting\r\n  - Multiple Slimes to Control\r\n  - Complex Puzzles\r\n- Different environments\r\n- Dragon Boss?!?!?!!?\r\n- Stealth\r\n\r\nAfter these ideas were trimmed, the development of the game went way smoother. The type of game that we eventually settled on was a Puzzle Platformer game where you control a slime and explore. In terms of art requirements, there wasn't too much. The background, the tileset, and the slime were the main artworks that I focused on. The final results of this artwork is shown below. Compared to when I first started, I'm very proud of the progress that I made.\r\n\r\n![Alt text](image-6.png)\r\n![Alt text](image-7.png)\r\n![Alt text](image-3.png)\r\n\r\n\r\n## Playtesting!!!\r\n![Alt text](IrES3LKIGO.gif)\r\n\r\nAt the end of our game development journey, we finished with an alpha build of the game that was actually playable. Despite it's bugs, the game and the art was pretty well-received by the playtesters. The general playtest process for the game was as follows:\r\n1. Game is introduced by designer (no info on mechanics)\r\n2. Player plays the game blind\r\n3. After finishing the game, the player provides feedback\r\n\r\nTo go more in-depth, I'll be walking through how two of the playtests went.\r\n\r\n### Tester 1\r\nDuring the first playtest of the game, the player immediately learned how to move and explored the world. At first, they jumped from platform to platform. Then, they realized they could jump infinitely many times in the air and glided through the tutorial stage easily. After the playtest, the player provided the following feedback:\r\n- The art is pleasing to look at.\r\n- The slime could be just a little bit squisher.\r\n- Reduce the number of jumps to just one or two.\r\n\r\n### Tester 2\r\nThe second playtest of the game was much different from the first one. In the second playtest, the player did not realize that they could jump an infinite amount of times in the air. So, the player tried to jump across obstacles and kept failing because they thought they had only one jump. After a few minutes, the player developed a strategy where they could use the squishiness of the slime to 'hook' onto the sharp edges of the platforms and climb up that way. This moment particularly stood out to me because I realized that the game could further cement that the fluidity of our slime by adding obstacles that could only be solved by using the properties of a squishy object. After the playtest, the player provided the following feedback:\r\n- Jumping again immediately after landing should raise you a little bit higher than before.\r\n- The game should be more forgiving on failing jumps.\r\n- Art is nice.\r\n\r\n## Moving Forward\r\nThe feedback recieved from these playtests were very insightful and it made me realize how different types of people think. While some may catch on to a new mechanic after experimenting one too many times, others may latch on to a single mechanic and never try to deviate from it. Instead, they may try to create strategies from the limitations of following that single action. To make sure that every player understands the mechanics thoroughly and what they can do, I think that I need to work a bit more on the design of the levels. The tutorial of Cuphead comes to mind where you can only progress until you learn how to use a mechanic and combine it with others. I want to make a tutorial that doesn't tell you what to do and lets you struggle until you figure out how to get through the challenge.\r\n\r\nMoving forward, I think that I'll also start to implement the ideas that the players suggested. Even though there isn't much time left to complete this project, the ideas of the players in the playtests weren't entirely new mechanics but rather improvements on the mechanics that already exist. This means that it shouldn't be too hard to add their ideas to the project. Off to work!\r\n\r\n## Small Update\r\n[The Prototype is out! Check it out in Blog 6!](../devlog-2)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"the-general-idea","text":"The General Idea"},{"depth":2,"slug":"the-crunch--trimming-of-ideas","text":"The Crunch (& trimming of ideas)"},{"depth":2,"slug":"playtesting","text":"Playtesting!!!"},{"depth":3,"slug":"tester-1","text":"Tester 1"},{"depth":3,"slug":"tester-2","text":"Tester 2"},{"depth":2,"slug":"moving-forward","text":"Moving Forward"},{"depth":2,"slug":"small-update","text":"Small Update"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
