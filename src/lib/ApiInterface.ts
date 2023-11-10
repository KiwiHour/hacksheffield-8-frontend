import { PUBLIC_API_KEY } from "$env/static/public";

export default abstract class ApiInterface {
	public async fetch(path: string) {
		let params = new URLSearchParams({ key: PUBLIC_API_KEY })
		let res = await fetch(`https://api.hs.willjay.rocks/api/${path}?` + params);
		return res.json()
	}
}