const API_URL = 'https://api.quotable.io';

const getRandomQuote = async () => {
    const url = `${API_URL}/random`;
    const query = await fetch(url);
    const json = await query.json();
    if (query.ok) return json;
    throw new Error(json.message);
}

export default getRandomQuote;