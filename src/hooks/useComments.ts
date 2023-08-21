import {useQuery} from '@tanstack/react-query'
import APIClient from '../services/apiClient'
import { Comment } from '../entites/Comment'

const apiClient=new APIClient<Comment>(`/comments`)

const useComments=()=>

  useQuery({
    queryKey:['comments'],
    queryFn:apiClient.getAll,
    staleTime:24*60*60*1000

  })

export default useComments;