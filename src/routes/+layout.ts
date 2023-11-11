export const prerender = true;
export const trailingSlash = 'always';

const navLinks: { text: string; path: string; delay: number; theme: string }[] = [
	{ text: 'Home', path: '/', delay: 500, theme: '#b0e1ff' },
	{ text: 'About', path: '/about/', delay: 400, theme: '#bdfdff' },
	{ text: 'Work', path: '/work/', delay: 300, theme: '#e0fffa' },
	{ text: 'Projects', path: '/projects/', delay: 200, theme: '#ffd8f3' },
	{ text: 'Lets Connect', path: '/contact/', delay: 0, theme: '#e5c6ff' }
];

export async function load({ url }: { url: URL }) {
	return {
		navLinks,
		currentPath: url.pathname
	};
}
