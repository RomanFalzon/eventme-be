import axios from 'axios';

const ipLocation = async (ip: string) => {
    try {
        const url = `https://api.ip2location.io/?key=${process.env.IP2LOCATION_KEY}&ip=${ip}`;
        const response = await axios.get(url);

        return response.data; // Only return the data
    } catch (e) {
        console.error('ERROR IN ipLocation', e);
        throw e; // Optional: Rethrow error for better error handling
    }
};

export default ipLocation;
