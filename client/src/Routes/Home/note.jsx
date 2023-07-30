import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function UpdateNote() {
    const { id } = useParams();
    const navigate = useNavigate();
    const baseURL = `${import.meta.env.VITE_SERVER_URL}/api/notes/${id}`;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        function fetchData() {
            fetch(baseURL)
                .then((response => {
                    return response.json()
                }))
                .then((data) => {
                    setTitle(data.title);
                    setDescription(data.description);
                })
                .catch((error) => {
                    console.log("Error fetching data");
                })
        }

        fetchData();
    }, []);


    async function updateNote(event) {
        event.preventDefault();

        try {
            const response = await fetch(baseURL, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title, description })
            })

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                }, 2000);
            } else {
                console.log('Failed to submit data.');
            }

        } catch (error) {
            console.log('ERROR: ' + error);
        }

        setTitle('');
        setDescription('');
    }

    async function removeNote(event) {
        event.preventDefault();

        console.log('ee');

        try {
            const response = await fetch(baseURL, {
                method: "DELETE"
            });

            console.log(response);

            if (response.ok) {
                navigate('/');
            }

        } catch (error) {
            console.log('ERROR: ' + error);
        }
    }

    return (
        <div>
            <div className="breadcrump-nav">
                <Link to="/" className="back-button">
                    👈 back
                </Link>

                <button onClick={removeNote} style={{ cursor: "pointer" }} className="delete">
                    ❌ Remove
                </button>

            </div>

            <form onSubmit={updateNote}>
                <div className="single-note">
                    <div>
                        <input
                            type="text"
                            value={title}
                            onChange={(event) => { setTitle(event.target.value) }}
                            placeholder='Title'
                            className='title'
                        />
                    </div>

                    <div>
                        <textarea
                            value={description}
                            onChange={(event) => { setDescription(event.target.value) }}
                            className='desription'
                            placeholder='Description'
                            cols="50"
                            rows="4">
                        </textarea>
                    </div>

                    <input
                        type="submit"
                        value={submitted ? 'Saving not ...' : 'Save note'}
                        disabled={submitted}
                        style={{ cursor: 'pointer' }}
                    />

                    <p className='text-center'>
                        {submitted && <div className='success-message'>Note has been added</div>}
                    </p>
                </div>
            </form>
        </div>
    )
}

export default UpdateNote;