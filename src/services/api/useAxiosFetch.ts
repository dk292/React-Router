import { useState, useEffect } from "react";
import axios from "axios";
import { Van } from "../../Models/Van";

interface Data {
    vans: Van[] | Van | null
}

const useAxiosFetch = (dataUrl: string) => {
    const [data, setData] = useState<Data | null>(null)
    const [err, setErr] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem( "vanData" , JSON.stringify(data))
    }, [data])

    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source()

        const fetchData =async (url: string) => {
            setIsLoading(true)
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                })
                if (isMounted) {
                    console.log(response.data)
                    setData(response.data)
                }
            } catch (error: any) {
                if (isMounted) {
                    setErr(error.message)
                    setData(null)
                }
            } finally {
                isMounted && setIsLoading(false)
            }
        }

        fetchData(dataUrl)

        return () => {
            isMounted = false
            source.cancel()
        }
    }, [dataUrl])

    return {data, err, isLoading}
}

export default useAxiosFetch