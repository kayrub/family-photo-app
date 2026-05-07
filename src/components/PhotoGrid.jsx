import { PhotoCard } from './PhotoCard.jsx';

export function PhotoGrid( { photos, setSelectedPhoto }) {
    return(
        <>
        <div className="photo-grid">
                    {photos.map(photo => (
                        <PhotoCard 
                            key={photo.id}
                            setSelectedPhoto={setSelectedPhoto}
                            photo={photo}
                        />
                    ))}
              </div>
        </>
    )
}