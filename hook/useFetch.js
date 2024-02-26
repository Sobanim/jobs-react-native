import { useState, useEffect } from 'react'
import axios from "axios";
// import { RAPID_API_KEY } from '@env'

// const rapidApiKey = RAPID_API_KEY

export const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
            'X-RapidAPI-Key': '3cdd01f08emshc31ceea6c0a559dp1cbffdjsn458b23b3bf66',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

   const fetchData = async () => {
       setIsLoading(true)

       try {
           const response = await axios.request(options)
           setData(response?.data?.data)
       } catch (error) {
           console.log('ERROR', error)
           setError(error)
           alert('There is error')
       } finally {
            setIsLoading(false)
       }
   }

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, []);

    return [ data, isLoading, error, refetch ]
}

export default useFetch
