export function GalleryPage(props) {
    return (
           <main className="gallery">
                <div className="photo-grid">
                    {props.photos.map(photo => (
                        <div className="photo-card">
                            <img src={photo.urls.full} alt={photo.urls.thumbnail} />
                            <p>{photo.urls.thumbnail}</p>
                        </div>    
                    ))}
              </div>
          </main>
    )
}