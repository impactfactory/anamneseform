import type { RequestHandler } from '@sveltejs/kit';
// kai: das musst du nicht verstehen
export const POST: RequestHandler = async ({ request }) => {
	const data = (await request.formData()) as any;
	console.table([...data.entries()]);
	return {
		headers: { Location: '/success' },
		status: 302
	};
};
