import ApiInterface from "./ApiInterface";

export interface ITodoItem {
	id: number,
	name: string
}

export default class TodoItem extends ApiInterface {

	public async getData(): Promise<ITodoItem[]> {
		return this.fetch(`test`)
	}

	public async add(name: ITodoItem["name"]) {
		await this.fetch(`test/add/${name}`)
	}

	public async delete(id: ITodoItem["id"]) {
		await this.fetch(`test/del/${id}`)
	}

}