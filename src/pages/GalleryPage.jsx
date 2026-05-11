import { useState } from 'react';
import { PhotoGrid } from '../components/PhotoGrid.jsx';
import { PhotoModal } from '../components/PhotoModal.jsx';


export function GalleryPage( { photos, setPhotos }) {
    const [selectedPhoto, setSelectedPhoto] = useState('');
    const [isEditingPhoto, setIsEditingPhoto] = useState(false);
    const [editPhoto, setEditPhoto] = useState({ name: '', desc: '', album: ''});

    function handleFileDelete(photoToDelete) {
        const filteredPhotos = photos.filter(photo => photo.id !== photoToDelete.id);
        setPhotos(filteredPhotos);
        setSelectedPhoto(null);
        // console.log(photos);
    }    

    function handleSubmitEditPhoto() {
        //assign an updated selected photo
        const updatedSelectedPhoto = {
            ...selectedPhoto,
            ...editPhoto,
        }
        setPhotos(prev => 
            prev.map(photo =>
                photo.id === selectedPhoto.id
                    ? {...photo, ...editPhoto}
                    : photo
            )
        )

        setSelectedPhoto(updatedSelectedPhoto);
        console.log('new photos submitted: ',photos)
        setIsEditingPhoto(false);
    }

    function handleKeyDownEditPhoto(e) {
        if (e.key === 'Enter') {
            console.log('handle key enter')
            handleSubmitEditPhoto();
        }

        if (e.key === 'Escape') {
            console.log('handle key esc')
            setIsEditingPhoto(false);
        }

    }

    function handleOnClickEditPhoto(photoToEdit) {
        // console.log('handleOnClickEditPhot photoToEdit: ', photoToEdit)
        // console.log(photoToEdit.name, photoToEdit.desc, photoToEdit.album)
        setEditPhoto({
            name: photoToEdit.name,
            desc: photoToEdit.desc,
            album: photoToEdit.album,
        })
        // console.log(editPhoto); 
        // remember, setting state is async, so it doesnt log as updated eventhough it is or can be
        setIsEditingPhoto(true);
    }

    function handleOnChangeEditPhoto(e) {
        const { name, value } = e.target;
        // console.log('e.target', e.target);
        // console.log('e.target.name: ',name)
        // console.log('e.target.value: ', value)
        setEditPhoto(prev => ({
            ...prev,
            [name]: value
        }));
        // console.log(editPhoto);
        
    }


    
    return (
           <main className="gallery">
                {selectedPhoto && (
                    <PhotoModal 
                        selectedPhoto={selectedPhoto}
                        setSelectedPhoto={setSelectedPhoto}
                        photos={photos}
                        setPhotos={setPhotos}
                        handleFileDelete={handleFileDelete}
                        handleOnChangeEditPhoto={handleOnChangeEditPhoto}
                        handleOnClickEditPhoto={handleOnClickEditPhoto}
                        handleKeyDownEditPhoto={handleKeyDownEditPhoto}
                        handleSubmitEditPhoto={handleSubmitEditPhoto}
                        editPhoto={editPhoto}
                        isEditingPhoto={isEditingPhoto}
                        setIsEditingPhoto={setIsEditingPhoto}
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