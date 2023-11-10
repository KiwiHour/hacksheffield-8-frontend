import type { Handle } from "@sveltejs/kit";

import { PRIVATE_API_KEY } from "$env/static/private";
import ApiInterface from "$lib/ApiInterface";

export const handle: Handle = async ({ event, resolve }) => {

	event.locals.apiInterface = new ApiInterface(PRIVATE_API_KEY);

	return await resolve(event);
}