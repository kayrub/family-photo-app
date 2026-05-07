import { FileUploader } from './FileUploader.jsx';


export function Navbar({ setPhotos }) {
    return (
        <nav className="navbar">
            <h1>Family Photos</h1>

            <input placeholder="Search..."/>

            <FileUploader setPhotos={setPhotos} />
        </nav>
    )
}