import { PhotoCard } from './PhotoCard.jsx';

export function PhotoGrid(props) {
    return(
        <>
        <div className="photo-grid">
                    {props.photos.map(photo => (
                        <PhotoCard 
                            key={photo.id}
                            fullUrl={photo.urls.full}
                            thumbnail={photo.urls.thumbnail}
                            setSelectedPhoto={props.setSelectedPhoto}
                            photo={photo}
                        />
                    ))}
              </div>
        </>
    )
}