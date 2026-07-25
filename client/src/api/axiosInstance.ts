import axios from "axios";
import { BASE_URL } from ".";

export const apiClient  = axios.create({
    baseURL: BASE_URL
})

export function getApiErrorMessage(err: unknown): string {
    if(axios.isAxiosError(err)) {
        return err.response?.data?.error ? err.response?.data?.error : err?.message
    }
    return err instanceof Error ? err.message : 'Something went wrong'
}