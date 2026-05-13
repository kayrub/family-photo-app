export function FileUploader({setPhotos}) {
    //create a handle change function for when files are uploaded
    //files var
    //map through the files and parse data correctly
    //temporary measure since no data base use URL.createObject?
    //set the photos
    //type file, multiple, onchange handler, and only accept photos and images

    //albumId 0 needs 

    function handleFileChange(e) {
        const files = Array.from(e.target.files);
        const newPhotos = files.map((file) => ({
            id: crypto.randomUUID(),
            name: file.name,
            type: file.type,
            desc: file.name,
            albumId: 0,
            urls: {
                thumbnail: file.name,
                full: URL.createObjectURL(file),
            }
        }))

        setPhotos((prev) => [...prev, ...newPhotos])

    }
    return (
        <section>
            <input 
                type="file"
                multiple
                accept="image/*, video/*"
                onChange={handleFileChange}
                />
        </section>
    )
}




// export function FileUploader({setPhotos}) {

//     //check if files, if so upload. 
//     //parse the data into readable format, through mapping into readable objects.
//     //setPhotos to prev and new dataa.
//     function handleFileChange(e) {
//         const files = Array.from(e.target.files);

//         const newPhotos = files.map((file) => ({
//             id: crypto.randomUUID(),
//             name: file.name,
//             type: file.type,
//             desc: file.name,
//             urls: {
//                 thumbnail: file.name,
//                 full: URL.createObjectURL(file),
//             }
//         }))

//         //console.log(newPhotos);
//         setPhotos((prev) => [...prev, ...newPhotos])
//     }

//     return (
//         <section>
//             <input 
//                 type = "file"
//                 multiple
//                 accept="image/*,video/*"
//                 onChange={handleFileChange}         
//             />
//         </section>
//     )
// }
