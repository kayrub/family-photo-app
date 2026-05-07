import { useState } from 'react';
import { PhotoGrid } from '../components/PhotoGrid.jsx';
import { PhotoModal } from '../components/PhotoModal.jsx';


export function GalleryPage( { photos }) {
    const [selectedPhoto, setSelectedPhoto] = useState('');

    
    return (
           <main className="gallery">
                {selectedPhoto && (
                    <PhotoModal 
                        selectedPhoto={selectedPhoto}
                        setSelectedPhoto={setSelectedPhoto}/>
                )}

                <PhotoGrid 
                    photos={photos}
                    setSelectedPhoto={setSelectedPhoto}
                />
          </main>
    )
}