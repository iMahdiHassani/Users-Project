import {useQuery} from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import { Post } from '../entites/Post';

const usePosts=(id:number)=>{
  const apiClient=new APIClient<Post>(`users/${id}/posts`)
  return useQuery({
    queryKey:['posts',id],
    queryFn:apiClient.getAll,

  })}
export default usePosts;