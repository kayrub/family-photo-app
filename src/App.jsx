import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { GalleryPage } from './pages/GalleryPage.jsx';
import { photosFake } from './data.jsx';
// import { FileUpload } from './FileUpload.jsx';
// import { FileUploader } from './components/FileUploader.jsx';

/*
Child -> authenticator
Child -> GalleryPage 
  GalleryPage -> UploadForm, PhotoGrid, PhotoModal (why would photomodal be in the gallery page and not nested with the photocards)
  PhotoGrid -> PhotoCard

photo data would live in GalleryPage, whereas it would be just displayed in PhotoGrids and PhotoModal

*/
function App() {

  const [photos, setPhotos] = useState(photosFake);

  return (
    <>
      <Navbar setPhotos={setPhotos}/>
      <div className="main-layout">
          <Sidebar />
          <GalleryPage photos={photos}
          setPhotos={setPhotos} />
      </div>
    
    </>
  )
}

export default App
