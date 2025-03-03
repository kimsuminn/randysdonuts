import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMenu = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/kimsuminn/randysdonuts/event');
    return response.data;
  } catch(e) {
    console.error(e);
  }
};

export const useFetchEvent = () => {
  return useQuery({
    queryKey: ['event'],
    queryFn: fetchMenu,
    retry: 1,
    gcTime: 60 * 60 * 1000,
    staleTime: 59 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true
  })
}