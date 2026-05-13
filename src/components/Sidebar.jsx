export function Sidebar( { photos , setSelectedAlbumId, albums }) {

    return (
    <aside className="sidebar">
        Albums
        <ul>
            <li onClick = {() => setSelectedAlbumId(null)}>ALL</li>
            {albums.map(album => (
                <li key={album.id} onClick={() => setSelectedAlbumId(album.id)} >
                    {album.name}           
                </li>
            ))}
            {/* {Object.keys(albumsMap).map(albumName => (
                <li key={albumName}
                    onClick={() => setSelectedAlbumId(albumName)}>
                    {albumName} ({albumsMap[albumName].length})
                </li>
            ))} */}
        </ul>
    </aside>
    )
}