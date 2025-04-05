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
			Colo: request.cf.colo,
			Continent: request.cf.continent,
			Country: request.cf.country,
			City: request.cf.city,
			Latitude: request.cf.latitude,
			Longitude: request.cf.longitude,
			PostalCode: request.cf.postalCode,
			MetroCode: request.cf.metroCode,
			Region: request.cf.region,
			RegionCode: request.cf.regionCode,
			asOrganization: request.cf.asOrganization,
			Timezone: request.cf.timezone,
			ip: request.headers.get('cf-connecting-ip'),
		}
		return new Response(JSON.stringify(data, null, 2), {
			headers: {
				"content-type": "application/json;charset=UTF-8"
			}
		})
	},
};
