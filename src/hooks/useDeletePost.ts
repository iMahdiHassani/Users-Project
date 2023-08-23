import {useMutation, useQueryClient} from '@tanstack/react-query'
import APIClient from '../services/apiClient'
import { Post } from '../entites/Post'
const apiClient=new APIClient(`/posts`)
const useDeletePost=(id:number)=>{
const queryClient=useQueryClient();

  return useMutation<void,Error,number>({
    mutationFn:()=>apiClient.delete(id),
    onSuccess:()=>{
      alert('Post successfully Deleted');
      queryClient.invalidateQueries({
        queryKey:['posts']
      })
    }
  }) 
}
export default useDeletePost;