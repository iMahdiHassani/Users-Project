import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/apiClient"
import { Photo } from "../entites/Photo"

const usePhotos=(id:number)=>{
  const apiClient=new APIClient<Photo>(`albums/${id}/photos`)
  return useQuery({
    queryKey:['albums',id],
    queryFn:apiClient.getAll
  
  })
}
export default usePhotos;