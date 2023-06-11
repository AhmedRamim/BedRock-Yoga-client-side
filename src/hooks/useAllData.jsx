import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAllData = () => {
    const {user} = useContext(AuthContext)
    const {refetch, data } = useQuery({
        queryKey: ['allclasses',user?.email],
        queryFn: async () => {
          const res = await  fetch(`${import.meta.env.VITE_url}/allclasses/${user?.email}`)
           return res.json() }
    })
    return [data,refetch];
}

export default useAllData;