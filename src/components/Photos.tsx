import { useParams } from "react-router-dom"
import usePhotos from "../hooks/usePhotos"
import Spinner from "./Spinner";

const Photos = () => {
  const {id}=useParams()
  const {data,isLoading}=usePhotos(Number(id));

  if(isLoading) return <Spinner/>
  return (
    <div className="mt-4 max-w-5xl mx-auto grid grid-cols-3 gap-3 ">
      {data?.map((photo)=>(
        <div className="shadow-md p-3 rounded-lg flex flex-col gap-3" key={photo.id}>
          <p className="text-lg font-bold">{photo.title}</p>
          <img src={photo.url}/>
        </div>
      ))}
    </div>
  )
}

export default Photos