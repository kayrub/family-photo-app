export function PhotoCard( { setSelectedPhoto, photo}) {
    return(
            <div className="photo-card">
                <img 
                    src={photo.urls.full} 
                    alt={photo.urls.thumbnail} 
                    onClick={() => setSelectedPhoto(photo)}/>
                <p>{photo.name}</p>
            </div>    
    )
}