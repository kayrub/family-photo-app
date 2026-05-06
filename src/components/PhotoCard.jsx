export function PhotoCard( { setSelectedPhoto, photo, fullUrl, thumbnail }) {
    return(
            <div className="photo-card">
                <img 
                    src={fullUrl} 
                    alt={thumbnail} 
                    onClick={() => setSelectedPhoto(photo)}/>
                <p>{thumbnail}</p>
            </div>    
    )
}