import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddNote() {
    const baseURL = `${import.meta.env.VITE_SERVER_URL}/api/notes`;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);

    async function addNote(event) {
        event.preventDefault();

        try {
            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
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

    return (
        <div>
            <Link to='/' className='back-button'>Back</Link>

            <form onSubmit={addNote}>
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

export default AddNote;