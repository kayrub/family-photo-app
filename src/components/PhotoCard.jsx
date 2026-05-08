export function PhotoCard( { setSelectedPhoto, photo, handleFileDelete, selectedPhoto}) {
    return(
            <div className="photo-card">
                <img 
                    src={photo.urls.full} 
                    alt={photo.urls.thumbnail} 
                    onClick={() => setSelectedPhoto(photo)}/>
                <p>{photo.name}</p>
                <button onClick={() => handleFileDelete(photo)}>Delete</button>
            </div>    
    )
}