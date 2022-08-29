import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (categ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const nwImages = await getGifs(categ)
        setImages(nwImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages(categ)
    }, [])

    return {
        images,
        isLoading
    }

}
