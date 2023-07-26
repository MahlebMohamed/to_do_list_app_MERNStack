import React, { useState } from 'react';

function Notes() {
    const baseURL = `${import.meta.env.VITE_SERVER_URL}/api/notes`;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(baseURL);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError("Error fetching data");
                setLoading(false);
            }
        }

        // fetchData();
    }, []);



    return (
        <div>
            Notes
        </div>
    )
}

export default Notes;