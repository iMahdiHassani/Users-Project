import {QueryClient, useMutation, useQueryClient} from '@tanstack/react-query'
import APIClient from '../services/apiClient'
import { Post } from '../entites/Post';
const queryClient=new  QueryClient()
const apiClient=new APIClient<Post>('/posts')
const useDeletePost=()=>useMutation({
  mutationFn:apiClient.delete,
    onSuccess:()=>{
      alert('Post successfully Deleted');
      queryClient.invalidateQueries({
        queryKey:['posts']
      })
    }
  }) 
export default useDeletePost;