import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { User } from "../entites/User";

const apiClient=new APIClient<User>('/users')

const useUsers=()=>
  useQuery({
    queryKey:['users'],
    queryFn:apiClient.getAll,
    staleTime:24*60*60*1000
  })

export default useUsers;