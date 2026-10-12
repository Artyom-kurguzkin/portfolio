// Fetches the latest Instagram posts at build time and downloads their images into public/,
// because the image URLs the API returns expire after a few days. The token only lives in
// the build (GitHub secret / local .env); the site just serves the downloaded files.
// Never fails the build: without a token, or if the API errors, the gallery card is hidden.
// ponytail: the token expires 60 days after it was generated; regenerate it in the Meta app and
// update the INSTAGRAM_TOKEN secret. Automating that needs a GitHub PAT to rewrite the secret.
import { mkdir, writeFile, rm } from 'node:fs/promises';

const token = process.env.INSTAGRAM_TOKEN;
const DATA = 'src/data/instagram.json';
const DIR = 'public/instagram';

async function fetchPosts() {
	// every post: the API returns pages of up to 100, linked by paging.next
	const data = [];
	let next = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption&limit=100&access_token=${token}`;
	while (next) {
		const r = await fetch(next);
		if (!r.ok) throw new Error(`${r.status} ${await r.text()}`);
		const page = await r.json();
		data.push(...page.data);
		next = page.paging?.next;
	}
	await rm(DIR, { recursive: true, force: true });
	await mkdir(DIR, { recursive: true });
	const posts = [];
	for (const m of data) {
		const url = m.media_type === 'VIDEO' ? m.thumbnail_url : m.media_url; // carousels: media_url is the first item
		if (!url) continue;
		const file = `${m.id}.jpg`;
		await writeFile(`${DIR}/${file}`, Buffer.from(await (await fetch(url)).arrayBuffer()));
		posts.push({ src: `/instagram/${file}`, permalink: m.permalink, caption: m.caption ?? '' });
	}
	return posts;
}

let posts = [];
if (!token) console.log('[instagram] no INSTAGRAM_TOKEN, gallery hidden');
else
	try {
		posts = await fetchPosts();
		console.log(`[instagram] ${posts.length} posts`);
	} catch (e) {
		console.warn(`[instagram] fetch failed, gallery hidden: ${e.message}`);
	}
await writeFile(DATA, JSON.stringify(posts, null, '\t'));
