'use client'
import { useState } from 'react';
import axios from 'axios'; // You may need to install axios

const DeleteButton = (props) => {
    const [loading, setLoading] = useState(false);
    console.log(props.id)
    const handleDeleteClick = async () => {
        setLoading(true);

        try {
            const response = await axios.delete('/api/deleteSnippet', {
                data: { id: props.id },
            });

            console.log(response.data.message); // Log success message
        } catch (error) {
            console.error('Error deleting snippet:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={handleDeleteClick} disabled={loading}>
                Delete Snippet
            </button>
        </div>
    );
};

export default DeleteButton;
