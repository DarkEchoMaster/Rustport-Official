import {FiUpload} from "react-icons/fi";
export default function ImageUploader({label,name,multiple=false,onChange}){return <label className="image-uploader"><FiUpload/><strong>{label}</strong><small>Choose {multiple?"images":"an image"}</small><input name={name} type="file" accept="image/*" multiple={multiple} onChange={onChange}/></label>;}
