import { useQuery } from "@tanstack/react-query"
import { getPing } from "../_api"

export const usePing = () => {
    return useQuery({
        queryKey: ["ping"],
        queryFn: getPing,
    })
}
