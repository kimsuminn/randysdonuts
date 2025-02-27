import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchMenuList = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/kimsuminn/randysdonuts/menu');
    return response.data;
  } catch(e) {
    console.error(e);
  }
}

export const useFetchMenu = () => {
  return useQuery({
    queryKey: ['menu'],
    queryFn: fetchMenuList,
    retry: 1,
    gcTime: 60 * 60 * 1000,
    staleTime: 59 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true
  })
}