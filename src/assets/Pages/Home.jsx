import React, { useEffect } from 'react'
import { fetchDataFromApi } from '../Utils/APi'

export default function Home() {

    useEffect(() => {
        // GetData()
    }, [])
    const GetData = async () => {
        const data = await fetchDataFromApi("/movie/popular")
        console.log(data)
    }
    return (
        <div>
            
        </div>
    )
}
