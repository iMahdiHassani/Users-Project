import {useQuery } from "@tanstack/react-query"
import APIClient from "../services/apiClient"
import { Album } from "../entites/Album"

const useAlbums=(id:number)=>{
  const apiClient=new APIClient<Album>(`users/${id}/albums`)
  return useQuery({
    queryKey:['albums',id],
    queryFn:apiClient.getAll
  })
}
export default useAlbums;