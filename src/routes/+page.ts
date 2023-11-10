import type { PageLoad } from "./$types";
import DummyData from "$lib/DummyData";

export const load: PageLoad = async ({ }) => {

	let dummyDataGetter = new DummyData();
	return {
		dummyData: await dummyDataGetter.getData()
	};
};