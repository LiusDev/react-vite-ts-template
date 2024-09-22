import { AuthEndpoint } from "../../../endpoint"
import { PingResponse } from "../../../types"
import { instance } from "../../../utils"

export const getPing = async () => {
    const { data } = await instance.get<PingResponse>(AuthEndpoint.PING)
    return data
}
