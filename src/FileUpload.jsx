// import { useState , useRef } from 'react';

// /*

// */

// export function FileUpload() {
//     const [files, setFiles] = useState([]);

//     const inputRef = useRef(null);

//     function handleFileSelect(e) {
//         if (!e.target.files?.length) {
//             return;
//         }

//         const newFiles = Array.from(e.target.files).map((file) => ({
//             file,
//             progress: 0,
//             uploaded: false,
//             id: file.name,
//         }));

//         setFiles([...files,...newFiles]);

//         if(inputRef.current) {
//             inputRef.current.value = '';
//         }
//     }

//     return (
//        <div className="file-upload-container">
//             <h2 className="file-upload-header">File Upload</h2>
//             <div className="file-upload-input-container">
//                 <FileInput 
//                     inputRef={inputRef}
//                     disabled={false}
//                     onFileSelect={handleFileSelect}
//                 />

//             </div>
//        </div>
//     )
// }

// function FileInput({ inputRef, disabled, onFileSelect }) {
//     return (
//         <>
//             <input
//                 type="file"
//                 ref={inputRef}
//                 onChange={onFileSelect}
//                 multiple
//                 className="hidden"
//                 id="file-upload"
//                 disabled={disabled}
//             />
//             <label
//                 htmlFor="file-upload"
//                 className="file-upload-label"
//             >
//                 Select Files
//             </label>
//         </>
//     )

// }

// function FileList({ files, onRemove, uploading}) {
//     if (files.length === 0) {
//         return null;
//     }

//     return (
//         <div className="file-list-container">
//             <h3 className="file-list-header">Files: </h3>
//             <div className="file-list-items">
//                 {files.map((file => (
//                     <FileItem
//                         key={file.id}
//                         file={file}
//                         onRemove={onRemove}
//                         uploading={uploading}
//                     />
//                 )))}
//             </div>
//         </div>
//     )
// }

// c

// const getFileIcon = (mimeType) => {
//     if (mimeType.startsWith('image/')) return FileImage;
//     if (mimeType.startsWith('video/')) return FileVideo;
//     return FileIcon;
// }

// const formatFileSize = (bytes) => {
//     if (bytes === 0) return '0 B';
//     const k = 1024;
//     const sizes = ['B', 'KB', 'MB', 'GB'];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return `${parseFloat((bytes / Math.pow(k,i)).toFixed(1))} ${sizes[i]}`;
// }