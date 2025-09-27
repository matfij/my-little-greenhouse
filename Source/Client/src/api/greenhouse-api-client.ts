import type { Domain } from './definitions';

export class GreenHouseApiClient {
    private static readonly baseUrl = `https://now-blastoporic-arie.ngrok-free.app/`;

    public static async getSensorData(domain: Domain) {
        const response = await fetch(this.baseUrl + domain, {
            method: 'GET',
            headers: { 'ngrok-skip-browser-warning': 'yes' },
        });
        const data = await response.json();
        return data;
    }
}
