import React, { useState } from 'react';
import { shortenUrl } from '../services/api';

const UrlShortenerForm: React.FC = () => {
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        try {
            const response = await shortenUrl(url);
            setShortenedUrl(response.shortenedUrl);
        } catch (err) {
            setError('Failed to shorten URL. Please try again.');
        }
    };

    return (
        <div>
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL to shorten"
                    required
                />
                <button type="submit">Shorten</button>
            </form>
            {shortenedUrl && (
                <div>
                    <h2>Shortened URL:</h2>
                    <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                        {shortenedUrl}
                    </a>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default UrlShortenerForm;