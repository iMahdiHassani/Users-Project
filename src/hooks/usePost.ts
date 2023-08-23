import {useQuery,useMutation} from '@tanstack/react-query'
import APIClient from '../services/apiClient'
import { Post } from '../entites/Post'

const apiClient=new APIClient<Post>('/posts')
const usePost=(id:number)=>
  useQuery({
    queryKey:['posts',id],
    queryFn:()=>apiClient.get(id),
    staleTime:24*60*60*1000

  }) 

export default usePost;