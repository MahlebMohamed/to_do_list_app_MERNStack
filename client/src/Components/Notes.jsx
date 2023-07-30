import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Notes() {
    const baseURL = `${import.meta.env.VITE_SERVER_URL}/api/notes`;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        function fetchData() {
            fetch(baseURL)
                .then((response => {
                    return response.json()
                }))
                .then((data) => {
                    setData(data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError("Error fetching data");
                    setLoading(false);
                })
        }

        fetchData();
    }, []);



    return (
        <div>

            <pre>
                {loading ? (<p>Loading...</p>) : error ? (<p> {error} </p>) : (
                    <ul className='notes'>

                        <li className='add-note-botton'>
                            <Link to={`/add-note`}>+</Link>
                        </li>

                        {
                            data.map((item) => {
                                return (
                                    <li key={item._id}>
                                        <Link to={`/note/${item._id}`}>
                                            <h3>{item.title}</h3>
                                            <p>
                                                {
                                                    item.description.lenght > 50 ? (
                                                        item.description.substring(0, 50) + '...'
                                                    ) : (
                                                        item.description
                                                    )
                                                }
                                            </p>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )}
            </pre>
        </div>
    )
}

export default Notes;