import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const shortenUrl = async (originalUrl: string): Promise<string> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/shorten`, { url: originalUrl });
        return response.data.shortenedUrl; // Adjust based on your API response structure
    } catch (error) {
        throw new Error('Error shortening the URL: ' + error.message);
    }
};