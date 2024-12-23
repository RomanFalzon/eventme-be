import { Request, Response } from 'express';
import ipLocation from './iplocation';

const buildConfig = async (request: Request, response: Response) => {
    try {
        const config: Record<string, any> = {}; // Explicitly typing config as an object

        // Get the IP address with a fallback
        const ip = request.ip || '127.0.0.1';

        // Call ipLocation and extract relevant data
        const locationData = await ipLocation(ip);

        // Assign relevant data to config
        config.countrycode =
            locationData.country_code && locationData.country_code !== '-'
                ? locationData.country_code
                : 'MT';

        response.json(config); // Send the response as JSON
    } catch (error) {
        console.error('Error building config:', error);
        response.status(500).json({ error: 'Failed to build config' });
    }
};

export default buildConfig;
