import {useQuery} from '@tanstack/react-query'
import APIClient from '../services/apiClient'
import { Comment } from '../entites/Comment'


const useComments=(id:number)=>{
const apiClient=new APIClient<Comment>(`posts/${id}/comments`)

  return useQuery({
    queryKey:['comments',id],
    queryFn:apiClient.getAll,
    staleTime:24*60*60*1000

  })
}
export default useComments;