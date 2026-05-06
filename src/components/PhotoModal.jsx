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
        <dialog open>
            <img src={selectedPhoto.urls.full} />

            <button onClick={() => setSelectedPhoto(null)}>
                Close
            </button>
        </dialog>
    )
}