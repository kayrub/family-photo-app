import { useEffect } from 'react';

export function PhotoModal({selectedPhoto, setSelectedPhoto, handleFileDelete, isEditingPhoto, handleOnChangeEditPhoto, handleOnClickEditPhoto, editPhoto, handleSubmitEditPhoto, handleKeyDownEditPhoto, selectedAlbum}) {

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

    }, [setSelectedPhoto]);


    return (
        <dialog className="photo-modal" open>
            <div className="modal-content">
                <img src={selectedPhoto.urls.full} />
                {!isEditingPhoto &&
                <div>
                    <p>{selectedPhoto.name}</p>
                    <p>{selectedPhoto.desc}</p>
                    <p>{selectedAlbum.name}</p>
                    <button onClick={() => handleOnClickEditPhoto(selectedPhoto)}>
                    Edit
                </button>
                </div>}
                
                {isEditingPhoto &&
                <div>
                <input
                    name="name"
                    type="text"
                    value={editPhoto.name}
                    onChange={handleOnChangeEditPhoto}
                    onKeyDown={handleKeyDownEditPhoto}
                    >
                </input>
                <input
                    name="desc"
                    type="text"
                    value={editPhoto.desc}
                    onChange={handleOnChangeEditPhoto}
                    onKeyDown={handleKeyDownEditPhoto}
                    >
                </input>
                <input
                    name="album"
                    type="text"
                    value={editPhoto.album}
                    onChange={handleOnChangeEditPhoto}
                    onKeyDown={handleKeyDownEditPhoto}
                    >
                </input>
                <button onClick={handleSubmitEditPhoto}>
                    Submit
                </button>
                </div>}
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