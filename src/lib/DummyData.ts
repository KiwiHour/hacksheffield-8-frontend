import type ApiInterface from "./ApiInterface";

interface IDummyData {
	id: number
	name: string
}

export default class DummyData {
	constructor(private apiInterface: ApiInterface) { }

	public async getData() {
		return await this.apiInterface.fetch("test") as IDummyData[];
	}

}