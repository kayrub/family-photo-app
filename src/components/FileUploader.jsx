export function FileUploader({setPhotos}) {

    //check if files, if so upload. 
    //parse the data into readable format, through mapping into readable objects.
    //setPhotos to prev and new dataa.
    function handleFileChange(e) {
        const files = Array.from(e.target.files);

        const newPhotos = files.map((file) => ({
            id: crypto.randomUUID(),
            name: file.name,
            type: file.type,
            desc: file.name,
            urls: {
                thumbnail: file.name,
                full: URL.createObjectURL(file),
            }
        }))

        //console.log(newPhotos);
        setPhotos((prev) => [...prev, ...newPhotos])
    }

    return (
        <section>
            <input 
                type = "file"
                multiple
                accept="image/*,video/*"
                onChange={handleFileChange}         
            />
        </section>
    )
}
// import axios from 'axios';

// export function FileUploader() {
//     const [file, setFile] = useState(null);
//     const [status, setStatus] = useState('idle');
//     const [uploadProgress, setUploadProgress] = useState(0);

//     function handleFileChange(e) {
//         if (e.target.files) {
//             setFile(e.target.files[0]);
//         }
//     }

//     async function handleFileUpload() {
//         if (!file) return;

//         setStatus('uploading');
//         setUploadProgress(0);

//         //convert file to formData
//         const formData = new FormData();
//         formData.append('file', file);

//         try {
//             await axios.post("https://httpbin.org/post", formData, {
//                 onUploadProgress: (progressEvent) => {
//                     const progress = progressEvent.total  
//                         ? Math.round((progressEvent.loaded * 100 / progressEvent.total))
//                         : 0;
//                     setUploadProgress(progress);
//                 },
//             });

//             setStatus('success');
//             setUploadProgress(100);
//         } catch {
//             setStatus('error');
//             setUploadProgress(0);
//         };
//     }

//     return (
//         <div className='space-y-2'>
//             <input 
//                 type='file' 
//                 onChange={handleFileChange}    
//             />

//             {file && (
//                 <div className="file-item">
//                     <p>File name: {file.name}</p>
//                     <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
//                     <p>Type: {file.type}</p>
//                 </div>
//             )}

//             {status === 'uploading' && (
//                 <div>
//                     <div>
//                         <div
//                             style = {{ width: `${uploadProgress}%` }}>
//                         </div>    
//                     </div>
//                     <p >{uploadProgress}% uploaded</p>
//                 </div>
//             )}

//             {file && status !== 'uploading' && 
//                 <button
//                     onClick={handleFileUpload}>
//                 Upload
//                 </button>
//             }

//             {status === 'success' && (
//                 <p className="file-item-success">
//                     Successfully uploaded File!
//                 </p>
//             )}

//             {status === 'error' && (
//                 <p className="file-item-failed">
//                     Failed to upload File.
//                 </p>
//             )}
//         </div>
//     )
// }