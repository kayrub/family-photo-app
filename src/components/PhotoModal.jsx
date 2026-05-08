import { useEffect , useState } from 'react';

export function PhotoModal({selectedPhoto, setSelectedPhoto, handleFileDelete, setEditPhoto, editPhoto}) {

     useEffect(() => {

        function handleEscape(event) {
            if (event.key === 'Escape') {
                setSelectedPhoto(null);
            }
        }

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };

    }, []);


    return (
        <dialog className="photo-modal" open>
            <div className="modal-content">
                <img src={selectedPhoto.urls.full} />
                {!editPhoto &&
                <p>{selectedPhoto.name}</p>}
                {editPhoto &&
                <input
                    type="text"
                    defaultValue={selectedPhoto.name}
                    >
                </input>
                }
                <button onClick={setEditPhoto(true)}>
                    Edit
                </button>
                <button onClick={() => handleFileDelete(selectedPhoto)}>
                    Delete
                </button>
                <button onClick={() => setSelectedPhoto(null)}>
                    Close
                </button>
            </div>
        </dialog>
    )
}