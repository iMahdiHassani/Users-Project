import {useQuery} from '@tanstack/react-query'
import APIClient from '../services/apiClient'
import { User } from '../entites/User'

const apiClient=new APIClient<User>('/users')
const useUser=(id:number)=>
  useQuery({
    queryKey:['users',id],
    queryFn:()=>apiClient.get(id),
    staleTime:24*60*60*1000
  })
export default useUser;