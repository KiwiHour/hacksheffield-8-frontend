export default class ApiInterface {
	constructor(private apiKey: string) { }

	public async fetch(path: string) {
		let params = new URLSearchParams({ key: this.apiKey })
		let res = await fetch(`https://api.hs.willjay.rocks/api/${path}?` + params);
		return res.json()
	}

}