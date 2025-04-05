/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		const data = {
			colo: request.cf.colo,
			continent: request.cf.continent,
			country: request.cf.country,
			city: request.cf.city,
			latitude: request.cf.latitude,
			longitude: request.cf.longitude,
			postal_code: request.cf.postalCode,
			metro_code: request.cf.metroCode,
			region: request.cf.region,
			region_code: request.cf.regionCode,
			org: request.cf.asOrganization,
			timezone: request.cf.timezone,
			ip: request.headers.get('cf-connecting-ip'),
		}
		return new Response(JSON.stringify(data, null, 2), {
			headers: {
				"content-type": "application/json;charset=UTF-8"
			}
		})
	},
};
