export default function UploadForm ({uploader}){
    const handleChange = (e) =>{
        uploader(e.target.files[0])
    }
    return (
        <input type="file" accept ="image/*" onChange ={handleChange}/>
    )
}