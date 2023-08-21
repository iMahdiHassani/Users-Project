import {useQuery} from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import { Post } from '../entites/Post';

const apiClient=new APIClient<Post>('/posts')
const usePosts=()=>
  useQuery({
    queryKey:['posts'],
    queryFn:apiClient.getAll,
    staleTime:24*60*60*1000

  })
export default usePosts;