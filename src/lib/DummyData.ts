import type ApiInterface from "./ApiInterface";

export interface IDummyData {
	id: number
	name: string
}

export class DummyData {
	constructor(private apiInterface: ApiInterface) { }

	public async getData() {
		return await this.apiInterface.fetch("test") as IDummyData[];
	}

}