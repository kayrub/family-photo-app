import { useState } from 'react';
import { PhotoGrid } from '../components/PhotoGrid.jsx';
import { PhotoModal } from '../components/PhotoModal.jsx';


export function GalleryPage( { photos, setPhotos , selectedAlbumId, albums, setAlbums}) {
    const [selectedPhoto, setSelectedPhoto] = useState('');
    const [isEditingPhoto, setIsEditingPhoto] = useState(false);
    const [editPhoto, setEditPhoto] = useState({ name: '', desc: '', album: ''});

    // console.log(photos);

    const albumsById = albums.reduce((acc, album) => {
    acc[album.id] = album;
    return acc;
    }, {});

    const albumsByName = albums.reduce((acc, album) => {
        acc[album.name] = album;
        return acc;
    }, {});

    const displayedPhotos = (selectedAlbumId !== null)
        ? photos.filter(photo => photo.albumId === selectedAlbumId)
        : photos;

    function handleFileDelete(photoToDelete) {
        const filteredPhotos = photos.filter(photo => photo.id !== photoToDelete.id);
        setPhotos(filteredPhotos);
        setSelectedPhoto(null);
        // console.log(photos);
    }    

    function handleSubmitEditPhoto() {
        const enteredAlbumName = editPhoto.album;
        
        console.log("handleSubmitEditPhoto enteredAlbumName: ", enteredAlbumName)
        // try finding existing album
        let currAlbum = albumsByName[enteredAlbumName];

        let albumId;
        // if album exists
        if (currAlbum) {
            albumId = currAlbum.id;
            console.log('handleSubmitEditPhoto currAlbum.id: ', currAlbum.id);
        }
        // if album DOES NOT exist
        else {
            const newAlbum = {
                id: crypto.randomUUID(),
                name: enteredAlbumName,
            }

            setAlbums(prev => [...prev, newAlbum]);

            albumId = newAlbum.id;
        }
        //assign an updated selected photo
        const updatedSelectedPhoto = {
            ...selectedPhoto,
           name: editPhoto.name,
           desc: editPhoto.desc,
           albumId: albumId 
        }
        console.log("handleSubmitEditPhoto updatedSelectedPhoto: ", updatedSelectedPhoto);

        setPhotos(prev => 
            prev.map(photo =>
            {console.log("inside setPhotos: ", photo.id, updatedSelectedPhoto.id, editPhoto)
                return photo.id === updatedSelectedPhoto.id
                    ? {...photo, ...updatedSelectedPhoto}
                    : photo
            })
        )


        setSelectedPhoto(updatedSelectedPhoto);
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
            album: albumsById[photoToEdit.albumId].name,
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
                        selectedAlbum={albumsById[selectedPhoto.albumId]}
                        />
                )}

                <PhotoGrid 
                    photos={displayedPhotos}
                    setSelectedPhoto={setSelectedPhoto}
                    handleFileDelete={handleFileDelete}
                    selectedPhoto={selectedPhoto}
                />
          </main>
    )
}