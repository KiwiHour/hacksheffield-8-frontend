import ApiInterface from "./ApiInterface";

interface IDummyData {
	id: number
	name: string
}

export default class DummyData extends ApiInterface {
	public async getData() {
		return await this.fetch("test") as IDummyData[];
	}
}