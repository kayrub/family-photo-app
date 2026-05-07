import { useEffect } from 'react';

export function PhotoModal({selectedPhoto, setSelectedPhoto}) {

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

                <button onClick={() => setSelectedPhoto(null)}>
                    Close
                </button>
            </div>
        </dialog>
    )
}