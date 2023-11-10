import TodoItem from "$lib/api-interfaces/TodoItem";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ }) => {

	console.log("lol")
	let todoItem = new TodoItem()

	return {
		dummyData: await todoItem.getData()
	};
};