import { useState } from 'react';
import { PhotoGrid } from '../components/PhotoGrid.jsx';
import { PhotoModal } from '../components/PhotoModal.jsx';


export function GalleryPage( { photos, setPhotos }) {
    const [selectedPhoto, setSelectedPhoto] = useState('');
    const [editPhoto, setEditPhoto] = useState(false);

    function handleFileDelete(photoToDelete) {
        const filteredPhotos = photos.filter(photo => photo.id !== photoToDelete.id);
        setPhotos(filteredPhotos);
        setSelectedPhoto(null);
        console.log(photos);
    }    

    // function handleEditPhotoName(e) {
    //     if (e.)
    // }
    
    return (
           <main className="gallery">
                {selectedPhoto && (
                    <PhotoModal 
                        selectedPhoto={selectedPhoto}
                        setSelectedPhoto={setSelectedPhoto}
                        photos={photos}
                        setPhotos={setPhotos}
                        handleFileDelete={handleFileDelete}
                        // handleEditPhotoName={handleEditPhotoName}
                        editPhoto={editPhoto}
                        setEditPhoto={setEditPhoto}
                        />
                )}

                <PhotoGrid 
                    photos={photos}
                    setSelectedPhoto={setSelectedPhoto}
                    handleFileDelete={handleFileDelete}
                    selectedPhoto={selectedPhoto}
                />
          </main>
    )
}