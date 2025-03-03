import { QueryKey, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMenu = async ({ queryKey } :{ queryKey : QueryKey }) => {
  try {
    let id = queryKey[1];
    let url = 'https://my-json-server.typicode.com/kimsuminn/randysdonuts/event';

    if (typeof id === 'string') {
      url = `https://my-json-server.typicode.com/kimsuminn/randysdonuts/event/${id}`
    }

    const response = await axios.get(url);
    return response.data;
  } catch(e) {
    console.error(e);
  }
};

export const useFetchEvent = (id :string | undefined | null) => {
  return useQuery({
    queryKey: ['event', id],
    queryFn: fetchMenu,
    retry: 1,
    gcTime: 60 * 60 * 1000,
    staleTime: 59 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true
  })
}